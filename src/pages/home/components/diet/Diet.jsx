import React from "react";
import { Link } from "react-router-dom";
import styles from "./Diet.module.css";

const Diet = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={`text-center ${styles["diet"]}`}>
        <div
          className={`${styles["heading"]} d-flex justify-content-center justify-content-sm-between`}
        >
          <h2 className={styles["title"]}>CHẾ ĐỘ ĂN HOT</h2>
          <Link to="/diet">
            <p className={`d-none d-sm-block ${styles["see-all"]}`}>
              Xem tất cả
            </p>
          </Link>
        </div>
        <div className={styles["content"]}>
          <div className="row">
            <div className="col-6 col-sm-6 col-lg-3">
              <div className={styles["diet-link"]}>
                <div
                  className={`${styles["diet-item"]} ${styles["border-item"]} position-relative`}
                >
                  <img src="./img/home/diet/diet-keto.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
              <div className={styles["diet-link"]}>
                <div
                  className={`${styles["diet-item"]} ${styles["border-item"]} position-relative`}
                >
                  <img src="./img/home/diet/diet-paleo.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
              <div className={styles["diet-link"]}>
                <div
                  className={`${styles["diet-item"]} ${styles["border-item"]} position-relative`}
                >
                  <img src="./img/home/diet/diet-low.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
              <div className={styles["diet-link"]}>
                <div
                  className={`${styles["diet-item"]} ${styles["border-item"]} position-relative`}
                >
                  <img src="./img/home/diet/vegan.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <Link to="/diet">
            <button className={`${styles["btn-see-all"]} d-sm-none`}>
              Xem tất cả
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Diet;
