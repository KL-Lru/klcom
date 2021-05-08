ALTER TABLE post_tags DROP CONSTRAINT fk_post_tags_post;
ALTER TABLE post_tags DROP CONSTRAINT fk_post_tags_tag;
DROP INDEX idx_post_tags_post;
DROP INDEX idx_post_tags_tag;
DROP TABLE post_tags;