import Slider from "react-slick";
import "./GolfLove.css";

function GolfLove() {
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
      url: "https://balotour.nhanhtravel.com/upload/golf_package//20220808152748.jpg",
      name: "72 NGÀY 5 ĐÊM 4 SAO (72 LỖ)",
      option: "Gói golf",
      address: "Lâm Đồng",
      time: "5 ngày 4 đêm",
      start: "Khách sạn 3 sao",
      priceSale: "3179700",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/golf_package//20220808152808.jpg",
      name: "ĐÀ LẠT 5 NGÀY 4 ĐÊM 5 SAO (72 lỗ)",
      option: "Gói golf",
      address: "Lâm Đồng",
      time: "5 ngày 4 đêm",
      start: "Khách sạn 3 sao",
      priceSale: "3179700",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/golf_package//20220808152859.jpg",
      name: "ĐÀ LẠT 4 NGÀY 3 ĐÊM 3 SAO (54 lỗ)",
      option: "Gói golf",
      address: "Lâm Đồng",
      time: "5 ngày 4 đêm",
      start: "Khách sạn 3 sao",
      priceSale: "3179700",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/golf_package//20220808155023.jpg",
      name: "ĐÀ LẠT 4 NGÀY 3 ĐÊM 3 SAO (54 lỗ)",
      option: "Gói golf",
      address: "Lâm Đồng",
      time: "5 ngày 4 đêm",
      start: "Khách sạn 3 sao",
      priceSale: "3179700",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/golf_package//20220808152918.jpg",
      name: "ĐÀ LẠT 3 NGÀY 2 ĐÊM 3 SAO (36 lỗ)",
      option: "Gói golf",
      address: "Lâm Đồng",
      time: "3 ngày 2 đêm",
      start: "Khách sạn 3 sao",
      priceSale: "3179700",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/golf_package//20220808155044.jpg",
      name: "ĐÀ LẠT 3 NGÀY 2 ĐÊM 3 SAO (36 lỗ)",
      option: "Gói golf",
      address: "Lâm Đồng",
      time: "2 ngày 3 đêm",
      start: "Khách sạn 3 sao",
      priceSale: "3179700",
    },
    
  ];
  return (
    <div className="background mt-4">
      <div className="container pt-3 ">
        <h3>Gói golf yêu thích</h3>
        <Slider {...settings}>
          {listLoveTour.map((item) => (
            <>
              <div className="card mx-2 mt-2">
                <div className="card-image">
                  <img src={item.url} alt="" width="100%" />
                </div>
                <div className="card-body">
                  <div className="card-option">
                  <span className="mx-3">{item.option}</span>

                    <span>{item.address}</span>
                  </div>
                  <div className="card-name">
                    <h5>{item.name}</h5>
                  </div>
                  <div className="card-detail">
                    <span className="mx-2" style={{ background: "#ccc" }}>
                      {item.time}
                    </span>

                    <span style={{ background: "#ccc" }}>{item.start}</span>
                  </div>

                  <div className="card-price mt-5">
                    <div className="row">
                      <div className="col-4">
                        <span>Giá gói</span>
                      </div>
                      <div className="col-8 text-end">
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
          <button className="btn rounded-pill border border-3 mb-4">
            Xem tất cả
          </button>
        </div>
      </div>
    </div>
  );
}
export default GolfLove;
