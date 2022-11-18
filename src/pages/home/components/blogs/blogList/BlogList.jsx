import React from "react";
import { Link } from "react-router-dom";
import BlogItem from "../blogItem/BlogItem";
import styles from "./BlogList.module.css";

const BlogList = () => {
  const blogList = [
    {
      id: 1,
      name: "Vét tủ lạnh HÔ BIẾN BÁNH CHƯNG Ế THÀNH KIMBAP CHIÊN GIÒN NGON TUYỆT",
      thumb: "./img/blog/banh_chung.png",
      decr: "[Tạm biệt Tết] x Vét tủ lạnh HÔ BIẾN BÁNH CHƯNG Ế THÀNH KIMBAP CHIÊN GIÒN NGON TUYỆT Valentine xong rồi, gấp poster lại chưa các bạn ơi? Người ế thì mình chịu. Còn bánh chưng ế thì ship ngay…",
      auth: "February 26, 2019",
      date: "Tâm Phạm",
    },
    {
      id: 2,
      name: "CƠN BÃO “HÀN QUỐC – HÀNH TRÌNH MỸ VỊ” CÀN QUÉT CÁC BỮA TRƯA TẠI MỘT CÔNG SỞ NỌ TẠI HÀ NỘI",
      thumb: "./img/blog/han_quoc.png",
      decr: "CƠN BÃO “HÀN QUỐC – HÀNH TRÌNH MỸ VỊ” CÀN QUÉT CÁC BỮA TRƯA TẠI MỘT CÔNG SỞ NỌ TẠI HÀ NỘI Vâng thưa các bạn, kể từ ngày 10/10/2021 tới nay, một cơn bão lạ mang tên “Hàn Quốc…",
      auth: "March 15, 2022",
      date: "Hương Lan",
    },
    {
      id: 3,
      name: "CÁCH LÀM MIẾN CUỘN GIMMARI – MÓN ĂN VẶT KHÔNG DỪNG ĐƯỢC MIỆNG KIỂU HÀN QUỐC",
      thumb: "./img/blog/mien-cuon.png",
      decr: "CÁCH LÀM MIẾN CUỘN GIMMARI – MÓN ĂN VẶT KHÔNG DỪNG ĐƯỢC MIỆNG KIỂU HÀN QUỐC Có một bí ẩn cần YBer giải đáp giúp mình… Rằng Thử thách “Hàn Quốc: Hành Trình Mỹ Vị” đã đóng cổng nhận bài…",
      auth: "March 6, 2022",
      date: "Hoa Nguyễn",
    },
    {
      id: 4,
      name: "CÁCH LÀM JAPCHAE – KHÁM PHÁ MÓN CUNG ĐÌNH HÀN QUỐC",
      thumb: "./img/blog/japchae.png",
      decr: "CÁCH LÀM JAPCHAE – KHÁM PHÁ MÓN CUNG ĐÌNH HÀN QUỐC Japchae, được biết đến ở Việt Nam dưới cái tên miến xào rau củ, là một trong những món ăn truyền thống của Hàn Quốc nổi danh trên bản…",
      auth: "February 7, 2022",
      date: "Diệp Anh",
    },
    {
      id: 5,
      name: "GIẢI MÃ DALGONA HOT TREND YÊU BẾP “KHUẤY ĐẢO” MẠNG XÃ HỘI",
      thumb: "./img/blog/dalgona.png",
      decr: "GIẢI MÃ DALGONA HOT TREND YÊU BẾP “KHUẤY ĐẢO” MẠNG XÃ HỘI Xin chào các bạn, lần tổng kết hot trend này, spotlight của chúng ta sẽ dành trọn cho gương mặt vàng trong làng “khuấy đảo” mang tên Cà…",
      auth: "November 3, 2022",
      date: "Ngô Huệ",
    },
    {
      id: 6,
      name: "CÁCH LÀM NOKDU BINDAETTEOK – BÁNH KẾP ĐẬU XANH KIỂU HÀN",
      thumb: "./img/blog/dau.png",
      decr: "Nhắc đến Hàn Quốc, người ta không khỏi nghĩ ngay đến kimchi – món ăn có thể coi là một đại diện tiêu biểu cho quốc gia này trên bản đồ ẩm thực thế giới. Theo ghi nhận của Bảo Tàng Kim Chi (Museum Kimchikan) tại Seoul, Hàn Quốc thì có tới 187 loại kimchi từ xưa đến nay. Bên cạnh kimchi cải thảo đã nổi tiếng khắp thế giới, Hàn Quốc còn có một số loại kimchi phổ biến làm từ củ cải, lá hẹ, bắp cải, dưa chuột v.v. Trong series “Muối cả thế giới” của Esheep Kitchen, chúng mình cũng đã ghé thăm Hàn Quốc và Nhật Bản để học lỏm cách làm dưa chuột muối đấy! Thử trải nghiệm làm 1/187 loại kimchi với công thức này nhé",
      auth: "September 7, 2021",
      date: "Lan Anh",
    },
    {
      id: 7,
      name: "My little garden – Where is your soul’s shelter?",
      thumb: "./img/blog/little-garden.png",
      decr: "My little garden 🌿 Where is your soul’s shelter?Đôi khi ai cũng cần những góc nhỏ tĩnh lặng cho riêng mình.Góc nhỏ của bạn là nơi nào?",
      auth: "May 25, 2022",
      date: "Quốc Anh",
    },
    {
      id: 8,
      name: "Vẻ đẹp của rau củ",
      thumb: "./img/blog/rau-cu.png",
      decr: "Vẻ đẹp của rau củ Bất cứ ở đâu, bất cứ công việc nào, nếu bạn toàn tâm toàn ý và dành niềm hứng thú say mê với nó, bạn cũng có thể tìm được vẻ đẹp của nó đấy!…",
      auth: "May 14, 2021",
      date: "Quốc Anh",
    },
    {
      id: 9,
      name: "[Cuối tuần vào bếp cùng con] BÁNH NGÔ MÙA HÈ – SIÊU NGON SIÊU DỄ",
      thumb: "./img/blog/banh-ngo.png",
      decr: "Mình học món này của bạn Hoàng Minh đã chia sẻ với Yêu Bếp.Bạn ấy làm xong mang tặng studio bọn mình. Nó siêu ngon đến mức mình ngay lập tức ghim lại cách làm để cuối tuần cùng bọn Mĩm Cừu làm.Và đây – Một mẻ bánh ngô tuyệt ngon cho bữa xế nhiều nay của nhà mình – kèm trà sữa Thái đỏ trân châu đường đen bạn Mĩm tự làm đãi cả nhà.",
      auth: "May 14, 2021",
      date: "Quốc Anh",
    },
    {
      id: 10,
      name: "Màu của khu vườn, màu của những ngày đầu hạ…",
      thumb: "./img/blog/vuon.png",
      decr: "Màu của khu vườn, màu của những ngày đầu hạ. XANH MƯỚT Điều mà bọn mình yêu thích nhất ở Studio là gì? Là có một khu vườn trên mây. Một khoảnh vườn nhỏ xinh xắn và một ban công…",
      auth: "November 3, 2022",
      date: "Ngô Huệ",
    },
    {
      id: 11,
      name: "[Khu vườn mùa hạ]",
      thumb: "./img/blog/vuon-ha.png",
      decr: "[Khu vườn mùa hạ] Hôm nay, khu vườn trên mây của chúng mình có “khách quý” đến thăm. Một người bạn thân quen từ Yêu Bếp. Theo mình nhớ thì ấy đã follow mình tới 7 năm nay, vậy mà…",
      auth: "March 6, 2022",
      date: "Hoa Nguyễn",
    },
    {
      id: 12,
      name: "VU VƠ",
      thumb: "./img/blog/vu-vo.png",
      decr: "Chẳng biết giờ ương dở này up một chiếc hình vu vơ lên thì có ai xem không!!! Vu vơ mà ngon không tưởng!!!! Huhu!!! Lọ mọ thử làm bò hầm vang đỏ kiểu Pháp (Boeuf Bourguignon) kiểu của cô…",
      auth: "February 7, 2022",
      date: "Diệp Anh",
    },
    {
      id: 13,
      name: "TẾT ĐOAN NGỌ THÁNG NĂM",
      thumb: "./img/blog/doan-ngo.png",
      decr: "Những sớm tháng 5 mát mẻ, bọn trẻ con sẽ thật háo hức chờ đến ngày “giết sâu bọ” để thi nhau mở cái liếp giang trên liễn gốm ủ rượu nếp, để ngửi mùi hơi rượu sộc thẳng lên…",
      auth: "March 15, 2022",
      date: "Hương Lan",
    },
    {
      id: 14,
      name: "MÙA VỤ CÀ CHUA – CÁCH LÀM SUN DRIED TOMATO",
      thumb: "./img/blog/ca-chua.png",
      decr: "Cuối tuần vừa rồi, nhân ngày nắng ráo, mình đã dỡ giàn cà chua và thu hoạch đợt cà chua cuối. Nhìn những trái cà chua chín mọn và thơm mát này, không thể buồn được. Không thể buồn được. Cảm giác niềm vui cứ len lỏi mãi trên tay, khi chạm vào sự mọng nước, sự nhẵn mịn bóng bẩy thơm tho mùi đất này. Niềm vui sáng rỡ lên cả khi nín thở xếp từng trái, từng trái vào chiếc giỏ con. Xếp nhẹ nhàng, vui nhẹ nhàng.",
      auth: "February 26, 2019",
      date: "Tâm Phạm",
    },
    {
      id: 15,
      name: "NHỮNG NIỀM VUI NHÈ NHẸ",
      thumb: "./img/blog/happy.png",
      decr: "Những chiếc bánh nướng kiểu Anh và buổi chiều quá đỗi bình yên. Buổi học làm bánh chiều t7 16.3.2022. Một buổi chiều khiến tôi sẽ nhớ mãi. Gió mát lịm ngoài cửa sổ Studio và tất thảy chúng tôi…",
      auth: "February 7, 2022",
      date: "Diệp Anh",
    },
    {
      id: 16,
      name: "MÙA THU ĐẦU TIÊN Ở STUDIO",
      thumb: "./img/blog/studio.png",
      decr: "Mùa thu đầu tiên ở Studio🍁 Là mùa thu có nắng vàng, có góc ban công thật rộng để treo những quả hồng vàng ruộm, có những mẹt lá vối hong nắng để mời khách ghé thăm và có một…",
      auth: "March 6, 2022",
      date: "Lu Nguyễn",
    },
    {
      id: 17,
      name: "KHU VƯỜN RỰC RỠ ",
      thumb: "./img/blog/ruc-ro.png",
      decr: "Trong lúc chị đại Sheep đang vi vu trời Tây Ban Nha, thưởng thức toàn món ngon của lạ 😡😡😡 thì mấy đứa chúng mình lại tranh thủ một ngày Hà Nội nắng đẹp để “quy hoạch” lại khu vườn yêu…",
      auth: "September 6, 2022",
      date: "Phan Anh",
    },
    {
      id: 18,
      name: "",
      thumb: "./img/blog/mien-cuon.png",
      decr: "",
      auth: "December 6, 2022",
      date: "Đặng Tuấn",
    },
    {
      id: 19,
      name: "(GÓC REVIEW) PIZZA CHẢ CÁ",
      thumb: "./img/blog/pizza.png",
      decr: "Ok, hôm qua mọi người đã được một phen náo loạn vì PIZZA MẮM TÔM mình up lên group Hội Ăn Gì rồi.Nên hôm nay, mình quyết định đi qua tiệm Pizza 4P’s ở Phan Kế Bính, HN – nơi được cho là có món PIZZA MẮM TÔM ấy ở HN ăn thử xem thế nào.",
      auth: "March 6, 2022",
      date: "Thu Trang",
    },
    {
      id: 20,
      name: "(GÓC REVIEW) 🌿BÚN ỐC NGON KHÔNG MÌ CHÍNH🌿",
      thumb: "./img/blog/bun-oc.png",
      decr: "Suýt nữa thì tuyệt vọng. Chẳng còn tìm được hàng bún ốc nào vừa miệng mình mà lại không/hoặc ít mì chính.Tự dưng hôm nay thằng em lại vui chân rủ đi ăn bún ốc.Một hàng nghe danh nổi đã lâu nhưng thế nào lại không đến tai mình. =))",
      auth: "March 6, 2022",
      date: "Oanh Han",
    },
    {
      id: 21,
      name: "TỪ A-Z CÁCH LÀM KIM CHI TRUYỀN THỐNG HÀN QUỐC",
      thumb: "./img/blog/kim-chi.png",
      decr: "Không chỉ đơn thuần là một món ăn truyền thống, kimchi còn là gắn liền với bề dày lịch sử, văn hóa và con người của xứ sở này. Và nếu bạn chưa biết thì kimchi và kimjang – văn hóa muối kimchi của Hàn Quốc đã được UNESCO chính thức công nhận vào danh mục di sản văn hóa phi vật thể đại diện của nhân loại đó!",
      auth: "March 21, 2022",
      date: "Diep Phạm",
    },
  ];

  const listBlog = blogList.slice(0, 4).map((blog) => {
    return <BlogItem key={blog.id} blog={blog} />;
  });
  return (
    <div className="content">
      <div className={`row ${styles["blog-field"]}`}>{listBlog}</div>
      <Link to="/blog">
        <button className={`${styles["btn-see-all"]} d-sm-none`}>
          Xem tất cả
        </button>
      </Link>
    </div>
  );
};

export default BlogList;
