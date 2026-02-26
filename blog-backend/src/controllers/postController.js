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

exports.getAllPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const offset = (page - 1) * limit;

    const posts = await pool.query(
      `
      SELECT 
        posts.id,
        posts.title,
        posts.content,
        posts.created_at,
        users.name AS author
      FROM posts
      JOIN users ON posts.user_id = users.id
      WHERE posts.title ILIKE $1
      ORDER BY posts.created_at DESC
      LIMIT $2 OFFSET $3
      `,
      [`%${search}%`, limit, offset]
    );

    const total = await pool.query(
      "SELECT COUNT(*) FROM posts WHERE title ILIKE $1",
      [`%${search}%`]
    );

    res.json({
      page,
      totalPosts: parseInt(total.rows[0].count),
      totalPages: Math.ceil(total.rows[0].count / limit),
      posts: posts.rows,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};