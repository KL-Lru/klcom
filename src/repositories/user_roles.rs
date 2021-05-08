use crate::models::user_roles::{NewUserRole, UserRole};
use crate::repositories::schema::user_roles::dsl::*;
use diesel::prelude::*;

impl UserRole {
  pub fn find(q_id: &i32, conn: &PgConnection) -> Result<Option<UserRole>, diesel::result::Error> {
    let user_role = user_roles
      .filter(id.eq(&q_id))
      .first::<UserRole>(conn)
      .optional()?;

    Ok(user_role)
  }

  pub fn create(
    new_role: &NewUserRole,
    conn: &PgConnection,
  ) -> Result<UserRole, diesel::result::Error> {
    diesel::insert_into(user_roles)
      .values(new_role)
      .get_result(conn)
  }

  pub fn update(
    user_role: &UserRole,
    conn: &PgConnection,
  ) -> Result<UserRole, diesel::result::Error> {
    diesel::update(user_roles)
      .filter(id.eq(user_role.id))
      .set(user_role)
      .get_result(conn)
  }
}
