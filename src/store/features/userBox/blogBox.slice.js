import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { blogList } from "../../../db";

const initialState = [];

const blogBoxSlice = createSlice({
  name: "blogBox",
  initialState,
  reducers: {
    addBlogToFav: (state, { payload: blogId }) => {
      const blogIndex = state.findIndex((id) => id == blogId);

      if (blogIndex !== -1) {
        toast.info("Đã thêm vào mục bài viết yêu thích", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return [...state];
      } else {
        const newState = [...state, blogId];
        toast.success("Đã thêm vào mục bài viết yêu thích!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return newState;
      }
    },

    deleteBlogInFav: (state, action) => {
      const newState = state.filter((item) => item !== action.payload);

      return newState;
    },
  },
});

export const blogBoxReducer = blogBoxSlice.reducer;
export const { addBlogToFav, deleteBlogInFav } = blogBoxSlice.actions;

export const blogInFav = (state) => {
  const blogFav = state.blogBox;
  const blogItemsBox = blogFav.map((item) => {
    return blogList.find((blog) => blog.id == item);
  });

  return {
    blogItemsBox,
  };
};
