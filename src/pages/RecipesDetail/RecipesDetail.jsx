import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import { recipesList } from "../../db";
import styles from "./RecipesDetail.module.css";

const RecipesDetail = () => {
  const recipes = useLoaderData();

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles["post-container"]}>
              <div className={styles["breadcumb"]}>
                <Link to="/">TRANG CHỦ</Link> /{" "}
                <Link to="/recipes">CÔNG THỨC</Link> /{" "}
                <Link to="#">{recipes.name}</Link>
              </div>
              <div className={styles["post-field"]}>
                <div className={styles["heading-post"]}>
                  <div className="row">
                    <div className="col-md-5 col-12">
                      <img src={recipes.thumb} alt="" />
                    </div>
                    <div className="col-md-7 col-12">
                      <h2 className={styles["recipes-name"]}>{recipes.name}</h2>
                      <div className={styles["recipes-post-info"]}>
                        <div className={styles["author-post"]}>
                          <span className={styles["format-icon"]}>
                            <img src="./img/icon/user.svg" alt="" />
                          </span>
                          <span>
                            Tác giả:
                            <span className={styles["format-value"]}>
                              {recipes.auth}
                            </span>
                          </span>
                        </div>
                        <div className={styles["method-post"]}>
                          <span className={styles["format-icon"]}>
                            <img src="./img/icon/long-ban.svg" alt="" />
                          </span>
                          <span>
                            Loại:{" "}
                            <span className={styles["format-value"]}>
                              {recipes.method}
                            </span>
                          </span>
                        </div>
                        <div className={styles["cuisine-post"]}>
                          <span className={styles["format-icon"]}>
                            <img src="./img/icon/nguyen-lieu.svg" alt="" />
                          </span>
                          <span>
                            Nguyên liệu chính:
                            <span className={styles["format-value"]}>
                              {recipes.ingredient}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["decr-post"]}>
                  <div className={styles["post-title"]}>Mô tả</div>
                  <p>
                    Gần như lần nào đi ăn hàng đồ Thái, nhà mình cũng gọi món
                    này. Cơm rang thơm nức mùi dứa chín, vị chua chua ngọt ngọt
                    đậm đà, cơm tơi bùi ráo hạt, mà cách làm cực dễ nhá! Lưu lại
                    cách làm, làm thử ngay nha các bạn ơi.
                  </p>
                </div>
                <div className={styles["decr-post"]}>
                  <div className={styles["post-title"]}>Thành phần</div>
                  <div className={styles["ingredients-list"]}>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        2 <span className={styles["unit"]}>bát</span>
                      </div>
                      <div className={styles["ingredients-name"]}>CƠM</div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        1/2 <span className={styles["unit"]}>quả</span>
                      </div>
                      <div className={styles["ingredients-name"]}>DỨA</div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        100<span className={styles["unit"]}>gram</span>
                      </div>
                      <div className={styles["ingredients-name"]}>TÔM</div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        1/2 <span className={styles["unit"]}>quả</span>
                      </div>
                      <div className={styles["ingredients-name"]}>TRỨNG GÀ</div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        200 <span className={styles["unit"]}>gram</span>
                      </div>
                      <div className={styles["ingredients-name"]}>
                        ĐẬU HÀ LAN
                      </div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        1/2 <span className={styles["unit"]}>quả</span>
                      </div>
                      <div className={styles["ingredients-name"]}>CÀ RỐT</div>
                    </div>
                    <div className={styles["sub-ingredient"]}>Gia vị</div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        1 <span className={styles["unit"]}>thìa cà phê</span>
                      </div>
                      <div className={styles["ingredients-name"]}>DẦU HÀO</div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        1 <span className={styles["unit"]}>thìa cà phê</span>
                      </div>
                      <div className={styles["ingredients-name"]}>XÌ DẦU</div>
                    </div>
                    <div className={`${styles["ingredients-item"]} d-flex`}>
                      <input
                        type="checkbox"
                        name="have-ingredients"
                        id="have-ingredients"
                        className={styles["have-ingredients"]}
                      />
                      <div className={styles["ingredients-quantity"]}>
                        1/3 <span className={styles["unit"]}>thìa cà phê</span>
                      </div>
                      <div className={styles["ingredients-name"]}>MUỐI</div>
                    </div>
                  </div>
                </div>
                <div className={styles["decr-post"]}>
                  <div className={styles["post-title"]}>Các bước thực hiện</div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 1:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-1.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 2:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-2.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 3:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-3.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 4:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-4.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 5:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-5.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 6:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-6.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                  <div className={styles["step"]}>
                    <div className={styles["step-number"]}>Bước 7:</div>
                    <div className={styles["wrapper-step"]}>
                      <div className={styles["step-thumb"]}>
                        <img src="./img/post/com-rang/step-7.png" alt="" />
                      </div>
                      <div className={styles["step-decr"]}>
                        Dứa chọn quả chín vừa vàng đều đẹp không dập hỏng. Rửa
                        thật sạch toàn bộ vỏ dứa bên ngoài &amp; để ráo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-3">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

RecipesDetail.loader = async ({ params }) => {
  const { recipesId } = params;

  try {
    const recipesItem = recipesList.find((recipes) => {
      return recipes.id == recipesId;
    });
    console.log(recipesItem);
    return recipesItem;
  } catch (err) {
    throw new Error("Code sai roi");
  }
};

export default RecipesDetail;
