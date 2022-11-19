import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["breadcumb"]}>
        <Link to="/">TRANG CHỦ</Link> / <Link to="/cart">GIỎ HÀNG</Link>
      </div>
      <div className={styles["body"]}>
        <div className={styles["cart-container"]}>
          <div className={styles["cart-list"]}>
            <div className={styles["empty-cart"]}>
              <img src="./img/home/cart/empty.png" alt="" />
            </div>
            <template id="item-in-cart" />
          </div>
          <div className={styles["check-out-field"]}>
            <form action id={styles["check-out-form"]}>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className={styles["customer-info"]}>
                    <p className={styles["title-info"]}>THÔNG TIN HỌC VIÊN</p>
                    <div className="row">
                      <div className="col-6">
                        <div className={styles["info-user-field"]}>
                          <input
                            type="text"
                            name
                            id="first-name"
                            placeholder="Họ"
                          />
                          <span className={styles["message-error"]} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className={styles["info-user-field"]}>
                          <input
                            type="text"
                            name
                            id="last-name"
                            placeholder="Tên"
                          />
                          <span className={styles["message-error"]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["info-user-field"]}>
                      <input
                        type="tel"
                        name
                        id="number-phone"
                        placeholder="Số điện thoại"
                      />
                      <span className={styles["message-error"]} />
                    </div>
                    <div className={styles["info-user-field"]}>
                      <input
                        type="email"
                        name
                        id="email-checkout"
                        placeholder="Email"
                      />
                      <span className={styles["message-error"]} />
                    </div>
                    <div className={styles["info-user-field"]}>
                      <input
                        type="text"
                        name
                        id="address"
                        placeholder="Địa chỉ"
                      />
                      <span className={styles["message-error"]} />
                    </div>
                    <textarea
                      name
                      id
                      cols={30}
                      rows={10}
                      placeholder="Thêm thông tin bổ sung"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className={styles["check-out"]}>
                    <p className={styles["title-info"]}>THÔNG TIN KHÓA HỌC</p>
                    <div
                      className={`${styles["list-heading"]} d-flex justify-content-between`}
                    >
                      <p>Khóa học</p>
                      <p>Thành tiền</p>
                    </div>
                    <div className={styles["list-check-out"]} />
                    <div
                      className={`${styles["summary"]} d-flex justify-content-between`}
                    >
                      <p>TỔNG</p>
                      <p className={styles["summary-price"]} />
                    </div>
                    <div className={styles["pay-method"]}>
                      <p>HÌNH THỨC THANH TOÁN</p>
                      <ul>
                        <li>
                          <div className={styles["pay-method-item"]}>
                            <input
                              type="radio"
                              name="pay-option"
                              id="pay-option"
                            />
                            <span>Thanh toán tại trung tâm</span>
                            <p className={styles["method-decr"]}>
                              Vui lòng đến Chi nhánh gần nhất để thanh toán học
                              phí, Tư vấn viên sẽ ghi danh và giữ chỗ cho bạn
                              nhé.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className={styles["pay-method-item"]}>
                            <input
                              type="radio"
                              name="pay-option"
                              id="pay-option"
                            />
                            <span> Chuyển khoản ngân hàng </span>
                            <ul className={styles["method-decr"]}>
                              Sau khi đăng ký khóa học thành công, quý khách vui
                              lòng chuyển khoản đến số tài khoản như thông tin
                              bên dưới:
                              <li>- STK Ngân hàng: 0023100014090004</li>
                              <li>
                                - Tên Ngân hàng: Ngân hàng TMCP Phương Đông CN
                                Gia Định HCM
                              </li>
                              <li>- Tên viết tắt: OCB bank</li>
                              <li>
                                - Chủ TK: Công ty Cổ phần Hướng Nghiệp Á Âu
                              </li>
                              <li>
                                - Nội dung chuyển khoản: Tên khách hàng SĐT
                                khách hàng Tên khóa học đăng ký ( Vd: Nguyen Van
                                A 0969 123 456 CD tra sua).
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className={styles["pay-method-item"]}>
                            <input
                              type="radio"
                              name="pay-option"
                              id="pay-option"
                            />
                            <span> Thanh toán bằng thẻ nội địa </span>
                            <p className={styles["method-decr"]}>
                              Kích vào nút thanh toán và hệ thống sẽ chuyển tiếp
                              đến website OnePay để tiến hành xử lý thanh toán
                              của quý khách.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className={styles["pay-method-item"]}>
                            <input
                              type="radio"
                              name="pay-option"
                              id="pay-option"
                            />
                            <span> Thanh toán bằng thẻ quốc tế </span>
                            <p className={styles["method-decr"]}>
                              Kích vào nút thanh toán và hệ thống sẽ chuyển tiếp
                              đến website OnePay để tiến hành xử lý thanh toán
                              của Quý khách
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className={styles["btn-pay"]} type="submit">
                    THANH TOÁN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
