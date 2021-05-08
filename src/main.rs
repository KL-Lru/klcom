#[macro_use]
extern crate serde;
#[macro_use]
extern crate serde_json;
extern crate serde_yaml;
#[macro_use]
extern crate diesel;

use actix_web::{web, App, HttpServer};

use env_logger as logger;
use std::env;
use std::io::{Error, ErrorKind};

mod configs;
mod controllers;
mod models;
mod repositories;
mod services;
mod tasks;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
  // logger setting
  std::env::set_var("RUST_LOG", "actix_web=info,diesel=debug");
  logger::init();

  let db_pool = repositories::connection::build_db_pool();
  let args: Vec<String> = env::args().collect();
  if args.len() >= 3 {
    let command = args[1].as_str();
    let params = args[2].clone();
    match command {
      "task" => {
        return match tasks::run(params, db_pool) {
          Ok(_) => Ok(()),
          Err(e) => {
            println!("{:?}", e);
            Err(Error::new(ErrorKind::Other, "Fail to execute task."))
          }
        }
      }
      _ => return Err(Error::new(ErrorKind::Other, "Invalid command")),
    }
  }

  // start server
  HttpServer::new(move || {
    //let cors = configs::cors::cors_configure();
    let identity = configs::identity::identity_configure();
    let logger = configs::logger::logger_configure();
    let json_config = configs::json::json_configure();

    App::new()
      //.wrap(cors)
      .wrap(identity)
      .wrap(logger)
      .data(db_pool.clone())
      .data(json_config)
      .configure(configs::routes::route_configure)
      .default_service(
        web::route().to(controllers::not_found),
      )
  })
  .bind("127.0.0.1:8088")?
  .run()
  .await
}
