// const SERVER = 'https://localhost:4000';
import * as userValidation from "@/validations/userValidation";

// 회원가입 서비스
export function signup(id, password, nickname) {
  if (!userValidation.validateId(id)) alert("ID FUCK");
  if (!userValidation.validatePassword(password)) alert("PASSWORD FUCK");
  if (!userValidation.validateNickname(nickname)) alert("NICKNAME FUCK");
}
