import React from "react";
import { Link } from "react-router-dom";
import styles from "./Courseitem.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../../store/features/cart/cart.slice";


const CourseItem = ({ course }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    
    dispatch(addItemToCart(id));
  };

  return (
    <div
      className={`col-6 col-sm-6 col-md-4 col-lg-3 ${styles["course-link"]}`}
    >
      <div className={`${styles["course-item"]} ${styles["border-item"]}`}>
        <div className={styles["course-thumb"]}>
          <img src={course.thumb} alt="" />
        </div>
        <Link to={"./course/" + course.id}>
          <div className={styles["course-info"]}>
            <div className={`${styles["course-name"]} text-center`}>
              {course.name}
            </div>
            <p className={styles["course-decr"]}>{course.decr}</p>
          </div>
        </Link>
        <button
          className={styles["course-register"]}
          onClick={() => {
            dispatch(handleAddToCart(course.id));
          }}
        >
          ĐĂNG KÝ KHÓA HỌC
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
