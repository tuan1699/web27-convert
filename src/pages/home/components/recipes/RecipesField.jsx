import React from "react";
import { Link } from "react-router-dom";
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
                <div className="heading-popular">NHIỀU NGƯỜI THỰC HIỆN</div>
              </div>
              <div className="col-12">
                <div className="recipes-popular position-relative border-item">
                  <template id="popular-template" />
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
