-- Your SQL goes here
create table change_logs (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  changed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
