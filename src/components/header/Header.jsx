import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Stack,
  Dropdown,
} from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div
        className={`d-flex justify-content-between align-items-center ${styles["wrapper"]}`}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img src="./img/home/logo.png" alt="" />
          </Link>
        </div>
        <div className="nav d-none d-lg-flex">
          <NavLink to="/diet" className={styles["nav-item"]}>
            CHẾ ĐỘ ĂN
          </NavLink>
          <NavLink to="/recipes" className={styles["nav-item"]}>
            CÔNG THỨC
          </NavLink>
          <NavLink to="/blog" className={styles["nav-item"]}>
            BLOG
          </NavLink>
          <NavLink to="/course" className={styles["nav-item"]}>
            KHÓA HỌC NẤU ĂN
          </NavLink>
        </div>

        <div className="header-feature d-flex align-items-center">
          <div
            className={`user-btn text-light me-3 fs-4 ${styles["header-feature-item"]}`}
          >
            <i className="bi bi-person-circle" />
          </div>
          <div
            className={`text-light search-btn me-3 fs-4 ${styles["header-feature-item"]}`}
          >
            <i className="bi bi-search" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
