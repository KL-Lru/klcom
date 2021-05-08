use actix_cors::Cors;
use actix_web::http::header;

pub fn cors_configure() -> Cors {
  Cors::default()
    .allowed_origin("http://localhost:8088")
    .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
    .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
    .allowed_header(header::CONTENT_TYPE)
    .max_age(3600)
}
