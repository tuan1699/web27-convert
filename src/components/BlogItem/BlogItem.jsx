import React from "react";
import styles from "./BlogItem.module.css";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <Link to={"/blog/" + blog.id} className={styles["blog-link"]}>
      <div className={styles["blog-item"]}>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className={`${styles["blog-thumb"]} position-relative`}>
              <img src={blog.thumb} alt="" />
              <span className={`${styles["add-favourite"]} position-absolute`}>
                <i className="bi bi-bookmark-fill" />
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className={styles["blog-name"]}>{blog.name}</div>
            <div className={`${styles["blog-info"]} d-flex align-items-center`}>
              <div className={styles["blog-by"]}>{blog.auth}</div>
              <div className={styles["blog-time"]}>{blog.date}</div>
            </div>
            <p className={styles["blog-decr"]}>{blog.decr}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
