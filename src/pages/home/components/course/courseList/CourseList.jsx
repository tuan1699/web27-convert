import React from "react";
import styles from "./CourseList.module.css";
import { courseList } from "../../../../../db";
import CourseItem from "../courseItem/CourseItem";
import { Link } from "react-router-dom";

const CourseList = () => {
  const listCourse = courseList.map((course) => {
    return <CourseItem key={course.id} course={course} />;
  });

  return (
    <div className="content">
      <div className={`row ${styles["course-field"]}`}>{listCourse}</div>
      <Link to="/course">
        <button className="btn-see-all d-sm-none">Xem tất cả</button>
      </Link>
    </div>
  );
};

export default CourseList;
