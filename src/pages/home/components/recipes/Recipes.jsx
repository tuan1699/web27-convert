import React from "react";
import { Link } from "react-router-dom";
import styles from "./Recipes.module.css";

const Recipes = ({ recipes }) => {
  return (
    <div className="col-12 col-sm-6">
      <Link to={"/recipes/" + recipes.id} className={styles["recipes-link"]}>
        <div className={`${styles["border-item"]} ${styles["recipes-item"]}`}>
          <div className="row align-items-center">
            <div className="col-5 overflow-hidden">
              <div className={`${styles["wrapper-thumb"]} position-relative`}>
                <div
                  className={styles["recipes-item-thumb"]}
                  style={{ backgroundImage: `url(${recipes.thumb})` }}
                ></div>
                <div className={`${styles["recipes-time"]} position-absolute`}>
                  <p className={styles["recipes-day"]}>{recipes.day}</p>
                  <p className={styles["recipes-month"]}>{recipes.month}</p>
                </div>
                <span
                  className={`${styles["add-recipesBox"]} position-absolute`}
                >
                  <i className="bi bi-bookmark-fill"></i>
                </span>
              </div>
            </div>
            <div className="col-7">
              <h5 className={styles["recipes-item-decr"]}>
                <div
                  className={`${styles["recipes-item-name"]} ${styles["underline-hover-effect"]}`}
                >
                  {recipes.name}
                </div>
                <p className={styles["recipes-item-by"]}>{recipes.auth}</p>
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Recipes;
