use crate::models::users::User;
use crate::repositories::schema::posts;
use chrono::NaiveDateTime;
#[derive(
  Debug,
  Clone,
  Serialize,
  Deserialize,
  Eq,
  PartialEq,
  Associations,
  Queryable,
  AsChangeset,
)]
#[belongs_to(User, foreign_key = "author")]
#[table_name = "posts"]
#[primary_key("id")]
pub struct Post {
  pub id: i32,
  pub author: i32,
  pub title: String,
  pub body: String,
  pub publish: bool,
  pub created_at: NaiveDateTime,
  pub updated_at: NaiveDateTime,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Insertable)]
#[table_name = "posts"]
pub struct NewPost {
  pub author: i32,
  pub title: String,
  pub body: String,
  pub publish: bool,
}

// request parameters
#[derive(Debug, Serialize, Deserialize)]
pub struct SearchPost {
  pub tags: Option<String>,
  pub words: Option<String>,
  pub page: Option<i32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreatePost {
  pub title: String,
  pub body: String,
  pub publish: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdatePost {
  pub id: i32,
  pub title: String,
  pub body: String,
  pub publish: bool,
}

// response parameters
#[derive(Debug, Serialize)]
pub struct IndexPost {
  pub id: i32,
  pub author: i32,
  pub title: String,
  pub body: String,
  pub publish: bool,
  pub tags: Vec<String>,
  pub created_at: NaiveDateTime,
  pub updated_at: NaiveDateTime,
}
