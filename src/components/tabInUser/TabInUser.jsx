import { useState } from "react";
import styles from "./TabInUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { recipesInFav } from "../../store/features/userBox/recipesBox.slice";
import { deleteRecipesInFav } from "../../store/features/userBox/recipesBox.slice";
import {
  blogInFav,
  deleteBlogInFav,
} from "../../store/features/userBox/blogBox.slice";

const TabInUser = () => {
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleDeleteRecipes = (id) => {
    dispatch(deleteRecipesInFav(id));
  };

  const handleDeleteBlog = (id) => {
    dispatch(deleteBlogInFav(id));
  };

  const { recipesItemsBox } = useSelector(recipesInFav);
  const { blogItemsBox } = useSelector(blogInFav);
  console.log(blogItemsBox);

  return (
    <div>
      <div className={`${styles["user-nav"]} d-flex justify-content-between`}>
        <div
          className={
            toggleState === 1
              ? `${styles["user-nav-item"]} text-center ${styles["active"]}`
              : `${styles["user-nav-item"]} text-center`
          }
          onClick={() => toggleTab(1)}
        >
          Công thức yêu thích
        </div>
        <div
          className={
            toggleState === 2
              ? `${styles["user-nav-item"]} text-center ${styles["active"]}`
              : `${styles["user-nav-item"]} text-center`
          }
          onClick={() => toggleTab(2)}
        >
          Bài viết yêu thích
        </div>
        <div
          className={
            toggleState === 3
              ? `${styles["user-nav-item"]} text-center ${styles["active"]}`
              : `${styles["user-nav-item"]} text-center`
          }
          onClick={() => toggleTab(3)}
        >
          Khóa học đã mua
        </div>
      </div>
      <div className={styles["user-content"]}>
        <div
          className={
            toggleState === 1
              ? `${styles["user-content-item"]} ${styles["active"]}`
              : `${styles["user-content-item"]}`
          }
        >
          <div className={`${styles["recipes-field"]} row`}>
            {recipesItemsBox.map((item) => (
              <div className={`col-12 ${styles["recipes"]} col-sm-6 col-lg-4`}>
                <div
                  className={`${styles["recipes-item"]} ${styles["border-item"]}`}
                >
                  <div
                    className={`${styles["recipes-item-thumb"]} position-relative`}
                  >
                    <img src={item.thumb} alt="" />
                    <i
                      className={`bi bi-x ${styles["removeRecipes-btn"]}`}
                      onClick={() => handleDeleteRecipes(item.id)}
                    />
                  </div>
                  <div className={styles["recipes-item-decr"]}>
                    <div className={styles["recipes-item-name"]}>
                      {item.name}
                    </div>
                    <div
                      className={`${styles["item-info"]} d-none d-sm-flex d-flex align-items-center`}
                    >
                      <div className={styles["item-by"]}>{item.auth}</div>
                      <div className={styles["item-time"]}>{item.date}</div>
                    </div>
                    <div
                      className={`${styles["recipes-item-bonus"]} d-flex justify-content-between`}
                    >
                      <div className={styles["duration"]}>
                        {item.duration} phút
                        <i
                          className={`${styles["duration-icon"]} bi bi-clock`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            toggleState === 2
              ? `${styles["user-content-item"]} ${styles["active"]}`
              : `${styles["user-content-item"]}`
          }
        >
          <div className={styles["fav-field"]}>
            {blogItemsBox.map((item) => {
              return (
                <div className={styles["blog-item"]}>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div
                        className={`${styles["blog-thumb"]} position-relative`}
                      >
                        <img src={item.thumb} alt="" />
                        <i
                          className={`bi bi-x ${styles["remove-btn"]}`}
                          onClick={() => handleDeleteBlog(item.id)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className={styles["blog-name"]}>{item.name}</div>
                      <div
                        className={`${styles["blog-info"]} d-flex align-items-center`}
                      >
                        <div className={styles["blog-by"]}>{item.auth}</div>
                        <div className={styles["blog-time"]}>{item.date}</div>
                      </div>
                      <p className={`${styles["blog-decr"]} d-none d-sm-block`}>
                        {item.decr}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={
            toggleState === 3
              ? `${styles["user-content-item"]} ${styles["active"]}`
              : `${styles["user-content-item"]}`
          }
        >
          <div className={styles["course-item"]}>
            <div className="row">
              <div className="col-6">
                <div className={styles["course-thumb"]}>
                  <img src="./img/course/lau-de.jpg" alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className={styles["course-name"]}>MÓN NGON BA MIỀN</div>
                <div
                  className={`${styles["course-price"]} d-flex align-items-center`}
                >
                  1.700.000Đ
                </div>
                <span className={styles["payed"]}>ĐÃ THANH TOÁN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabInUser;
