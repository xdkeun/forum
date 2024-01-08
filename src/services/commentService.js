import * as commentValidation from "@/validations/commentValidation";
import axios from "axios";
const SERVER = "http://localhost:4000";
const headers = {
  "Content-Type": "application/json",
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
