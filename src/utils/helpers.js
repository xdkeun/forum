// Date를 00년 00월 00일의 문자열로 바꿔주는 함수
export const formatDate = (param) => {
  const date = new Date(param);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}년 ${month}월 ${day}일`;
};
