table! {
    change_logs (id) {
        id -> Int4,
        title -> Varchar,
        description -> Text,
        changed_at -> Timestamptz,
    }
}

table! {
    post_tags (id) {
        id -> Int4,
        post -> Int4,
        tag -> Varchar,
    }
}

table! {
    posts (id) {
        id -> Int4,
        author -> Int4,
        title -> Varchar,
        body -> Text,
        publish -> Bool,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

table! {
    tags (tag_name) {
        id -> Int4,
        tag_name -> Varchar,
    }
}

table! {
    user_roles (role_name) {
        id -> Int4,
        role_name -> Varchar,
    }
}

table! {
    users (id) {
        id -> Int4,
        name -> Varchar,
        email -> Varchar,
        password -> Varchar,
        role -> Varchar,
    }
}

joinable!(post_tags -> posts (post));
joinable!(post_tags -> tags (tag));
joinable!(posts -> users (author));
joinable!(users -> user_roles (role));

allow_tables_to_appear_in_same_query!(change_logs, post_tags, posts, tags, user_roles, users,);
