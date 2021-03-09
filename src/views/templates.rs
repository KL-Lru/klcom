use actix_web::web;
use dotenv::dotenv;
use handlebars::Handlebars;
use std::env;

pub fn registered_handle() -> web::Data<Handlebars<'static>> {
    let mut handlebars = Handlebars::new();
    handlebars
        .register_template_file("default", "templates/index.hbs")
        .unwrap();
    web::Data::new(handlebars)
}

pub fn webpack_output_path(identifier: String) -> String {
    dotenv().ok();

    let mode = env::var("MODE").expect("MODE must be set");
    match mode.as_str() {
        "production" => format!("bundle/{}.bundle.js", identifier),
        "development" => {
            let dev_server =
                env::var("DEV_SERVER").expect("in development mode, DEV_SERVER must be set");
            format!("{}/{}.bundle.js", dev_server, identifier)
        }
        _ => panic!("Unknown mode"),
    }
}
