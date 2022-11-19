import React from "react";
import styles from "./Blog.module.css";
import BlogItem from "../../components/BlogItem/BlogItem";
import SideBar from "../../components/sidebar/SideBar";
import { blogList } from "../../db";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["breadcumb"]}>
        <Link to="/">TRANG CHỦ</Link> / <Link to="/blog">BLOG</Link>
      </div>
      <div className={styles["body"]}>
        <div
          className={`${styles["heading"]} d-block d-md-flex justify-content-center align-items-center justify-content-sm-between`}
        >
          <div className={styles["content-decr"]}>
            <div className={styles["title"]}>BLOG</div>
            <div className={styles["decr-page"]}>
              Góc nhỏ mày mò chia sẻ công thức nấu ăn, làm bánh, review đồ bếp.
              Chia sẻ tình yêu gia đình, bếp, vườn, chụp ảnh, du lịch...
            </div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className={styles["blog-list"]}>
                {blogList.map((blog) => {
                  return <BlogItem key={blog.id} blog={blog} />;
                })}
              </div>
              <div
                className={`${styles["controller"]} d-flex justify-content-center`}
              >
                <span
                  className={`${styles["controller-item"]} ${styles["prev-page"]}`}
                >
                  <a href className={styles["page-link"]}>
                    <i className="bi bi-chevron-left" />{" "}
                  </a>
                </span>
                <span
                  className={`${styles["controller-item"]} ${styles["current-page"]}`}
                >
                  1
                </span>
                <span
                  className={`${styles["controller-item"]} ${styles["next-page"]}`}
                >
                  <a href className={styles["page-link"]}>
                    <i className="bi bi-chevron-right" />{" "}
                  </a>
                </span>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
