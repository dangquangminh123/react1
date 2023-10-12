import Slider from "react-slick";
import "./LoveTour.css";

function LoveTour() {
  const settings = {
    dots: false, // hiển thị chỉ số ảnh
    infinite: true,
    speed: 1000,
    slidesToShow: 4, //hiển thị số ảnh xuất hiện
    slidesToScroll: 1, // scoll từng ảnh
    autoplay: true, // ảnh tự chuyển động
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false, // hiển thị hai đấu mũi tên điều hướng
    responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToScroll: 0,
          slidesToShow: 0,
        },
      },
    ],
  };
  const listLoveTour = [
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230418144836.png",
      name: "TOUR MEKONG RIÊNG 1 NGÀY(MỸ THO-BẾN TRE)",
      option: "Tour riêng",
      time: "1 ngày",
      price: "1800500",
      priceSale: "1300500",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230412170231.jpg",
      name: "La Casta Daily Cruise + La Casta Premier Cruise",
      option: "Tour ghép",
      time: "1 ngày",
      price: "1800500",
      priceSale: "1250000",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230610105724.jpg",
      name: "NHA TRANG - ĐÀ LẠT 1 NGÀY (Tour ghép)",
      option: "Tour ghép",
      time: "1 ngày",
      price: "1800500",
      priceSale: "1300500",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230404095423.png",
      name: "Hà Nội City nửa ngày (Tour riêng)",
      option: "Tour riêng",
      time: "1 ngày",
      price: "1800500",
      priceSale: "1300500",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230404094719.png",
      name: "TAM CHÚC - NGŨ ĐỘNG THI SƠN 1 NGÀY (T7&CN)",
      option: "Tour Ghép",
      time: "1 ngày",
      price: "990000",
      priceSale: "1300500",
    },

    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230310111540.png",
      name: "THAM QUAN TÂY NINH 1 NGÀY (T7&CN)",
      option: "Tour Ghép",
      time: "1 ngày",
      price: "990000",
      priceSale: "1300500",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230224133544.png",
      name: "HÀ NỘI - SAPA - CÁT CÁT hoặc HÀM RỒNG - FANSIPAN (Khách sạn 4 sao)",
      option: "Tour Ghép",
      time: "2 ngày 1 đêm",
      price: "2950000",
      priceSale: "1300500",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230303133950.png",
      name: "TOUR HÀ NỘI - HẠ LONG - NINH BÌNH - YÊN TỬ - SAPA - FANSIPAN - 6N5Đ (Tour ghép đoàn - Khởi hành: Thứ 5 hàng tuần - 3 sao)",
      option: "Tour Ghép",
      time: "6 ngày 5 đêm",
      price: "7950000",
      priceSale: "1300500",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/tour/20230627162753.png",
      name: "TOUR HÀ NỘI - SAPA - CÁT CÁT - HÀM RỒNG - FANSIPAN - THÁC BẠC - CẦU KÍNH - 3N2Đ (Hotel: 3 sao - Xe bus giường nằm cao cấp - Tour khởi hành hàng ngày)",
      option: "Tour Ghép",
      time: "3 ngày 2 đêm",
      price: "2950000",
      priceSale: "1300500",
    },
  ];
  return (
    <div className="background mt-4">
      <div className="container pt-3 ">
        <h3>Tour du lịch yêu thích</h3>
        <Slider {...settings}>
          {listLoveTour.map((item) => (
            <>
              <div className="card mx-2 mt-2">
                <div className="card-image">
                  <img src={item.url} alt="" width="100%" />
                </div>
                <div className="card-body">
                  <div className="card-name">
                    <strong>{item.name}</strong>
                  </div>
                  <div className="card-detail">
                    <span className="mx-2" style={{ background: "#ccc" }}>
                      {item.option}
                    </span>
                    <span style={{ background: "#ccc" }}>{item.time}</span>
                  </div>

                  <div className="card-price text-end">
                    <div className="row">
                      <div className="col-4">
                        <span>Giá tour</span>
                      </div>
                      <div className="col-8">
                        <span className="price">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price)}
                          /người
                        </span>
                        <br />
                        <span className="priceSale">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.priceSale)}
                        </span>
                        <span>/người</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn rounded-pill border border-3 mb-4">Xem tất cả</button>
        </div>
      </div>
    </div>
  );
}
export default LoveTour;
