// 카테고리 유효성 검사, 빈 값은 안됨
export function validateCategory(category) {
  return category.length !== "";
}

// 글 제목 유효성 검사, 2글자 이상
export function validateTitle(title) {
  return title.length >= 2;
}

// 글 내용 유효성 검사, 6글자 이상
export function validateContent(content) {
  return content.length >= 6;
}
