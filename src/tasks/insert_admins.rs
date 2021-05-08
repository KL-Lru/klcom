use crate::models::users::NewUser;
use crate::models::users::User;
use crate::repositories::connection::DbPool;
use crate::services::crypt::hash_password;
use crate::services::errors::TaskError;
use std::fs::File;

pub fn execute(pool: DbPool) -> Result<(), TaskError> {
  let conn = pool.get()?;
  let config_file = File::open("db/secrets/admin_users.yml")?;
  let users: Vec<NewUser> = serde_yaml::from_reader(config_file)?;

  for user in users.iter() {
    match User::find_by_email(&user.email, &conn)? {
      None => {
        let regist = NewUser {
          name: user.name.clone(),
          email: user.email.clone(),
          password: hash_password(&user.password)?,
          role: user.role.clone(),
        };
        User::create(&regist, &conn)?;
      }
      Some(_) => {
        continue;
      }
    };
  }
  Ok(())
}
