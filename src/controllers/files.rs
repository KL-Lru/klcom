use crate::services::errors::StatusError;
use actix_files::NamedFile;
use actix_web::{web, Result};
#[derive(Deserialize)]
pub struct BundleFile {
  filename: String,
}

pub async fn public_file(info: web::Path<BundleFile>) -> Result<NamedFile, StatusError> {
  match NamedFile::open(format!("public/{}", info.filename)) {
    Ok(fs) => Ok(fs),
    Err(_) => Err(StatusError::NotFound),
  }
}
