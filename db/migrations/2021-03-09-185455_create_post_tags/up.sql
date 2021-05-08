create table post_tags (
  id SERIAL NOT NULL PRIMARY KEY,
  post INTEGER NOT NULL,
  tag VARCHAR(255) NOT NULL
);

-- create index
CREATE INDEX idx_post_tags_post ON post_tags ( post );
CREATE INDEX idx_post_tags_tag ON post_tags ( tag );  

-- add foreign key
ALTER TABLE post_tags 
  ADD CONSTRAINT fk_post_tags_post
  FOREIGN KEY (post)
    REFERENCES posts (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE post_tags
  ADD CONSTRAINT fk_post_tags_tag
  FOREIGN KEY (tag)
    REFERENCES tags (tag_name)
    ON DELETE CASCADE
    ON UPDATE CASCADE;