use crate::models::tags::{NewTag, Tag};
use crate::repositories::schema::tags::dsl::*;
use diesel::prelude::*;

impl Tag {
  pub fn find(q_id: &i32, conn: &PgConnection) -> Result<Option<Tag>, diesel::result::Error> {
    let tag = tags.filter(id.eq(&q_id)).first::<Tag>(conn).optional()?;

    Ok(tag)
  }

  pub fn create(new_tag: &NewTag, conn: &PgConnection) -> Result<Tag, diesel::result::Error> {
    diesel::insert_into(tags).values(new_tag).get_result(conn)
  }

  pub fn update(tag: &Tag, conn: &PgConnection) -> Result<Tag, diesel::result::Error> {
    diesel::update(tags)
      .filter(id.eq(tag.id))
      .set(tag)
      .get_result(conn)
  }
}
