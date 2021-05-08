use crate::models::user_roles::NewUserRole;
use crate::models::user_roles::UserRole;
use crate::repositories::connection::DbPool;
use crate::services::errors::TaskError;
use std::fs::File;

pub fn execute(pool: DbPool) -> Result<(), TaskError> {
  let conn = pool.get()?;
  let config_file = File::open("db/data/user_roles.yml")?;
  let user_roles: Vec<NewUserRole> = serde_yaml::from_reader(config_file)?;
  for user_role in user_roles.iter() {
    match UserRole::find(&user_role.id, &conn)? {
      None => {
        let regist = NewUserRole {
          id: user_role.id.clone(),
          role_name: user_role.role_name.clone(),
        };
        UserRole::create(&regist, &conn)?;
      }
      Some(role) => {
        if role.role_name != user_role.role_name {
          let regist = UserRole {
            id: user_role.id.clone(),
            role_name: user_role.role_name.clone(),
          };
          UserRole::update(&regist, &conn)?;
        }
      }
    };
  }
  Ok(())
}
