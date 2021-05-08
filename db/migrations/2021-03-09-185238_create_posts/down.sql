ALTER TABLE posts DROP CONSTRAINT fk_posts_user;
DROP INDEX idx_posts_user;
DROP TABLE posts;