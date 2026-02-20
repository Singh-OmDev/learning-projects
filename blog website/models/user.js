const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createTokenForUser } = require("../services/authentication");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    salt: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },

    profileImageURL: {
      type: String,
      default: "/images/download.jpg",
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

// ✅ Password Hashing
userSchema.pre("save", function () {
  if (!this.isModified("password")) return;

  const salt = randomBytes(16).toString("hex");

  const hashedPassword = createHmac("sha256", salt)
    .update(this.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
});

// ✅ Correct Login Password Match Function
userSchema.statics.matchPasswordAndGenerateToken = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const userProvidedHash = createHmac("sha256", user.salt)
    .update(password) // ✅ password entered by user
    .digest("hex");

  if (user.password !== userProvidedHash) {
    throw new Error("Incorrect password");
  }

  // ✅ Remove sensitive fields
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.salt;

   const token = createTokenForUser(user);
    return token;



};

const User = model("User", userSchema);

module.exports = User;
