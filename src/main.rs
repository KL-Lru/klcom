#[macro_use]
extern crate serde;
#[macro_use]
extern crate serde_json;
extern crate serde_yaml;
#[macro_use]
extern crate diesel;

use actix_web::middleware::Logger;
use actix_web::{App, HttpServer};

use std::env;
use std::io::{Error, ErrorKind};
extern crate env_logger as logger;

mod repositories;
mod views;
mod routes;
mod services;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let db_pool = repositories::connection::build_db_pool();

    // logger setting
    std::env::set_var("RUST_LOG", "actix_web=info");
    logger::init();

    let handle = views::templates::registered_handle();
    // start server
    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .app_data(handle.clone())
            .data(db_pool.clone())
            .service(routes::files::public_file)
    })
    .bind("127.0.0.1:8088")?
    .run()
    .await
}
