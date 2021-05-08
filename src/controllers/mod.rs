pub mod apis;
pub mod files;
use actix_web::{HttpRequest, HttpResponse, Result};

pub async fn health(_req: HttpRequest) -> Result<HttpResponse> {
  Ok(HttpResponse::NoContent().finish())
}

pub async fn not_found(_req: HttpRequest) -> Result<HttpResponse> {
  Ok(HttpResponse::NotFound().finish())
}
