import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { courseList } from "../../../db";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload: courseId }) => {
      const courseIndex = state.findIndex((course) => course == courseId);

      if (courseIndex !== -1) {
        toast.info("Khóa học đã có trong giỏ hàng!", {
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
        const newState = [...state, courseId];
        toast.success("🦄 Thêm vào giỏ hàng thành công!", {
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

    deleteCourse: (state, action) => {
      const newState = state.filter((courseId) => courseId !== action.payload);

      return newState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItemToCart, deleteCourse } = cartSlice.actions;

export const courseInCart = (state) => {
  const cart = state.cart;
  const cartItems =
    cart.length === 0
      ? []
      : cart.map((item) => {
          return courseList.find((course) => course.id == item);
        });

  const totalPrice = cartItems.reduce(
    (total, item) => (total += item.price),
    0
  );

  return {
    cartItems,
    totalPrice,
  };
};
