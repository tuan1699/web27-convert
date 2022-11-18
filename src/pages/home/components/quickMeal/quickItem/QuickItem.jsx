import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuickItem.module.css";

const QuickItem = ({ quickItem }) => {
  return (
    <div className="col-6 col-sm-4 col-lg-2">
      <Link to={"/recipes/" + quickItem.id} className={styles["quick-link"]}>
        <div className={styles["quick-meal-item"]}>
          <div className={styles["quick-meal-thumb"]}>
            <img src={quickItem.thumb} alt="" />
          </div>
          <div className={styles["quick-meal-decr"]}>
            <div className={`${styles["quick-meal-info"]} text-start`}>
              <p
                className={`${styles["quick-meal-name"]} ${styles["underline-hover-effect"]}`}
              >
                {quickItem.name}
              </p>
              <div className={styles["quick-meal-time"]}>
                {quickItem.duration} minutes <i className="bi bi-alarm" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default QuickItem;
