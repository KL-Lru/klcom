use actix_http::cookie::SameSite;
use actix_identity::{CookieIdentityPolicy, IdentityService};
use dotenv::dotenv;
use std::env;

pub fn identity_configure() -> IdentityService<CookieIdentityPolicy> {
  dotenv().ok();
  let mode = env::var("MODE").expect("MODE is not set.");
  IdentityService::new(
    CookieIdentityPolicy::new(&[0; 32])
      .name("auths")
      .path("/")
      .same_site(SameSite::Strict)
      .max_age(3600)
      .secure(mode != "development"),
  )
}
