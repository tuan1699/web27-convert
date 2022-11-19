import React from "react";
import { Link } from "react-router-dom";
import styles from "./User.module.css";

const User = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["breadcumb"]}>
        <Link to="/">TRANG CHỦ</Link> /{" "}
        <Link to="/user">TÀI KHOẢN CỦA TÔI</Link>
      </div>
      <div className={styles["body"]}>
        <div className={styles["user-container"]}>
          <div
            className={`${styles["user-nav"]} d-flex justify-content-between`}
          >
            <div className={`${styles["user-nav-item"]} text-center active`}>
              Công thức yêu thích
            </div>
            <div className={`${styles["user-nav-item"]} text-center`}>
              Bài viết yêu thích
            </div>
            <div className={`${styles["user-nav-item"]} text-center`}>
              Khóa học đã mua
            </div>
          </div>
          <div className={styles["user-content"]}>
            <div className={`${styles["user-content-item"]} active`}>
              <div className={`${styles["recipes-field"]} row`} />
            </div>
            <div className={styles["user-content-item"]}>
              <div className={styles["fav-field"]} />
            </div>
            <div className={styles["user-content-item"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
