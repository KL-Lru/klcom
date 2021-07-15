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

pub async fn show(
  p_info: web::Path<UrlId>,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  let result = Post::find(&p_info.id, &conn)?;
  match result {
    None => Ok(HttpResponse::NotFound().finish()),
    Some(post) => {
      let body = json!(post).to_string();
      Ok(
        HttpResponse::Ok()
          .content_type("application/json")
          .body(body),
      )
    }
  }
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
      publish: info.publish,
    },
    &conn,
  )?;
  Ok(HttpResponse::NoContent().finish())
}

#[derive(Deserialize)]
pub struct UrlId {
  id: i32,
}

pub async fn update(
  info: web::Json<UpdatePost>,
  p_info: web::Path<UrlId>,
  id: Identity,
  pool: web::Data<DbPool>,
) -> Result<HttpResponse, StatusError> {
  let conn = pool.get()?;
  let user = identity_user(id, &conn)?;
  let post = Post::find_with_author(&p_info.id, &user.id, &conn)?;
  match post {
    None => Ok(HttpResponse::NotFound().finish()),
    Some(target_post) => {
      Post::update(
        &Post {
          id: p_info.id,
          author: user.id,
          title: info.title.clone(),
          body: info.body.clone(),
          publish: info.publish,
          created_at: target_post.created_at,
          updated_at: target_post.updated_at,
        },
        &conn,
      )?;
      Ok(HttpResponse::NoContent().finish())
    }
  }
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
