import React from "react";
import { Link } from "react-router-dom";
import styles from "./SuggestItem.module.css";

const SuggestItem = ({ suggestItem }) => {
  return (
    <div className="col-4 col-md-2">
      <Link
        to={"/recipes/" + suggestItem.id}
        className={styles["suggest-link"]}
      >
        <div className={styles["suggest-item"]}>
          <div className={styles["suggest-item-thumb"]}>
            <img src={suggestItem.thumb} alt="" />
          </div>
          <div className={styles["suggest-item-name"]}>{suggestItem.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default SuggestItem;
