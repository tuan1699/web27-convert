import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import { courseList } from "../../db";
import styles from "./CourseDetail.module.css";

const CourseDetail = () => {
  const course = useLoaderData();

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles["course-container"]}>
              <div>
                <div className={styles["breadcumb"]}>
                  <Link to="/">TRANG CHỦ</Link> /{" "}
                  <Link to="/course">COURSE</Link> /{" "}
                  <Link to="#">{course.name}</Link>
                </div>
                <div className={styles["course-item"]}>
                  <div className="row">
                    <div className="col-6">
                      <div className={styles["course-thumb"]}>
                        <img src={course.thumb} alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className={styles["course-name"]}>{course.name}</div>
                      <div
                        className={`${styles["course-price"]} d-flex align-items-center`}
                      >
                        {course.price.toLocaleString()} Đ
                      </div>
                      <span className={styles["course-register"]}>
                        ĐĂNG KÝ KHÓA HỌC
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles["course-decr"]}>
                  <p className={styles["course-title"]}>{course.name}</p>
                  <p>
                    Ẩm thực Việt chinh phục thực khách bởi những món ăn mang đậm
                    bản sắc văn hóa dân tộc, mộc mạc nhưng không kém phần tinh
                    tế, độc đáo. Đặc biệt hơn, đi dọc ba miền đất nước, mỗi vùng
                    lại có nét đặc trưng ẩm thực riêng khiến bao người nhớ mãi
                    không quên. Nếu bạn muốn chinh phục các món ngon ở cả 3 miền
                    thì ngại gì mà không đăng ký tham gia chương trình học nấu
                    ăn gia đình của Bếp Gia Đình – Hướng Nghiệp Á Âu ngay?
                  </p>
                  <img src={course.thumb} alt="" />
                  <p className="text-center">
                    <i>Mì Quảng là món ngon nức tiếng ở miền Trung</i>
                  </p>
                  <p>
                    Những bữa ăn ngon và giàu dinh dưỡng là yếu tố quan trọng
                    hàng đầu mà các chị em nội trợ luôn hướng tới. Hiểu được
                    điều này, Bếp Gia Đình – Hướng Nghiệp Á Âu đã xây dựng
                    Module Món Ngon 3 Miền với nhiều ưu điểm vượt trội. Tham gia
                    lớp học, bạn sẽ tích lũy được kiến thức, kỹ năng nấu nhiều
                    món ăn hấp dẫn từ Chuyên gia như: Bún chả Hà Nội, mì Quảng,
                    hến xào sả ớt, thịt nấu đông, bún mắm…
                  </p>
                  <p className={styles["course-title"]}>Nội dung khóa học</p>
                  <img src="/img/course/table.png" alt="" />
                  <p>
                    Học phí đã bao gồm tài liệu tham khảo và nguyên vật liệu
                    thực hành trong suốt quá trình học. Nếu đăng ký học cùng lúc
                    từ 2 module trở lên, bạn sẽ được giảm 10% trên tổng học phí.
                  </p>
                  <p className={styles["course-title"]}>Lợi ích khóa học</p>
                  <ul>
                    <li>
                      Cung cấp kiến thức tổng quan về ẩm thực ở từng vùng miền,
                      hướng dẫn làm 6 món ăn hấp dẫn, thơm ngon đặc trưng cho cả
                      3 miền Bắc – Trung – Nam.
                    </li>
                    <li>
                      Học viên được đào tạo bởi các Chuyên gia hàng đầu, lĩnh
                      hội nhiều bí quyết và kinh nghiệm nấu ăn ngon, đảm bảo an
                      toàn cho sức khỏe.
                    </li>
                    <li>
                      Phương pháp giảng dạy 2 chiều, chú trọng thực hành nhằm
                      giúp học viên có được kỹ năng chế biến món ăn vững vàng
                      ngay tại lớp.
                    </li>
                    <li>
                      Cơ sở vật chất hiện đại, đạt chuẩn 5 sao, trang bị đầy đủ
                      nguyên vật liệu cần thiết xuyên suốt quá trình học.
                    </li>
                  </ul>
                  <p className={styles["course-title"]}>Đội ngũ giảng viên</p>
                  <p>
                    Giảng viên đều là các Chuyên gia có kinh nghiệm lâu năm
                    trong nghề, không chỉ bật mí công thức nấu ăn ngon đúng
                    chuẩn mà còn chia sẻ nhiều kiến thức bổ ích về dinh dưỡng và
                    an toàn vệ sinh thực phẩm.
                  </p>
                  <p className={styles["course-title"]}>Cam kết cho học viên</p>
                  <ul>
                    <li>
                      Hoàn thành Module Món Ngon 3 Miền, học viên sẽ tự tin nấu
                      được nhiều món ăn vừa hấp dẫn vừa tốt cho sức khỏe để thay
                      đổi khẩu vị cho gia đình hoặc làm mới thực đơn, thúc đẩy
                      việc kinh doanh phát triển.
                    </li>
                    <li>
                      Học phí đã bao gồm toàn bộ nguyên vật liệu và công cụ dụng
                      cụ thực hành, không phát sinh chi phí khác.
                    </li>
                    <li>
                      Sĩ số lớp không vượt quá 19 học viên, đảm bảo chất lượng
                      dạy và học.
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
          </div>
          <div
            className={`d-none d-lg-block col-lg-3 ${styles["side-bar-content"]}`}
          >
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

CourseDetail.loader = async ({ params }) => {
  const { courseId } = params;

  try {
    const courseItem = courseList.find((course) => {
      return course.id == courseId;
    });

    return courseItem;
  } catch (err) {
    throw new Error("Code sai roi");
  }
};

export default CourseDetail;
