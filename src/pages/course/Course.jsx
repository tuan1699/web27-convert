import React from "react";
import styles from "./Course.module.css";
import { courseList } from "../../db";
import { Link } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import CourseItem from "../../components/CourseItem/CourseItem";

const Course = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["breadcumb"]}>
        <Link to="/">TRANG CHỦ</Link> / <Link to="course">KHÓA HỌC NẤU ĂN</Link>
      </div>
      <div className={styles["body"]}>
        <div
          className={`${styles["heading"]} d-flex justify-content-center align-items-center justify-content-sm-between`}
        >
          <div className={styles["content-decr"]}>
            <div className={styles["title"]}>KHÓA HỌC NẤU ĂN GIA ĐÌNH</div>
            <div className={styles["decr-page"]}>
              Hãy để chúng tôi đồng hành cùng bạn trên con đường vun đắp hạnh
              phúc gia đình bằng những kiến thức bổ ích, món ăn hấp dẫn, sự tận
              tình, chu đáo và tỉ mỉ
            </div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>
                  TẠI SAO BẠN CẦN PHẢI HỌC NẤU ĂN
                </h2>
                <span className={styles["course-in4"]}>
                  Bữa cơm gia đình là một trong những yếu tố quan trọng quyết
                  định chất lượng cuộc sống. Món ăn ngon, dinh dưỡng sẽ giúp bạn
                  có một cơ thể khỏe mạnh. Bữa ăn đầy đủ các thành viên gia đình
                  sẽ làm bạn luôn cảm thấy hạnh phúc, vui vẻ. Với các cặp vợ
                  chồng, cùng nhau chia sẻ việc nhà, việc bếp núc sẽ là bí quyết
                  giữ gìn và hâm nóng tình cảm. Với phụ nữ hiện đại, biết nấu ăn
                  khoa học sẽ có nhiều thời gian hơn cho sự nghiệp và chăm sóc
                  bản thân…
                </span>
                <span className={styles["course-in4"]}>
                  Hiểu được tầm quan trọng của các bữa cơm, FoodMood đã nghiên
                  cứu và xây dựng các khóa học nấu ăn gia đình, bao gồm: Bữa
                  sáng thông minh, Hôm nay ăn gì, Món ngon cuối tuần, Điểm tâm
                  Hồng Kông, Pha chế cực cool, Món ăn Mẹ &amp; Bé, Món ngon châu
                  Á…và nhiều lớp học nấu ăn theo món khác.
                </span>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>
                  BẠN SẼ HỌC ĐƯỢC GÌ TRONG KHÓA HỌC?
                </h2>
                <span className={styles["course-in4"]}>
                  Đăng ký học, bạn sẽ được Giảng viên là các Bếp Trưởng, Chuyên
                  gia dinh dưỡng giàu kinh nghiệm hướng dẫn công thức và chia sẻ
                  các phương pháp, bí quyết nấu ăn, pha chế, làm bánh thơm ngon,
                  hấp dẫn. Môi trường học tập hiện đại, tiện nghi, đầy đủ trang
                  thiết bị cùng thời gian thực hành chiếm đến 90% sẽ giúp bạn
                  nâng cao kỹ năng nấu nướng nhanh chóng. Sau khi kết thúc khóa
                  học, bạn không những có thể chuẩn bị cho gia đình bữa ăn hội
                  tụ đủ sắc – hương – vị, đảm bảo dinh dưỡng mà còn tự tin mở
                  quán kinh doanh thu hút nhiều thực khách.
                </span>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>CƠ SỞ VẬT CHẤT</h2>
                <div className="row">
                  <div className="col-6 col-sm-3 mb-24">
                    <img src="./img/course/csvc1.jpg" alt="" />
                  </div>
                  <div className="col-6 col-sm-3 mb-24">
                    <img src="./img/course/csvc2.jpg" alt="" />
                  </div>
                  <div className="col-6 col-sm-3 mb-24">
                    <img src="./img/course/csvc3.jpg" alt="" />
                  </div>
                  <div className="col-6 col-sm-3 mb-24">
                    <img src="./img/course/csvc4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>CHƯƠNG TRÌNH HỌC</h2>
                <div className={`row ${styles["course-list"]}`}>
                  {courseList.map((course) => {
                    return <CourseItem key={course.id} course={course} />;
                  })}
                </div>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>ĐỘI NGŨ GIẢNG VIÊN</h2>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className={styles["mentor-item"]}>
                      <div className={styles["mentor-thumb"]}>
                        <img src="./img/course/mentor1.jpg" alt="" />
                      </div>
                      <div className="text-center">
                        <p className={styles["mentor-name"]}>
                          GV. Đặng Đình Thiết
                        </p>
                        <p className={styles["mentor-decr"]}>
                          Bếp Trưởng Nhà Hàng Đặc Sản Phương Nam
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className={styles["mentor-item"]}>
                      <div className={styles["mentor-thumb"]}>
                        <img src="./img/course/mentor2.jpg" alt="" />
                      </div>
                      <div className="text-center">
                        <p className={styles["mentor-name"]}>
                          GV. Đỗ Xuân Trình
                        </p>
                        <p className={styles["mentor-decr"]}>
                          Bếp Trưởng Trung Tâm Hội Nghị Tiệc Cưới Grand Palace
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className={styles["mentor-item"]}>
                      <div className={styles["mentor-thumb"]}>
                        <img src="./img/course/mentor3.jpg" alt="" />
                      </div>
                      <div className="text-center">
                        <p className={styles["mentor-name"]}>
                          GV. Chu Văn Hương
                        </p>
                        <p className={styles["mentor-decr"]}>
                          Bếp trưởng nhà hàng Biển Xanh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>
                  HỌC PHÍ BAO NHIÊU? THỜI GIAN HỌC TRONG BAO LÂU
                </h2>
                <span className={styles["course-in4"]}>
                  Các module nấu ăn gia đình có thời gian học khoảng 3 buổi và
                  được chia làm các chuyên đề theo từng buổi.
                </span>
                <ul>
                  <li>
                    Học phí khóa học nấu ăn gia đình là từ 1.700.000 đồng đến
                    hơn 2 triệu đồng.
                  </li>
                  <li>
                    Học phí đã bao gồm giáo trình, tất cả các chi phí nguyên vật
                    liệu thực hành trong suốt quá trình học.
                  </li>
                </ul>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>Cam Kết Cho Học Viên</h2>
                <span className={styles["course-in4"]}>
                  Khi hoàn thành các khóa học, bạn sẽ nắm được công thức nấu ăn,
                  làm bánh, pha chế độc quyền từ FoodMood, tự tin chế biến các
                  món ngon cho bữa cơm hằng ngày, mở tiệc chiêu đãi khách, làm
                  đám cỗ…
                </span>
                <span className={styles["course-in4"]}>
                  Chia sẻ cách bảo quản nguyên liệu được lâu, tiết kiệm chi phí,
                  cách định giá món ăn, định lượng khẩu phần ăn dành cho những
                  ai học để mở quán kinh doanh.
                </span>
                <span className={styles["course-in4"]}>
                  Giới thiệu địa chỉ mua nguyên vật liệu, dụng cụ, thiết bị mở
                  quán cho Học viên.
                </span>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>
                  Một Số Hình Ảnh Tại Lớp Học
                </h2>
                <div className="row">
                  <div className="col-6 mb-24 col-lg-3">
                    <img src="./img/course/real1.jpg" alt="" />
                  </div>
                  <div className="col-6 col-lg-3">
                    <img src="./img/course/real2.jpg" alt="" />
                  </div>
                  <div className="col-6 col-lg-3">
                    <img src="./img/course/real3.jpg" alt="" />
                  </div>
                  <div className="col-6 col-lg-3">
                    <img src="./img/course/real4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className={styles["course-field"]}>
                <h2 className={styles["course-title"]}>
                  CẢM NHẬN CỦA HỌC VIÊN
                </h2>
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className={styles["reac-item"]}>
                      <div className={styles["reac-thumb"]}>
                        <img src="./img/course/reac-1.jpg" alt="" />
                      </div>
                      <div className={styles["react-user-info"]}>
                        <div className={styles["reac-name"]}>Huỳnh Vân</div>
                        <div className={styles["reac-course"]}>
                          Học viên khóa Hôm nay ăn gì?
                        </div>
                      </div>
                      <div className={styles["reac-content"]}>
                        “Sau khi học xong khóa học Hôm nay ăn gì, mình đã không
                        còn phải đau đầu với câu hỏi “hôm nay ăn gì” mỗi ngày
                        nữa. Và mình còn nắm được nhiều công thức chế biến món
                        ngon để chiêu đãi gia đình.”
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className={styles["reac-item"]}>
                      <div className={styles["reac-thumb"]}>
                        <img src="./img/course/reac-2.jpg" alt="" />
                      </div>
                      <div className={styles["react-user-info"]}>
                        <div className={styles["reac-name"]}>Duy Khánh</div>
                        <div className={styles["reac-course"]}>
                          Học viên khóa Bữa sáng thông minh
                        </div>
                      </div>
                      <div className={styles["reac-content"]}>
                        “Mình rất thích Giảng viên khóa học, vừa tâm huyết vừa
                        nhiệt tình chia sẻ kiến thức nấu ăn. Thời gian tới, mình
                        sẽ học thêm khóa pha chế để tự làm đồ uống yêu thích tại
                        nhà.”
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className={styles["reac-item"]}>
                      <div className={styles["reac-thumb"]}>
                        <img src="./img/course/reac-3.jpg" alt="" />
                      </div>
                      <div className={styles["react-user-info"]}>
                        <div className={styles["reac-name"]}>Hạ Dương</div>
                        <div className={styles["reac-course"]}>
                          Học viên khóa Gà nướng - Gà bó xôi
                        </div>
                      </div>
                      <div className={styles["reac-content"]}>
                        “Sau khi bổ sung hai món gà nướng, gà bó xôi chế biến
                        theo công thức đặc biệt của HNAAu vào thực đơn, khách
                        đến quán mình đã đông hơn rất nhiều.”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-lg-block">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
