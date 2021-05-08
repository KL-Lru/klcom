create table posts (
  id SERIAL NOT NULL PRIMARY KEY,
  author INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  publish BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- create index
CREATE INDEX idx_posts_user ON posts ( author );

-- add foreign key
ALTER TABLE posts 
  ADD CONSTRAINT fk_posts_user
  FOREIGN KEY (author)
    REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
  