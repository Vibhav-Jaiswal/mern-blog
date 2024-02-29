import Comment from "../models/comment.modal.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, resp, next) => {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment")
      );
    }

    const newComment = new Comment({ content, postId, userId });
    await newComment.save();
    resp.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPostComments = async (req, resp, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    resp.status(200).json(comments)
  } catch (error) {
    next(error);
  }
};
