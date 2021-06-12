use actix_identity::Identity;
use actix_web::{web, HttpResponse, Result};

use crate::models::change_logs::{ChangeLog, NewChangeLog, UpdateChangeLog};
use crate::repositories::connection::DbPool;
use crate::services::errors::StatusError;
use crate::services::identity::is_authorized;

pub async fn index(pool: web::Data<DbPool>) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  let results = ChangeLog::all(&conn)?;
  let body = json!(&results).to_string();

  Ok(
    HttpResponse::Ok()
      .content_type("application/json")
      .body(body),
  )
}

pub async fn create(
  id: Identity,
  info: web::Json<NewChangeLog>,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  if !is_authorized(id, &conn) {
    return Ok(HttpResponse::Forbidden().finish());
  }

  ChangeLog::create(&info, &conn)?;
  Ok(HttpResponse::NoContent().finish())
}

#[derive(Deserialize)]
pub struct UrlId {
  id: i32,
}

pub async fn update(
  id: Identity,
  p_info: web::Path<UrlId>,
  info: web::Json<NewChangeLog>,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  if !is_authorized(id, &conn) {
    return Ok(HttpResponse::Forbidden().finish());
  }

  let log = ChangeLog::find(p_info.id, &conn)?;
  match log {
    None => Ok(HttpResponse::NotFound().finish()),
    Some(tar) => {
      ChangeLog::update(
        &UpdateChangeLog {
          id: tar.id.clone(),
          title: info.title.clone(),
          description: info.description.clone(),
        },
        &conn,
      )?;
      Ok(HttpResponse::NoContent().finish())
    }
  }
}
