CREATE TABLE user_roles (
  id INTEGER NOT NULL UNIQUE,
  role_name VARCHAR(20) NOT NULL PRIMARY KEY
);

-- create index
CREATE INDEX idx_user_roles_id ON user_roles ( id );
