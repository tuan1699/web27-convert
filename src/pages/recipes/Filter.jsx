import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <form action id={styles["filter-field"]}>
      <div className={styles["select-form"]}>
        <div className={styles["form-field"]}>
          <select name="season" id="season">
            <option value="all">Mùa</option>
            <option value="spring">Mùa Xuân</option>
            <option value="summer">Mùa Hạ</option>
            <option value="fall">Mùa Thu</option>
            <option value="winter">Mùa Đông</option>
          </select>
        </div>
        <div className={styles["form-field"]}>
          <select name="region" id="region">
            <option value="all">Vùng miền</option>
            <option value="north-side">Miền Bắc</option>
            <option value="central">Miền Trung</option>
            <option value="south-side">Miền Nam</option>
          </select>
        </div>
        <div className={styles["form-field"]}>
          <select name="type" id="category">
            <option value="all">Loại</option>
            <option value="main">Món chính</option>
            <option value="sub">Món phụ</option>
            <option value="appetizer">Khai vị</option>
            <option value="beverage">Đồ uống</option>
            <option value="dessert">Tráng miệng</option>
            <option value="cake">Bánh</option>
          </select>
        </div>
        <div className={styles["form-field"]}>
          <select name="time" id="time">
            <option value="all">Thời gian nấu</option>
            <option value="{30}">Nhanh</option>
            <option value="{60}">Trung Bình</option>
            <option value="{120}">Nấu nhừ</option>
          </select>
        </div>
        <div className={styles["form-field"]}>
          <select name="method" id="method">
            <option value="all">Cách chế biến</option>
            <option value="boil">Món luộc</option>
            <option value="fry">Món xào</option>
            <option value="fried">Món chiên, rán</option>
            <option value="sauce">Nước chấm</option>
            <option value="rang">Rang</option>
            <option value="ngam">Ngâm</option>
            <option value="suop">Nấu canh</option>
            <option value="rim">Rim</option>
            <option value="ham">Hầm</option>
            <option value="kho">Kho</option>
            <option value="salad">Salad</option>
            <option value="grill">Nướng</option>
            <option value="tea">Chè</option>
          </select>
        </div>

        <p className={styles["clear-filter"]}>Hiển thị tất cả công thức</p>
      </div>
    </form>
  );
};

export default Filter;
