use crate::services::errors;
use actix_files::NamedFile;
use actix_web::{get, web, Result};
#[derive(Deserialize)]
struct BundleFile {
    filename: String,
}

#[get("/{filename}")]
async fn public_file(info: web::Path<BundleFile>) -> Result<NamedFile, errors::StatusError> {
    match NamedFile::open(format!("public/{}", info.filename)) {
        Ok(fs) => Ok(fs),
        Err(_) => Err(errors::StatusError::NotFound),
    }
}
