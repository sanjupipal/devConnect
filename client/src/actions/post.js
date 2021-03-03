import axios from "axios";
import { setAlert } from "./alert";
import { DELETE_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msd: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/post/like/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msd: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/post/unlike/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msd: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/post/${postId}`);
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msd: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
