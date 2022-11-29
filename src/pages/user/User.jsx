import React from "react";
import { Link } from "react-router-dom";
import TabInUser from "../../components/tabInUser/TabInUser";
import styles from "./User.module.css";

const User = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["breadcumb"]}>
        <Link to="/">TRANG CHỦ</Link> /{" "}
        <Link to="/user">TÀI KHOẢN CỦA TÔI</Link>
      </div>
      <div className={styles["body"]}>
        <div className={styles["user-container"]}>
          <TabInUser />
        </div>
      </div>
    </div>
  );
};

export default User;
