use crate::models::user_roles::UserRole;
use crate::repositories::schema::users;
use diesel::Identifiable;

#[derive(
  Debug,
  Clone,
  Serialize,
  Deserialize,
  Eq,
  PartialEq,
  Identifiable,
  Associations,
  Queryable,
  AsChangeset,
)]
#[belongs_to(UserRole, foreign_key = "role")]
#[table_name = "users"]
#[primary_key("id")]
pub struct User {
  pub id: i32,
  pub name: String,
  pub email: String,
  pub password: String,
  pub role: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Insertable)]
#[table_name = "users"]
pub struct NewUser {
  pub name: String,
  pub email: String,
  pub password: String,
  pub role: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateUser {
  pub name: String,
  pub email: String,
  pub password: String,
  pub password_confirm: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdatePassword {
  pub old_password: String,
  pub new_password: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateSession {
  pub email: String,
  pub password: String,
}
