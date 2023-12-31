import * as postValidation from "@/validations/postValidation";
import axios from "axios";
const SERVER = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
};

// 글 정보 불러오기
export const getPosts = async () => {
  const posts = await axios.get(`${SERVER}/posts`);
  return posts.data;
};

// 특정 글 정보 불러오기
export const getPost = async (id) => {
  const posts = await getPosts();
  const matchedPost = posts.find((post) => post.id == id);
  return matchedPost;
};

// 글 작성
export const write = async (category, title, content) => {
  if (!postValidation.validateCategory(category)) {
    throw new Error("validateCategoryError");
  }
  if (!postValidation.validateTitle(title)) {
    throw new Error("validateTitleError");
  }
  if (!postValidation.validateContent(content)) {
    throw new Error("validateContentError");
  }
  await axios.post(
    `${SERVER}/posts`,
    {
      category,
      title,
      content,
      tabom: 0,
      date: new Date(),
      userId: localStorage.getItem("forumLoginId"),
    },
    headers
  );
};

// 따봉 누르기
export const tabom = async (id) => {
  const matchedPost = await getPost(id);
  await axios.patch(
    `${SERVER}/posts/${id}`,
    {
      tabom: parseInt(matchedPost.tabom) + 1,
    },
    headers
  );
};
