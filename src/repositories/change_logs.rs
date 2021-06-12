use crate::models::change_logs::{ChangeLog, NewChangeLog, UpdateChangeLog};
use crate::repositories::schema::change_logs;
use diesel::prelude::*;

impl ChangeLog {
  pub fn all(conn: &PgConnection) -> Result<Vec<ChangeLog>, diesel::result::Error> {
    let logs = change_logs::table.load(conn)?;

    Ok(logs)
  }

  pub fn find(id: i32, conn: &PgConnection) -> Result<Option<ChangeLog>, diesel::result::Error> {
    let log = change_logs::table
      .filter(change_logs::id.eq(&id))
      .first::<ChangeLog>(conn)
      .optional()?;

    Ok(log)
  }

  pub fn create(
    new_data: &NewChangeLog,
    conn: &PgConnection,
  ) -> Result<ChangeLog, diesel::result::Error> {
    diesel::insert_into(change_logs::table)
      .values(new_data)
      .get_result(conn)
  }

  pub fn update(
    update_data: &UpdateChangeLog,
    conn: &PgConnection,
  ) -> Result<ChangeLog, diesel::result::Error> {
    diesel::update(change_logs::table)
      .filter(change_logs::id.eq(update_data.id))
      .set(update_data)
      .get_result(conn)
  }
}
