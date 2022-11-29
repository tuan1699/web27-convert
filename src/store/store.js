import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cart.slice";
import { blogBoxReducer } from "./features/userBox/blogBox.slice";
import { recipesBoxReducer } from "./features/userBox/recipesBox.slice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    recipesBox: recipesBoxReducer,
    blogBox: blogBoxReducer,
  },
});

export default store;
