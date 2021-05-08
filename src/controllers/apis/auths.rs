use actix_identity::Identity;
use actix_web::{web, HttpResponse, Result};

use crate::models::users::CreateSession;
use crate::models::users::User;
use crate::repositories::connection::DbPool;
use crate::services::crypt::verify_password;
use crate::services::errors::StatusError;
// ** NOT SUPPORT SIGN UP **

pub async fn signin(
  info: web::Json<CreateSession>,
  id: Identity,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  if let Some(user) = User::find_by_email(&info.email, &conn)? {
    if verify_password(&info.password, &user.password)? {
      id.remember(user.id.to_string());
      return Ok(HttpResponse::Ok().finish());
    }
  }
  Err(StatusError::Unauthorized)
}

pub async fn signout(id: Identity) -> Result<HttpResponse> {
  id.forget();
  Ok(HttpResponse::NoContent().finish())
}
