use crate::repositories::schema::user_roles;

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
#[table_name = "user_roles"]
#[primary_key("role_name")]
pub struct UserRole {
  pub id: i32,
  pub role_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Insertable)]
#[table_name = "user_roles"]
pub struct NewUserRole {
  pub id: i32,
  pub role_name: String,
}
