import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./main.css";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Diet from "./pages/diet/Diet";
import Recipes from "./pages/recipes/Recipes";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import Cart from "./pages/cart/Cart";
import User from "./pages/user/User";
import RecipesDetail from "./pages/RecipesDetail/RecipesDetail";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import store from "./store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/"
        element={<Home />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/diet"
        element={<Diet />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/recipes"
        element={<Recipes />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/blog"
        element={<Blog />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
      <Route
        path="/course"
        element={<Course />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />

      <Route
        path="/cart"
        element={<Cart />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />

      <Route
        path="/user"
        element={<User />}
        errorElement={<div>Có gì đó không ổn!</div>}
      />

      <Route
        path="/recipes/:recipesId"
        element={<RecipesDetail />}
        loader={RecipesDetail.loader}
        errorElement={<div>Có gì đó không ổn!</div>}
      />

      <Route
        path="/blog/:blogId"
        element={<BlogDetail />}
        loader={BlogDetail.loader}
        errorElement={<div>Có gì đó không ổn!</div>}
      />

      <Route
        path="/course/:courseId"
        element={<CourseDetail />}
        loader={CourseDetail.loader}
        errorElement={<div>Có gì đó không ổn!</div>}
      />
    </Route>
  ),
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
