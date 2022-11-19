import React from "react";
import SideBar from "../../../../../../components/sidebar/SideBar";
import DietContent from "./DietContent/DietContent";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className="content">
      <div className="row">
        <DietContent />
        <div
          className={`${styles["sidebar-container"]} d-none d-lg-block col-lg-3`}
        >
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Content;
