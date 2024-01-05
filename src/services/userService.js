import * as userValidation from "@/validations/userValidation";
import axios from "axios";
const SERVER = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
};

// 회원가입
export const signup = async (userId, password, nickname) => {
  if (!userValidation.validateUserId(userId)) {
    throw new Error("validateUserIdError");
  }
  if (!userValidation.validatePassword(password)) {
    throw new Error("validatePasswordError");
  }
  if (!userValidation.validateNickname(nickname)) {
    throw new Error("validateNicknameError");
  }
  await axios.post(
    `${SERVER}/users`,
    {
      userId,
      password,
      nickname,
      profileImage: null,
    },
    headers
  );
};
