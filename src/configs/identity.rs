use actix_http::cookie::SameSite;
use actix_identity::{CookieIdentityPolicy, IdentityService};

pub fn identity_configure() -> IdentityService<CookieIdentityPolicy> {
  IdentityService::new(
    CookieIdentityPolicy::new(&[0; 32])
      .name("auths")
      .path("/")
      .same_site(SameSite::Strict)
      .max_age(3600)
      .secure(true),
  )
}
