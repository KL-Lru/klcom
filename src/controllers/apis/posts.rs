use actix_identity::Identity;
use actix_web::{web, HttpResponse, Result};

use crate::models::posts::{CreatePost, IndexPost, NewPost, Post, SearchPost, UpdatePost};
use crate::repositories::connection::DbPool;
use crate::services::errors::StatusError;
use crate::services::identity::{identity_user, is_authorized};

use std::collections::HashMap;

pub async fn index(
  query: web::Query<SearchPost>,
  id: Identity,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  let results = Post::search(&query, &conn, is_authorized(id, &conn))?;
  let post_list = make_post_list(results);
  let body = json!(&post_list).to_string();
  Ok(
    HttpResponse::Ok()
      .content_type("application/json")
      .body(body),
  )
}

fn make_post_list(rows: Vec<(Post, String)>) -> Vec<IndexPost> {
  let mut tag_hash: HashMap<i32, Vec<String>> = HashMap::new();
  let mut post_hash: HashMap<i32, Post> = HashMap::new();
  for row in rows {
    let id = row.0.id;
    tag_hash.entry(id).or_insert(vec![]);
    tag_hash.get_mut(&id).unwrap().push(row.1);
    post_hash.entry(id).or_insert(row.0);
  }

  post_hash
    .into_iter()
    .map(|(id, post)| IndexPost {
      id: post.id,
      author: post.author,
      title: post.title,
      body: post.body,
      publish: post.publish,
      created_at: post.created_at,
      updated_at: post.updated_at,
      tags: tag_hash.get(&id).unwrap_or(&vec![]).clone(),
    })
    .collect()
}

pub async fn create(
  info: web::Json<CreatePost>,
  id: Identity,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  let user = identity_user(id, &conn)?;

  Post::create(
    &NewPost {
      author: user.id,
      title: info.title.clone(),
      body: info.body.clone(),
      publish: info.publish.clone(),
    },
    &conn,
  )?;
  Ok(HttpResponse::NoContent().finish())
}

pub async fn update(
  info: web::Json<UpdatePost>,
  id: Identity,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  let user = identity_user(id, &conn)?;
  let post = Post::find_with_author(&info.id, &user.id, &conn)?;
  match post {
    None => Ok(HttpResponse::NotFound().finish()),
    Some(target_post) => {
      Post::update(
        &Post {
          id: info.id.clone(),
          author: user.id,
          title: info.title.clone(),
          body: info.body.clone(),
          publish: info.publish.clone(),
          created_at: target_post.created_at.clone(),
          updated_at: target_post.updated_at.clone(),
        },
        &conn,
      )?;
      Ok(HttpResponse::NoContent().finish())
    }
  }
}
