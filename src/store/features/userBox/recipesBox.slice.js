import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { recipesList } from "../../../db";

const initialState = [];

const recipesBoxSlice = createSlice({
  name: "recipesBox",
  initialState,
  reducers: {
    addRecipesToFav: (state, { payload: recipesId }) => {
      console.log(state);
      const recipesIndex = state.findIndex((id) => id == recipesId);

      if (recipesIndex !== -1) {
        toast.info(
          "Bạn rất thích món ăn này đúng không? Hãy vào bếp thực hiện ngay nào",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );

        return [...state];
      } else {
        const newState = [...state, recipesId];
        toast.success("Đã thêm công thức vào danh sách yêu thích", {
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

    deleteRecipesInFav: (state, action) => {
      const newState = state.filter((item) => item !== action.payload);

      return newState;
    },
  },
});

export const recipesBoxReducer = recipesBoxSlice.reducer;
export const { addRecipesToFav, deleteRecipesInFav } = recipesBoxSlice.actions;

export const recipesInFav = (state) => {
  const recipesFav = state.recipesBox;
  const recipesItemsBox = recipesFav.map((item) => {
    return recipesList.find((recipes) => recipes.id == item);
  });

  return {
    recipesItemsBox,
  };
};
