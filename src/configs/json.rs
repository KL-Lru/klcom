use actix_web::web::JsonConfig;

pub fn json_configure() -> JsonConfig {
  JsonConfig::default().limit(4096)
}
