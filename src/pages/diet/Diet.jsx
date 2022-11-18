import React from "react";
import BreadCumb from "./components/BreadCumb/BreadCumb";
import ContentField from "./components/DietField/ContentField/ContentField";
import styles from "./Diet.module.css";

const Diet = () => {
  return (
    <div className={styles["wrapper"]}>
      <BreadCumb />
      <ContentField />
    </div>
  );
};

export default Diet;
