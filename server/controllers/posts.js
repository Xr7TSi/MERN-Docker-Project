import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

export const updatePost = async (req, res) => {
  // get id from parameter
  const { id: _id } = req.params;
  
  // get updated post from request body, pulled fro front end
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Update post failed. No post with that ID')

  // use PostMessage model to update post
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
  res.json(updatedPost)
}

