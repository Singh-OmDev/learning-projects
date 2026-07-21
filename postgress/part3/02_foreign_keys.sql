-- Foreign key is a column that points to the primary key of another table.
-- users.id  -> Parent (Primary Key)
-- posts.user_id -> Foreign Key

-- Every post must belong to an existing user.

SELECT * FROM users;

SELECT id, user_id, title
FROM posts;