CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  role VARCHAR(20) NOT NULL
);

-- create index
CREATE INDEX idx_users_email ON users ( email );
CREATE INDEX idx_users_role ON users ( role );

-- add foreing key
ALTER TABLE users 
  ADD CONSTRAINT fk_users_role
  FOREIGN KEY ( role )
    REFERENCES user_roles ( role_name )
    ON DELETE CASCADE 
    ON UPDATE CASCADE;