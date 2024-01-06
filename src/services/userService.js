import * as userValidation from "@/validations/userValidation";
import axios from "axios";
const SERVER = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
};

// 유저 정보 불러오기
export const getUsers = async () => {
  const users = await axios.get(`${SERVER}/users`);
  return users.data;
};

// 특정 유저 정보 불러오기
export const getUser = async (userId) => {
  const users = await axios.get(`${SERVER}/users`);
  const matchedUser = users.data.find((user) => user.userId === userId);
  return matchedUser;
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

// 로그인
export const login = async (userId, password) => {
  const users = await getUsers();
  const matchedUser = users.find(
    (user) => user.userId === userId && user.password === password
  );
  if (!matchedUser) throw new Error("loginError");
};
