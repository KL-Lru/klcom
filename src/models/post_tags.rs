use crate::repositories::schema::post_tags;

#[derive(Debug, Clone, Serialize, Deserialize, Eq, PartialEq, Queryable, AsChangeset)]
#[table_name = "post_tags"]
#[primary_key("id")]
pub struct PostTag {
  pub id: i32,
  pub post: i32,
  pub tag: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Insertable)]
#[table_name = "post_tags"]
pub struct NewPostTag {
  pub post: i32,
  pub tag: String,
}
