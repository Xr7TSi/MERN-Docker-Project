// import everything from ../api in one import statement
import * as api from '../api/index.js';

// action creators are functions that return an action.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (err) {
        console.log('Get Posts ' + err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data})
    } catch (err) {
        console.log('Create Post ' + err.message);
    }
}


