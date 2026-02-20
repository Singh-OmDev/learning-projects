const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },

    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog", // must match Blog model name
      required: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User", // must match User model name
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
