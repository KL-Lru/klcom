mod insert_admins;
mod upsert_user_roles;
use crate::repositories::connection::DbPool;
use crate::services::errors::TaskError;
use dotenv::dotenv;
use std::env;

pub fn run(task: String, pool: DbPool) -> Result<(), TaskError> {
  dotenv().ok();

  let mode = env::var("MODE").expect("MODE must be set");
  if mode.as_str() == "production" {
    return Err(TaskError::TaskNotPermitted);
  }

  println!("run task: {}", &task);
  match &*task {
    "upsert_user_roles" => upsert_user_roles::execute(pool),
    "insert_admins" => insert_admins::execute(pool),
    _ => Err(TaskError::TaskNotFound),
  }
}
