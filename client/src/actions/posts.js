// import everything from ../api in one import statement
import * as api from '../api/index.js';

// action creators are functions that return an action.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log('Get Posts ' + error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log('Create Post ' + error);
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE_POST', payload: data});
    } catch (error) {
        console.log('Update Post ' + error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE_POST', payload: id});
    } catch (error) {
        console.log('Delete Post ' + error);
    }

}