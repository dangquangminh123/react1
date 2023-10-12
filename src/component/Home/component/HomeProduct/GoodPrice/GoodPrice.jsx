import React from "react";
import "./GoodPrice.css";
import Slider from "react-slick";

function GoodPrice(props) {
  const settings = {
    dots: false, // hiển thị chỉ số ảnh
    infinite: true,
    speed: 1000,
    slidesToShow: 3, //hiển thị số ảnh xuất hiện
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
  const listGoodPrice = [
    {
      name: "Vietnam Airlines",
      currentlocation: "Tân Sơn Nhất",
      destination: "Côn Đảo",
      time: "31/07/2022",
      priceSale: "1794000",
      price: "2300000",
    },
    {
      name: "Vietnam Airlines",
      currentlocation: "Tân Sơn Nhất",
      destination: "Côn Đảo",
      time: "31/07/2022",
      priceSale: "1794000",
      price: "2300000",
    },
    {
      name: "Vietnam Airlines",
      currentlocation: "Tân Sơn Nhất",
      destination: "Côn Đảo",
      time: "31/07/2022",
      priceSale: "1794000",
      price: "2300000",
    },
    {
      name: "Vietnam Airlines",
      currentlocation: "Tân Sơn Nhất",
      destination: "Côn Đảo",
      time: "31/07/2022",
      priceSale: "1794000",
      price: "2300000",
    },
  ];
  return (
    <div className="container mt-5">
      <h3>Chuyến bay giá tốt</h3>
      <Slider {...settings}>
        {listGoodPrice.map((item) => (
          <>
            <div className="card mx-2 mt-2">
              <div className="card-body">
                <div className="card-name">
                  <span>
                    <i class="bi bi-geo-alt"></i>
                    {item.name}
                  </span>
                </div>
                <div className="card-address">
                  <span>{item.currentlocation}</span>
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                  <span>{item.destination}</span>
                </div>
                <div className="card-time">
                  <span>
                    <i class="bi bi-airplane-engines"></i>Khởi hành:{item.time}
                  </span>
                </div>
                <div className="card-price text-end">
                  <div className="row">
                    <div className="col-2">
                      <span>Giá vé</span>
                    </div>
                    <div className="col-10">
                      <span className="price">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.price)}/người
                      </span>
                      <br />
                      <span className="priceSale">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.priceSale)}
                      </span><span>/người</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default GoodPrice;
