import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={`d-flex justify-content-center ${styles["social"]}`}>
        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-facebook" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>
            FACEBOOK
          </p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-twitter" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>
            TWITTER
          </p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-google" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>GOOGLE</p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-instagram" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>
            INSTAGRAM
          </p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-pinterest" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>
            PINTEREST
          </p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-youtube" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>
            YOUTUBE
          </p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-envelope" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>EMAIL</p>
        </div>

        <div className={`d-flex align-items-center ${styles["social-item"]}`}>
          <span className={styles["social-icon"]}>
            <i className="bi bi-snapchat" />
          </span>
          <p className={`d-none d-md-block ${styles["social-name"]}`}>
            SNAPCHAT
          </p>
        </div>
      </div>
      <div className={styles["copy-right"]}>
        @2022 - Food Mood. All Right Reserved. Designed and Developed by Tuan
        Dang Van
      </div>
    </section>
  );
};

export default Footer;
