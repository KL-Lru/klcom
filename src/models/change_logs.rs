use crate::repositories::schema::change_logs;
use chrono::NaiveDateTime;

#[derive(Debug, Clone, Serialize, Deserialize, Queryable, Eq, PartialEq, AsChangeset)]
#[table_name = "change_logs"]
#[primary_key("id")]
pub struct ChangeLog {
  pub id: i32,
  pub title: String,
  pub description: String,
  pub changed_at: NaiveDateTime,
}

#[derive(Debug, Clone, Serialize, Deserialize, Insertable)]
#[table_name = "change_logs"]
pub struct NewChangeLog {
  pub title: String,
  pub description: String,
}

#[derive(Debug, Serialize, Deserialize, AsChangeset)]
#[table_name = "change_logs"]
pub struct UpdateChangeLog {
  pub id: i32,
  pub title: String,
  pub description: String,
}
