// 카테고리 유효성 검사, 빈 값은 안됨
export function validateCategory(category) {
  return category.length !== "";
}

// 제목 유효성 검사, 3글자 이상
export function validateTitle(title) {
  return title.length >= 6;
}
