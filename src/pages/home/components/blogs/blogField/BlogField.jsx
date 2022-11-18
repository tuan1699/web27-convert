import React from "react";
import { Link } from "react-router-dom";
import BlogList from "../blogList/BlogList";
import styles from "./BlogField.module.css";

const BlogField = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["blog"]}>
        <div
          className={`${styles["heading"]} d-flex justify-content-center justify-content-sm-between`}
        >
          <h2 className={styles["title"]}>BLOG</h2>
          <Link to="/blog">
            <p className={`${styles["see-all"]} d-none d-sm-block`}>
              Xem tất cả
            </p>
          </Link>
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default BlogField;
