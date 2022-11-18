import React from "react";
import styles from "./QuickField.module.css";
import QuickList from "../quickList/quickList";
import { Link } from "react-router-dom";

const QuickField = () => {
  return (
    <div className={`${styles["quick-meal"]} text-center`}>
      <div className={styles["wrapper"]}>
        <div
          className={`${styles["heading"]} d-flex justify-content-center justify-content-sm-between`}
        >
          <h2 className={styles["title"]}>
            BỮA ĂN NHANH CHUẨN BỊ DƯỚI 30 PHÚT
          </h2>
          <Link to="/recipes" className="text-light">
            <p className={`${styles["see-all"]} d-none d-md-block`}>
              Xem tất cả
            </p>
          </Link>
        </div>
        <QuickList />
      </div>
    </div>
  );
};

export default QuickField;
