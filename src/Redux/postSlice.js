// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define a new slice of the store state for handling posts
const postSlice = createSlice({
  name: 'Posts', // A name for this slice
  initialState: {
    posts: [], // An initial state object with an empty array of posts
  },
  reducers: {
    AddPost: (state, action) => {
      // A reducer function to handle adding a new post
      // The `action.payload` property contains the new post data
      state.posts.push(action.payload); // Add the new post to the `posts` array in the state
    },
    DeletePost: (state, action) => {
      // A reducer function to handle deleting a post
      // The `action.payload` property contains the post ID to delete
      state.posts = state.posts.filter((item) => {
        // Filter the `posts` array to remove the post with the specified ID
        return item.id !== action.payload.id;
      });
    },
    updatePost: (state, action) => {
      // A reducer function to handle updating a post
      // The `action.payload` property contains the updated post data
      state.posts.map((item) => {
        if (item.id === action.payload.id) {
          // Find the post in the `posts` array with the specified ID
          // and update its `Title` and `Description` properties
          item.Title = action.payload.Title;
          item.Description = action.payload.Description;
        }
      });
    },
  },
});

// Export the reducer function and action creators for this slice
export const { AddPost, DeletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
