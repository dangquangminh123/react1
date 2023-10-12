import "./ActionNew.css";
function ActionNew() {
  const listTour = [
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20230516093038.jpg",
      title: "TOP 15 ĐỊA ĐIỂM CHECK IN MIỄN PHÍ Ở CHÂU ĐỐC",
      content: "Châu Đốc là trung tâm nổi tiếng tại An Giang",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20230513101651.webp",
      title: "21 ĐỊA ĐIỂM CỰC LÝ TƯỞNG Ở TÂY BẮC DÀNH CHO DÂN ĐI PHƯỢT",
      content: "Vì sao du lịch Tây Bắc luôn luôn hấp dẫn tín đồ xê dịch?",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20230512173301.webp",
      title: "16 ĐỊA ĐIỂM DU LỊCH QUY NHƠN NỔI TIẾNG THU HÚT",
      content: "Thành phố Quy Nhơn đang dần trở thành một trong những địa điểm du lịch được mọi người tìm đến khám phá",
    },
  ];
  const listFood = [
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20230505100324.png",
      title: "10 MÓN ĂN NỔI TIẾNG Ở NHA TRANG VÀ NƠI TÌM RA CHÚNG!",
      content: "Trong khoảng thời gian khám phá Nha Trang, ẩm thực vùng miền là một điểm sáng.",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20221121174944.png",
      title: "TOP 5 MÓN NHẤT ĐỊNH PHẢI THỬ KHI ĐI DU LỊCH XỨ CHÙA VÀNG",
      content: "Thiên đường ẩm thực món Thái bao giờ cũng có vị đậm đà",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20221121174227.png",
      title: "4 món canh đặc trưng trong bữa ăn hằng ngày của người Hàn Quốc.",
      content: "Từ những thành phần đơn giản như đậu phụ, kim chi, giá đỗ, thịt bò...",
    },
  ];

  const listGolf = [
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20221008142832.jpg",
      title: "PGA Tour có thể được xem là chuỗi các giải đấu mà mọi golfer trên thế giới đều",
      content: "Trong khoảng thời gian khám phá Nha Trang, ẩm thực vùng miền là một điểm sáng.",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20221008142358.jpg",
      title: "Các thể thức thi đấu golf",
      content: "Golf là sân chơi cho phép người tham gia phô diễn nhiều kỹ thuật cá nhân. Vì vậy có rất nhiều",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/domain/Balotour/news/20221008142121.jpg",
      title: "Vị trí đặt bóng ảnh hưởng đến đường bóng như thế nào?",
      content: "Cú đánh bóng của bạn phụ thuộc vào vị trí đặt bóng golf cùng với tư thế đứng khi chơi.",
    },
  ];

  return (
    <div className="mt-5">
      <div className="container">
        <h3>Hoạt động tin tức của Balotour</h3>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <p>Du lịch - khám phá</p>
                {listTour.map((item) => (
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src={item.url} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <span>{item.title}</span>
                      <br />
                      <span>{item.content}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <p>Ẩm thực</p>
                {listFood.map((item) => (
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src={item.url} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <span>{item.title}</span>
                      <br />
                      <span>{item.content}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <p>Golf - Sự kiện - Giải đấu</p>
                {listGolf.map((item) => (
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src={item.url} width="100%" alt="" />
                      </div>
                    </div>
                    <div className="col-8">
                      <span>{item.title}</span>
                      <br />
                      <span>{item.content}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ActionNew;
