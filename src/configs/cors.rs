use actix_cors::Cors;
use actix_web::http::header;
use dotenv::dotenv;
use std::env;

pub fn cors_configure() -> Cors {
  dotenv().ok();

  let front_root = env::var("FRONT_ROOT").expect("FRONT_END must be set");

  Cors::default()
    .allowed_origin(&front_root)
    .supports_credentials()
    .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
    .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
    .allowed_header(header::CONTENT_TYPE)
    .max_age(3600)
}
