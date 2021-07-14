use crate::controllers;
use actix_web::web;

pub fn route_configure(cfg: &mut web::ServiceConfig) {
  cfg
    .service(web::resource("/health").route(web::get().to(controllers::health)))
    .service(
      web::scope("/auths")
        .service(web::resource("/signin").route(web::post().to(controllers::apis::auths::signin)))
        .service(
          web::resource("/signout").route(web::delete().to(controllers::apis::auths::signout)),
        ),
    )
    .service(
      web::scope("posts")
        .service(
          web::resource("")
            .route(web::get().to(controllers::apis::posts::index))
            .route(web::post().to(controllers::apis::posts::create)),
        )
        .service(
          web::resource("/{id}")
            .route(web::get().to(controllers::apis::posts::show))
            .route(web::put().to(controllers::apis::posts::update))
        ),
    )
    .service(
      web::scope("change_logs")
        .service(
          web::resource("")
            .route(web::get().to(controllers::apis::change_logs::index))
            .route(web::post().to(controllers::apis::change_logs::create)),
        )
        .service(
          web::resource("/{id}").route(web::put().to(controllers::apis::change_logs::update)),
        ),
    )
    .service(web::resource("/{filename}").route(web::get().to(controllers::files::public_file)));
}
