import express from "express";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogsController,
  getBlogByIdController,
  updateBlogController,
  userBlogControlller,
} from "../controller/BlogController";

//router object
const blogRoute = express.Router();

blogRoute.get("/", getAllBlogsController);

blogRoute.post("/", createBlogController);

blogRoute.put("/:id", updateBlogController);

blogRoute.get("/:id", getBlogByIdController);

blogRoute.delete("/:id", deleteBlogController);

blogRoute.get("/user-blog/:id", userBlogControlller);

export default blogRoute;
