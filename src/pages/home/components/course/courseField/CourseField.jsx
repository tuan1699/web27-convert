import React from "react";
import CourseList from "../courseList/CourseList";
import styles from "./CourseField.module.css";
import { Link } from "react-router-dom";

const CourseField = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["course"]} text-center`}>
        <div
          className={`${styles["heading"]} d-flex justify-content-center justify-content-sm-between`}
        >
          <h2 className={styles["title"]}>KHÓA HỌC NẤU ĂN GIA ĐÌNH</h2>
          <Link to="/course">
            <p className={`${styles["see-all"]} d-none d-sm-block`}>
              Xem tất cả
            </p>
          </Link>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export default CourseField;
