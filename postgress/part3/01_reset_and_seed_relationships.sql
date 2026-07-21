CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Drop tables (child tables first)
DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL
);

-- Posts table
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published')),
    views INTEGER NOT NULL DEFAULT 0
        CHECK (views >= 0)
);

-- Comments table
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID NOT NULL REFERENCES posts(id),
    body TEXT NOT NULL
);

-- Tags table
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);

-- Junction table (Many-to-Many)
CREATE TABLE post_tags (
    post_id UUID NOT NULL REFERENCES posts(id),
    tag_id UUID NOT NULL REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);

-- ===========================
-- Seed Users
-- ===========================

INSERT INTO users (name)
VALUES
    ('Ananya'),
    ('Rahul');

-- ===========================
-- Seed Posts
-- ===========================

INSERT INTO posts (user_id, title, status, views)
SELECT id, 'PostgreSQL Joins Explained', 'published', 100
FROM users
WHERE name = 'Ananya';

INSERT INTO posts (user_id, title, status, views)
SELECT id, 'Indexes for Beginners', 'draft', 40
FROM users
WHERE name = 'Ananya';

INSERT INTO posts (user_id, title, status, views)
SELECT id, 'Backend APIs with PostgreSQL', 'published', 180
FROM users
WHERE name = 'Rahul';

-- ===========================
-- Seed Comments
-- ===========================

INSERT INTO comments (post_id, body)
SELECT id, 'Very clear explanation.'
FROM posts
WHERE title = 'PostgreSQL Joins Explained';

INSERT INTO comments (post_id, body)
SELECT id, 'Please add more examples.'
FROM posts
WHERE title = 'Backend APIs with PostgreSQL';

-- ===========================
-- Seed Tags
-- ===========================

INSERT INTO tags (name)
VALUES
    ('sql'),
    ('backend');

-- ===========================
-- Seed Post Tags
-- ===========================

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'PostgreSQL Joins Explained'
  AND t.name = 'sql';

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'Indexes for Beginners'
  AND t.name = 'sql';

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'Backend APIs with PostgreSQL'
  AND t.name = 'backend';

-- ===========================
-- Success Message
-- ===========================

SELECT 'Part 3 reduced database reset and sample data inserted successfully!' AS message;