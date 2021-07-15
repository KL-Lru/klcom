use crate::models::users::{NewUser, User};
use crate::repositories::schema::users::dsl::*;
use diesel::prelude::*;

impl User {
  pub fn find(q_id: &i32, conn: &PgConnection) -> Result<Option<User>, diesel::result::Error> {
    let user = users.filter(id.eq(&q_id)).first::<User>(conn).optional()?;

    Ok(user)
  }

  pub fn find_by_email(
    q_email: &str,
    conn: &PgConnection,
  ) -> Result<Option<User>, diesel::result::Error> {
    let user = users
      .filter(email.eq(&q_email))
      .first::<User>(conn)
      .optional()?;

    Ok(user)
  }

  pub fn create(new_user: &NewUser, conn: &PgConnection) -> Result<User, diesel::result::Error> {
    diesel::insert_into(users).values(new_user).get_result(conn)
  }
}
