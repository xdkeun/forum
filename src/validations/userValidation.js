// ID 유효성 검사, 4글자 이상
export function validateUserId(userId) {
  return userId.length >= 4;
}

// 비밀번호 유효성 검사, 6글자 이상
export function validatePassword(password) {
  return password.length >= 6;
}

// 이름 유효성 검사, 2글자 이상
export function validateUserNickname(nickname) {
  return nickname.length >= 2;
}
