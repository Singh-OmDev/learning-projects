const pool = require("../config/db");









// GET SINGLE POST WITH COMMENTS
exports.getPostWithComments = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await pool.query(`
      SELECT 
        posts.id,
        posts.title,
        posts.content,
        posts.created_at,
        users.name AS author
      FROM posts
      JOIN users ON posts.user_id = users.id
      WHERE posts.id = $1
    `, [postId]);

    if (post.rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comments = await pool.query(`
      SELECT 
        comments.id,
        comments.content,
        comments.created_at,
        users.name AS commenter
      FROM comments
      JOIN users ON comments.user_id = users.id
      WHERE comments.post_id = $1
      ORDER BY comments.created_at ASC
    `, [postId]);

    res.json({
      post: post.rows[0],
      comments: comments.rows
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// ADD COMMENT
exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.id;
    const postId = req.params.postId;

    const newComment = await pool.query(
      "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
      [postId, userId, content]
    );

    res.status(201).json(newComment.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};