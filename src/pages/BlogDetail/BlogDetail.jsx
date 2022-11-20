import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import { blogList } from "../../db";
import styles from "./BlogDetail.module.css";

const BlogDetail = () => {
  const blog = useLoaderData();
  console.log(blog);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className={styles["blog-container"]}>
              <div className={styles["breadcumb"]}>
                <Link to="/">TRANG CHỦ</Link> / <Link to="/recipes">BLOG</Link>{" "}
                / <Link to="#">{blog.name}</Link>
              </div>
              <div className={styles["post-field"]}>
                <div className={styles["post-heading"]}>
                  <p className={styles["title-post"]}>{blog.name}</p>
                  <div
                    className={`${styles["item-info"]} d-flex align-items-center`}
                  >
                    <div className={styles["item-by"]}>
                      written by {blog.auth}
                    </div>
                    <div className={styles["item-time"]}>{blog.date}</div>
                  </div>
                </div>
                <div className={styles["post-thumbnail"]}>
                  <img src={blog.thumb} alt="" />
                </div>
                <div className={styles["post-content"]}>
                  <p>
                    Mâm cơm nhà vào tháng Ba, thường có canh rau tập tàng nấu
                    riêu cua.
                  </p>
                  <p>
                    Vì là mùa xuân, mọi thứ trong vườn, ngoài đồng đều xanh
                    biếc, mơn mởn, ngon nõn. Chỉ cần vác theo một cái rổ nhỏ sứt
                    cạp, thì thụp sà vào góc nọ góc kia trong vườn, là đã được
                    đầy ắp một rổ đủ thứ thập cẩm các loại ngọn rau, lá rau và
                    thậm chí cả quả non. Mọi thứ cứ láo nháo tập tàng thế, chẳng
                    ra quy luật gì, thế mà khi nấu lên, lại ngon không thể tả.
                    Chỉ là một thứ dường như “lỡ bữa”, thế mà không cao lương mĩ
                    vị nào sánh bằng. Canh rau tập tàng thường nấu nhất với dền
                    cơm và các loại rau dền. Nhà mình thường có rau gì, thêm rau
                    đó. Hôm nay, nồi canh rau tập tàng mà chúng mình có, hái ở
                    ngoài bãi sông về, phải đến gần chục thứ rau: dền cơm, dền
                    đỏ, dền xanh, bồ ngót bùi bùi, tầm bóp, ngọn dâu tằm chan
                    chát, lá lốt non thơm nức, ngọn ớt non hăng hăng, và rau sam
                    đất chua chua nhớt nhớt. Chao ôi là thèm. Thế là mình mua
                    thêm một mẻ cua đồng nữa về nấu canh tập tàng. Thực ra thì,
                    đã là canh tập tàng, nấu thế nào cũng xong, cũng ngon, vơ
                    vài thứ rau là thành. Nhưng đôi lúc, mình cũng bị nấu thành
                    một… nồi cám lợn. Vì tỉ lệ các loại rau và mùi vị kì quá,
                    không chung đôi được.
                  </p>
                  <p>Một số mẹo nhỏ của mình như sau:</p>
                  <p>
                    – Dù nhiều loại rau đến mấy, vẫn nên có từ 1-3 loại chủ đạo.
                    Tổng lượng rau này nên chiếm khoảng 50% rổ rau, để có mùi vị
                    chủ đạo. Các loại khác lần lượt theo khẩu vị chỉ là điểm
                    xuyết. Ví dụ như mình hay dùng rau dền hoặc rau ngót làm vị
                    chủ đạo.
                  </p>
                  <p>
                    – Các loại rau nên có sự phong phú về mùi vị, mỗi loại như
                    một thứ gia vị gia giảm: thêm chút lá lốt thì canh rất thơm
                    (nhiều quá thì hăng), một chút ngọn ớt làm canh có vị rất
                    đặc biệt và khử tanh khi nấu với các loại đồ tanh như cua,
                    tôm, hến cực ngon, làm vị canh thêm ngọt. Lá dâu tằm mùa này
                    non ngon lắm, lá dâu như thứ “điều vị” giúp nồi canh ấm
                    bụng, không bị lạnh bụng khó tiêu, cũng nên cho vào một
                    chút.
                  </p>
                  <p>
                    – Rau sam chua chua nhơn nhớt ăn rất vào, nhưng nếu nấu quá
                    nhiều thì canh nhớt lắm, và màu rau không đẹp, trong bị héo
                    úa nữa.Các loại nấu cùng canh tập tàng ngon:
                  </p>
                  <p>
                    + Đầu bảng là riêu cua, tiếp là riêu tôm riêu tép (tôm tép
                    giã nhuyễn lọc hệt như riêu cua).
                  </p>
                  <p>+ Không có đồ tươi thì nấu tôm nõn, thịt băm cũng ok.</p>
                  <p>
                    + Nấu với hến, trai trai cũng ngon không để đâu cho hết hu
                    hu.
                  </p>
                  <p>Nguyên liệu hôm nay của mình (6 người ăn):</p>
                  <p>– 1 rổ các loại rau tập tàng như trên</p>
                  <p>
                    – 2,5 lạng cua đã giã nhuyễn (tương đương khoảng 500g cua
                    sống)
                  </p>
                  <p>– muối</p>
                  <p>– 1 thìa nhỏ nước mắm chắt</p>
                  <p>Cách làm:</p>
                  <p>1. Rau rửa sạch, thái nhỏ vừa ăn, lẫn lộn các loại.</p>
                  <p>
                    2. Cua hoà với 1.5l nước + 1 xíu muối, lọc nhiều lần ra hết
                    thịt cua, bỏ bã.
                  </p>
                  <p>
                    3. Đun nước cua với lửa to, khuấy đều tay cho đến khi nước
                    nóng thì dừng. Thịt cua sẽ chín nổi dần lên thành bánh. Vớt
                    thịt cua ra bát để riêng. Thả rau vào nồi nước nấu cho đến
                    chín tới. Nêm lại muối cho vừa ăn.
                  </p>
                  <p>
                    4. Trong một chảo nhỏ khác, phi thơm 1 thìa dầu ăn với 1 tép
                    hành khô nhỏ, cho gạch cua đã khêu riêng vào xào thơm với
                    nước mắm + 1 muôi nước canh, đổ phần gạch thơm này vào nồi
                    canh.
                  </p>
                  <p>
                    Bắc canh ra ăn nóng với cà muối và cơm trắng thì ngon tuyệt
                    vời. Bữa cơm hôm nay nhà mình ngoài canh riêu cua tập tàng
                    ra còn có sườn rim chua ngọt, đậu phụ tẩm hành, mắm tép
                    chưng thịt mình tự làm, cà muối, dưa cải, hành muối, rau gia
                    vị hái trong vườn. Bữa cơm đạm bạc toàn rau dưa vậy thôi.
                  </p>
                  <p>Mời các bạn xơi cơm!</p>
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

BlogDetail.loader = async ({ params }) => {
  const { blogId } = params;

  try {
    const blogItem = blogList.find((blog) => {
      return blog.id == blogId;
    });

    return blogItem;
  } catch (err) {
    throw new Error("Code sai roi");
  }
};

export default BlogDetail;
