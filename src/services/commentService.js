import * as commentValidation from "@/validations/commentValidation";
import axios from "axios";
const SERVER = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
};

// 특정 댓글 정보 불러오기
export const getComment = async (postId) => {
  const comments = await axios.get(`${SERVER}/comments`);
  const matchedComment = comments.data.filter(
    (comment) => comment.postId == postId
  );
  return matchedComment;
};

// 댓글 작성
export const write = async (comment, postId) => {
  if (!commentValidation.validateComment(comment)) {
    throw new Error("validateCommentError");
  }
  await axios.post(
    `${SERVER}/comments`,
    {
      comment,
      date: new Date(),
      postId,
      userId: localStorage.getItem("forumLoginId"),
    },
    headers
  );
};
