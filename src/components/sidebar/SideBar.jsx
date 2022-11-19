import React from "react";
import styles from "./SideBar.module.css";
import { recipesList } from "../../db";
import { blogList } from "../../db";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles["side-bar-content"]}>
      <div className={styles["popular-recipes"]}>
        <div className={styles["heading-sidebar"]}>NHIỀU NGƯỜI THỰC HIỆN</div>
        <div
          className={`${styles["recipes-popular"]} ${styles["position-relative"]} ${styles["border-item"]}`}
        >
          {recipesList.slice(0, 5).map((recipes, index) => {
            return (
              <Link
                key={recipes.id}
                to={"/recipes/" + recipes.id}
                className={styles["popular-link"]}
              >
                <div
                  className={`${styles["recipes-popular-item"]} position-relative d-flex align-items-center`}
                >
                  <div
                    className={styles["popular-thumb"]}
                    style={{ backgroundImage: `url(${recipes.thumb})` }}
                  />
                  <div className={styles["recipes-popular-number"]}>
                    {index}
                  </div>
                  <div
                    className={`${styles["recipes-popular-decr"]} text-start`}
                  >
                    <div className={styles["recipes-popular-name"]}>
                      {recipes.name}
                    </div>
                    <p className={styles["recipes-popular-by"]}>
                      {recipes.date}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles["popular-blog"]}>
        <div className={styles["heading-sidebar"]}>BÀI ĐĂNG NỔI BẬT</div>
        <div className={styles["popular-blog-list"]}>
          {blogList.slice(0, 5).map((blog) => {
            return (
              <Link
                key={blog.id}
                to={"/blog/" + blog.id}
                className={styles["popular-link"]}
              >
                <div className={styles["popular-blog-item"]}>
                  <div className={styles["popular-blog-thumb"]}>
                    <img src={blog.thumb} alt="" />
                  </div>
                  <div className={styles["popular-blog-name"]}>{blog.name}</div>
                  <div
                    className={`${styles["item-info"]} d-flex align-items-center`}
                  >
                    <div className={styles["item-by"]}>{blog.auth}</div>
                    <div className={styles["item-time"]}>{blog.date}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles["popular-video"]}>
        <div className={styles["heading-sidebar"]}>VIDEO NỔI BẬT</div>
        <div className={styles["video-item"]}>
          <iframe
            width="100%"
            height={160}
            src="https://www.youtube.com/embed/KKvsCxioJeQ"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className={styles["video-item"]}>
          <iframe
            width="100%"
            height={160}
            src="https://www.youtube.com/embed/KKvsCxioJeQ"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className={styles["video-item"]}>
          <iframe
            width="100%"
            height={160}
            src="https://www.youtube.com/embed/KKvsCxioJeQ"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
