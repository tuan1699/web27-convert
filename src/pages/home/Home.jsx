import React from "react";
import Diet from "./components/diet/Diet";
import Banner from "./components/banner/Banner";
import RecipesField from "./components/recipes/RecipesField";
import SuggestField from "./components/suggest/SuggestField/SuggestField";
import QuickField from "./components/quickMeal/quickField/QuickField";
import BlogField from "./components/blogs/blogField/BlogField";
import CourseField from "./components/course/courseField/CourseField";
import { ToastContainer } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Banner />
      <Diet />
      <RecipesField />
      <SuggestField />
      <QuickField />
      <CourseField />
      <BlogField />
      <ToastContainer />
    </>
  );
};

export default Home;
