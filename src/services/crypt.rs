use bcrypt::{hash, verify, BcryptError, DEFAULT_COST};

static COST: u32 = DEFAULT_COST;

pub fn hash_password(password: &str) -> Result<String, BcryptError> {
  hash(password, COST)
}

pub fn verify_password(password: &str, hash: &str) -> Result<bool, BcryptError> {
  verify(password, hash)
}
