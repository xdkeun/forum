// 댓글 내용 유효성 검사, 빈 값은 안됨
export function validateComment(comment) {
  return comment.length !== 0;
}