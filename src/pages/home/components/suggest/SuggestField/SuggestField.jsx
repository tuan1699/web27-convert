import React from "react";
import SuggestList from "../SuggestList/SuggestList";
import styles from "./SuggestField.module.css";

const SuggestField = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["suggest"]} text-center`}>
        <div
          className={`${styles["heading"]} d-flex justify-content-center justify-content-sm-between`}
        >
          <h2 className={styles["title"]}>GỢI Ý CHO BẠN</h2>
        </div>
        <div className="content">
          <SuggestList />
        </div>
      </div>
    </div>
  );
};

export default SuggestField;
