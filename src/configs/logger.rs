use actix_web::middleware::Logger;

pub fn logger_configure() -> Logger {
  Logger::default()
}
