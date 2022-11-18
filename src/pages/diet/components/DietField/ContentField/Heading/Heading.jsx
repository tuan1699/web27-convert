import React from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div
      className={`${styles["heading"]} d-flex align-items-center justify-content-sm-between`}
    >
      <div className={styles["content-decr"]}>
        <div className={styles["title"]}>CHẾ ĐỘ ĂN</div>
        <div className={styles["decr-page"]}>
          Xây dựng chế độ ăn lành mạnh cho cuộc sống khỏe mạnh
        </div>
      </div>
    </div>
  );
};

export default Heading;
