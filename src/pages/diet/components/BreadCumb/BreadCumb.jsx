import React from "react";
import { Link } from "react-router-dom";
import styles from "./BreadCumb.module.css";

const BreadCumb = () => {
  return (
    <div className={styles["breadcumb"]}>
      <Link to="/">TRANG CHỦ</Link>/ <Link to="/diet">CHẾ ĐỘ ĂN</Link>
    </div>
  );
};

export default BreadCumb;
