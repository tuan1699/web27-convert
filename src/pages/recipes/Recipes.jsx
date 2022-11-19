import React from "react";
import styles from "./Recipes.module.css";
import { recipesList } from "../../db";
import SideBar from "../../components/sidebar/SideBar";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import RecipesItem from "../../components/RecipesItem/RecipesItem";

const Recipes = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["breadcumb"]}>
        <Link to="/">TRANG CHỦ</Link> /{" "}
        <Link to="/recipes">CÔNG THỨC NẤU ĂN</Link>
      </div>
      <div className={styles["body"]}>
        <div
          className={`${styles["heading"]} d-block d-md-flex justify-content-center align-items-center justify-content-sm-between`}
        >
          <div className={styles["content-decr"]}>
            <div className={styles["title"]}>CÔNG THỨC NẤU ĂN</div>
            <div className={styles["decr-page"]}>
              Khám phá các món ăn ngon, bổ, rẻ do cộng đồng cùng đóng góp.
            </div>
          </div>
        </div>
        <div className={styles["decr-page"]}>
          <div className="row">
            <div className="col-12">
              <Filter />
            </div>
            <div className="col-12 col-lg-9">
              <div className={`${styles["recipes-list"]} row`}>
                {recipesList.map((recipes) => {
                  return <RecipesItem key={recipes.id} recipes={recipes} />;
                })}
              </div>
              <div
                className={`${styles["controller"]} d-flex justify-content-center`}
              >
                <span
                  className={`${styles["controller-item"]} ${styles["prev-page"]}`}
                >
                  <i className="bi bi-chevron-left" />
                </span>
                <span
                  className={`${styles["controller-item"]} ${styles["current-page"]}`}
                >
                  1
                </span>
                <span
                  className={`${styles["controller-item"]} ${styles["next-page"]}`}
                >
                  <i className="bi bi-chevron-right" />
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

export default Recipes;
