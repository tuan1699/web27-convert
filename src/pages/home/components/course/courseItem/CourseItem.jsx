import React from "react";
import { Link } from "react-router-dom";
import styles from "./Courseitem.module.css";

const CourseItem = ({ course }) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
      <Link to="./course" className={styles["course-link"]}>
        <div className={`${styles["course-item"]} ${styles["border-item"]}`}>
          <div className={styles["course-thumb"]}>
            <img src={course.thumb} alt="" />
          </div>
          <div className={styles["course-info"]}>
            <div className={`${styles["course-name"]} text-center`}>
              {course.name}
            </div>
            <p className={styles["course-decr"]}>{course.decr}</p>
          </div>
          <button className={styles["course-register"]}>
            ĐĂNG KÝ KHÓA HỌC
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;
