import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`position-relative ${styles["slider"]}`}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className={styles["slider-item"]}
              style={{ backgroundImage: "url(./img/home/slider-diet.png)" }}
            >
              <div
                className={`position-absolute text-light ${styles["slider-item-text"]}`}
                style={{ right: "10%", top: "50%" }}
              >
                <h1 className={styles["slider-item-title"]}>
                  Diet For Healthy Life
                </h1>
                <p
                  className={`d-none d-md-block ${styles["slider-item-decr"]}`}
                >
                  " Tôi đã từng mắc phải rất nhiều sai lầm khi yêu và cảm thấy
                  hối hận gần như tất cả các cuộc tình mình trải qua. Tuy nhiên,
                  tôi không hề hối hận vì những món ăn đã gắn liền với chúng. "
                </p>
                <NavLink to="/diet" className={styles["btn-see-more"]}>
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className={styles["slider-item"]}
              style={{ backgroundImage: "url(./img/home/slider-recipes.png)" }}
            >
              <div
                className={`position-absolute text-light ${styles["slider-item-text"]}`}
                style={{ left: "15%", top: "50%" }}
              >
                <h1 className={styles["slider-item-title"]}>
                  Family Easy Recipes
                </h1>
                <p
                  className={`d-none d-md-block ${styles["slider-item-decr"]}`}
                >
                  " Có ba cách để dẫn đến trái tim của em: mua thức ăn cho em,
                  làm những món ăn mà em thích, cuối cùng là thức ăn của em. "
                </p>
                <NavLink to="/diet" className={styles["btn-see-more"]}>
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className={styles["slider-item"]}
              style={{ backgroundImage: "url(./img/home/slider-blog.png)" }}
            >
              <div
                className={`position-absolute text-light ${styles["slider-item-text"]}`}
                style={{ right: "10%", top: "50%" }}
              >
                <h1 className={styles["slider-item-title"]}>
                  Blog For Easy Cooking
                </h1>
                <p
                  className={`d-none d-md-block ${styles["slider-item-decr"]}`}
                >
                  " Thế giới bếp núc với tôi vốn là một trò chơi tuyệt đẹp mà
                  không biết từ lúc nào tôi đã chìm đắm. Tôi yêu thích cảm giác
                  toàn tâm toàn ý làm ra một món ăn ngon, thưởng thức, chụp ảnh
                  và viết lại những dòng chia sẻ về nó "
                </p>
                <NavLink to="/diet" className={styles["btn-see-more"]}>
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className={styles["slider-item"]}
              style={{ backgroundImage: "url(./img/home/slider-course.png)" }}
            >
              <div
                className={`position-absolute text-light ${styles["slider-item-text"]}`}
                style={{ left: "15%", top: "50%" }}
              >
                <h1 className={styles["slider-item-title"]}>Cooking Course</h1>
                <p
                  className={`d-none d-md-block ${styles["slider-item-decr"]}`}
                >
                  " Hãy để chúng tôi đồng hành cùng bạn trên con đường vun đắp
                  hạnh phúc gia đình bằng những kiến thức bổ ích, món ăn hấp
                  dẫn, sự tận tình, chu đáo và tỉ mỉ "
                </p>
                <NavLink to="/diet" className={styles["btn-see-more"]}>
                  Xem ngay
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
