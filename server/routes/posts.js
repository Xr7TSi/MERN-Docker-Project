import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js';
const router = express.Router();


// localhost:5000/posts
router.get ('/', getPosts);
router.post ('/', createPost);
// update post by id
router.patch ('/:id', updatePost);


export default router;