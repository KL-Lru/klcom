use crate::repositories::schema::tags;

#[derive(Debug, Clone, Serialize, Deserialize, Eq, PartialEq, Queryable, AsChangeset)]
#[table_name = "tags"]
#[primary_key("tag_name")]
pub struct Tag {
  pub id: i32,
  pub tag_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Insertable)]
#[table_name = "tags"]
pub struct NewTag {
  pub tag_name: String,
}
