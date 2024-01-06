import * as postValidation from "@/validations/postValidation";
import axios from "axios";
const SERVER = "http://localhost:4001";
const headers = {
  "Content-Type": "application/json",
};

// 글 작성
export const write = async (category, title, content) => {
  console.log(category, title,content)
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
    },
    headers
  );
};