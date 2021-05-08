use crate::models::users::User;
use crate::services::errors::StatusError;
use actix_identity::Identity;
use diesel::prelude::PgConnection;

pub fn identity_user(id: Identity, conn: &PgConnection) -> Result<User, StatusError> {
  if let Some(uid) = id.identity() {
    let user_id = uid.parse()?;
    if let Some(user) = User::find(&user_id, &conn)? {
      return Ok(user);
    }
  }
  Err(StatusError::Forbidden)
}

pub fn is_authorized(id: Identity, conn: &PgConnection) -> bool {
  identity_user(id, conn).is_ok()
}
