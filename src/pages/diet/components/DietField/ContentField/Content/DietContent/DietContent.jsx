import React from "react";
import styles from "./DietContent.module.css";

const DietContent = () => {
  return (
    <div className="col-12 col-lg-9">
      <div className={styles["diet-suggest"]}>
        <div className={styles["diet-heading"]}>CHẾ ĐỘ ĂN PHÙ HỢP VỚI BẠN</div>
        <div className="row">
          <div className="col-12 col-md-4">
            <a href>
              <div
                className={`${styles["diet-suggest-item"]} position-relative`}
                style={{ backgroundImage: "url(./img/diet/diet-3.jpg)" }}
              >
                <div className={styles["diet-suggest-title"]}>
                  Thay đổi vóc dáng
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href>
              <div
                className={`${styles["diet-suggest-item"]} position-relative`}
                style={{ backgroundImage: "url(./img/diet/diet-1.jpg)" }}
              >
                <div className={styles["diet-suggest-title"]}>
                  Cải thiện sức khỏe
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href>
              <div
                className={`${styles["diet-suggest-item"]} position-relative`}
                style={{ backgroundImage: "url(./img/diet/diet-2.jpg)" }}
              >
                <div className={styles["diet-suggest-title"]}>
                  Dinh dưỡng bệnh lý
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles["diet-popular"]}>
        <div className={styles["diet-heading"]}>CHẾ ĐỘ ĂN PHỔ BIẾN</div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={`${styles["diet-popular-item"]} position-relative`}>
              <div className={styles["diet-thumb"]}>
                <img src="./img/diet/paleo.png" alt="" />
              </div>
              <div
                className={`${styles["diet-popular-title"]} position-absolute`}
              >
                Cải thiện sức khỏe
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`${styles["diet-popular-item"]} position-relative`}>
              <div className={styles["diet-thumb"]}>
                <img src="./img/diet/keto.png" alt="" />
              </div>
              <div
                className={`${styles["diet-popular-title"]} position-absolute`}
              >
                Thay đổi vóc dáng
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`${styles["diet-popular-item"]} position-relative`}>
              <div className={styles["diet-thumb"]}>
                <img src="./img/diet/low-carb.png" alt="" />
              </div>
              <div
                className={`${styles["diet-popular-title"]} position-absolute`}
              >
                Thay đổi vóc dáng
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`${styles["diet-popular-item"]} position-relative`}>
              <div className={styles["diet-thumb"]}>
                <img src="./img/diet/dash.png" alt="" />
              </div>
              <div
                className={`${styles["diet-popular-title"]} position-absolute`}
              >
                Dinh dưỡng bệnh lý
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`${styles["diet-popular-item"]} position-relative`}>
              <div className={styles["diet-thumb"]}>
                <img src="./img/diet/flexitarian.png" alt="" />
              </div>
              <div
                className={`${styles["diet-popular-title"]} position-absolute`}
              >
                Cải thiện sức khỏe
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`${styles["diet-popular-item"]} position-relative`}>
              <div className={styles["diet-thumb"]}>
                <img src="./img/diet/vegan.png" alt="" />
              </div>
              <div
                className={`${styles["diet-popular-title"]} position-absolute`}
              >
                Cải thiện sức khỏe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["diet-community"]}>
        <div className={styles["diet-heading"]}>CỘNG ĐỒNG</div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div
              className={`${styles["diet-community-item"]} position-relative`}
              style={{ backgroundImage: "url(./img/diet/diet-3.jpg)" }}
            >
              <div className={styles["diet-community-title"]}>
                Tham gia ngay
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className={`${styles["diet-community-item"]} position-relative`}
              style={{ backgroundImage: "url(./img/diet/diet-1.jpg)" }}
            >
              <div className={styles["diet-community-title"]}>
                Tham gia ngay
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className={`${styles["diet-community-item"]} position-relative`}
              style={{ backgroundImage: "url(./img/diet/diet-2.jpg)" }}
            >
              <div className={styles["diet-community-title"]}>
                Tham gia ngay
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietContent;
