import axios from 'axios';

// url for backed routes
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

// grabs url plus id parameter to update post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// grabs url plus id parameter to delete post
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);



