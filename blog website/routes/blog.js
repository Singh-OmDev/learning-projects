import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Blog from "../models/blog.js";

    import Comment from "../models/comment.js";

const router = Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userFolder = path.resolve(`./public/uploads/${req.user._id}`);

    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true });
    }

    cb(null, userFolder);
  },

  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });



router.get("/add-new", (req, res) => {
  return res.render("addBlog");
});


router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");

  const comments = await Comment.find({ blogId: req.params.id })
    .populate("createdBy");

  res.render("blog", {
    blog,
    comments, // ✅ send comments to EJS
  });
});





router.post("/add-new", upload.single("coverImage"), async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  const { title, body } = req.body;

  const blog = await Blog.create({
    title,
    body,
    coverImageURL: req.file
      ? `/uploads/${req.user._id}/${req.file.filename}`
      : "",
    createdBy: req.user._id,
  });

  return res.redirect("/");
});

// ✅ 3️⃣ SINGLE BLOG PAGE (DYNAMIC ROUTE LAST)
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('createdBy');

  return res.render("blog", {
    blog,
  });
});

export default router;
