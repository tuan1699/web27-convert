import React from "react";
import SuggestItem from "../SuggestItem/SuggestItem";
import styles from "./SuggestList.module.css";

const SuggestList = () => {
  const suggestList = [
    {
      id: 1,
      category: "cake",
      name: "Bánh Ngọt",
      thumb: "./img/home/suggest/banh-ngot.png",
    },

    {
      id: 2,
      category: "beverage",
      name: "Đồ uống",
      thumb: "./img/home/suggest/drink.png",
    },
    {
      id: 3,
      category: "appetizer",
      name: "Khai vị",
      thumb: "./img/home/suggest/khai-vi.png",
    },
    {
      id: 4,
      category: "main",
      name: "Món chính",
      thumb: "./img/home/suggest/mon-chinh.png",
    },
    {
      id: 5,
      category: "sub",
      name: "Món phụ",
      thumb: "./img/home/suggest/mon-phu.png",
    },
    {
      id: 6,
      category: "dessert",
      name: "Tráng miệng",
      thumb: "./img/home/suggest/trang-mieng.png",
    },
  ];

  const listSuggest = suggestList.map((suggestItem, index) => {
    return <SuggestItem key={index} suggestItem={suggestItem} />;
  });
  return <div className={`row ${styles["suggest-list"]}`}>{listSuggest}</div>;
};

export default SuggestList;
