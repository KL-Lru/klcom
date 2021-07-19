use crate::models::posts::{NewPost, Post, SearchPost};
use crate::repositories::schema::posts;
use chrono::Local;
use diesel::prelude::*;
use diesel::sql_types::{Nullable, Text};
sql_function! {
  fn coalesce(x: Nullable<Text>, y: Text) -> Text;
}

impl Post {
  pub fn search(
    query_params: &SearchPost,
    conn: &PgConnection,
    is_authorized: bool,
  ) -> Result<Vec<(Post, String)>, diesel::result::Error> {
    const PER_PAGE: i32 = 15;
    use crate::repositories::schema::post_tags;
    let query = || {
      let mut query = posts::table
        .left_outer_join(post_tags::table)
        .order(posts::id.desc())
        .into_boxed();

      // word search
      if let Some(words) = query_params.words.clone() {
        let word_list: Vec<String> = words.split(',').map(|s| s.to_string()).collect();
        for word in word_list {
          query = query.filter(
            posts::title
              .concat(" ")
              .concat(posts::body)
              .like(format!("%{}%", word)),
          )
        }
      }

      // tag search
      if let Some(tags) = query_params.tags.clone() {
        let tag_list: Vec<String> = tags.split(',').map(|s| s.to_string()).collect();
        query = query.filter(post_tags::tag.eq_any(tag_list))
      }

      // pagenate
      match query_params.page {
        Some(page) => {
          query = query.offset((page * PER_PAGE).into());
        }
        None => {
          query = query.offset(0);
        }
      }

      // only publish ?
      if !is_authorized {
        query = query.filter(posts::publish.eq(true));
      }
      query
        .limit(PER_PAGE.into())
        .select((posts::all_columns, coalesce(post_tags::tag.nullable(), "")))
    };

    let posts = query().load::<(Post, String)>(conn)?;

    Ok(posts)
  }

  pub fn find(q_id: &i32, conn: &PgConnection) -> Result<Option<Post>, diesel::result::Error> {
    let post = posts::table
      .filter(posts::id.eq(&q_id))
      .first::<Post>(conn)
      .optional()?;

    Ok(post)
  }

  pub fn find_with_author(
    q_id: &i32,
    author_id: &i32,
    conn: &PgConnection,
  ) -> Result<Option<Post>, diesel::result::Error> {
    let post = posts::table
      .filter(posts::id.eq(&q_id))
      .filter(posts::author.eq(&author_id))
      .first::<Post>(conn)
      .optional()?;

    Ok(post)
  }

  pub fn create(new_post: &NewPost, conn: &PgConnection) -> Result<Post, diesel::result::Error> {
    diesel::insert_into(posts::table)
      .values(new_post)
      .get_result(conn)
  }

  pub fn update(post: &Post, conn: &PgConnection) -> Result<Post, diesel::result::Error> {
    diesel::update(posts::table)
      .filter(posts::id.eq(post.id))
      .set(post)
      .get_result(conn)
  }
}
