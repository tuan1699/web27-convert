import React from "react";
import { Link } from "react-router-dom";
import { recipesList } from "../../../../db";
import styles from "./RecipesField.module.css";
import RecipesList from "./RecipesList";

const RecipesField = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["recipes "]} text-center`}>
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              <div
                className={`${styles["heading"]} d-flex justify-content-center justify-content-sm-between`}
              >
                <h2 className={styles["title"]}>CÔNG THỨC MỚI NHẤT</h2>
                <Link to="/recipes">
                  {" "}
                  <p className="see-all d-none d-sm-block">Xem tất cả</p>
                </Link>
              </div>
              <RecipesList />
            </div>
          </div>
          <div className="col-12 d-none d-lg-block col-lg-3">
            <div className="row">
              <div className="col-12">
                <div className={styles["heading-popular"]}>
                  NHIỀU NGƯỜI THỰC HIỆN
                </div>
              </div>
              <div className="col-12">
                <div
                  className={`${styles["recipes-popular"]} position-relative ${styles["border-item"]}`}
                >
                  {recipesList.slice(0, 5).map((recipes, index) => {
                    return (
                      <Link
                        key={index}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesField;
