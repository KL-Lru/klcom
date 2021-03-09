use actix_web::{HttpResponse, ResponseError};
use derive_more::Display;
use log::error;

#[derive(Debug, Display)]
pub enum StatusError {
    #[display(fmt = "[ERR]:Not Found")]
    NotFound,
    #[display(fmt = "[ERR]:Internal Server Error")]
    InternalServerError,
    #[display(fmt = "[ERR]:SQL connect Error")]
    SQLError,
}

impl From<diesel::result::Error> for StatusError {
    fn from(_: diesel::result::Error) -> Self {
        Self::SQLError
    }
}

impl From<diesel::r2d2::PoolError> for StatusError {
    fn from(_: diesel::r2d2::PoolError) -> Self {
        Self::SQLError
    }
}

#[derive(Debug)]
pub enum TaskError {
    IOError(std::io::Error),
    YamlError(serde_yaml::Error),
    JsonError(serde_json::Error),
    StatusError(StatusError),
    SQLError(diesel::result::Error),
    DatabaseError(diesel::r2d2::PoolError),
    TaskNotFound,
}

impl From<std::io::Error> for TaskError {
    fn from(e: std::io::Error) -> Self {
        Self::IOError(e)
    }
}

impl From<serde_json::Error> for TaskError {
    fn from(e: serde_json::Error) -> Self {
        Self::JsonError(e)
    }
}

impl From<serde_yaml::Error> for TaskError {
    fn from(e: serde_yaml::Error) -> Self {
        Self::YamlError(e)
    }
}

impl From<StatusError> for TaskError {
    fn from(e: StatusError) -> Self {
        Self::StatusError(e)
    }
}

impl From<diesel::result::Error> for TaskError {
    fn from(e: diesel::result::Error) -> Self {
        Self::SQLError(e)
    }
}

impl From<diesel::r2d2::PoolError> for TaskError {
    fn from(e: diesel::r2d2::PoolError) -> Self {
        Self::DatabaseError(e)
    }
}

impl ResponseError for StatusError {
    fn error_response(&self) -> HttpResponse {
        match self {
            StatusError::NotFound => {
                error!("raise Not Found.");
                HttpResponse::NotFound().finish()
            }
            StatusError::SQLError => {
                error!("raise SQL Error.");
                HttpResponse::InternalServerError().finish()
            }
            _ => {
                error!("raise Unknown.");
                HttpResponse::InternalServerError().finish()
            }
        }
    }
}
