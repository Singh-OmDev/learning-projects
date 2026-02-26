const pool = require("../config/db");

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const newPost = await pool.query(
      "INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *",
      [userId, title, content]
    );

    res.status(201).json(newPost.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL POSTS WITH AUTHOR NAME (JOIN 🔥)
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await pool.query(`
      SELECT 
        posts.id,
        posts.title,
        posts.content,
        posts.created_at,
        users.name AS author
      FROM posts
      JOIN users ON posts.user_id = users.id
      ORDER BY posts.created_at DESC
    `);

    res.json(posts.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};