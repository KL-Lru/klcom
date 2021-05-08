create table tags (
  id SERIAL NOT NULL,
  tag_name VARCHAR(255) NOT NULL PRIMARY KEY
);

-- create index
CREATE INDEX idx_tag_id ON tags ( id );
