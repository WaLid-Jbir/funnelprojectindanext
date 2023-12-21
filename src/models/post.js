import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  id: {
    type: String,
    required: [true, "Please provide a id"],
  },
  slug: {
    type: String,
    required: [true, "Please provide a slug"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },

  content: {
    type: String,
    required: [true, "Please provide a content"],
  },
  tag: {
    type: String,
    required: [true, "Please provide a tag"],
  },
  img: {
    type: String,
    required: [true, "Please provide an image"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: [true, "Please provide an author"],
  },
  authorImg: {
    type: String,
    required: [true, "Please provide an author image"],
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;