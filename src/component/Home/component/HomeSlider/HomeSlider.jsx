import React from "react";
import Slider from "react-slick";
import './HomeSlider.css'

function HomeSlider(props) {
  const settings = {
    dots: false, // hiển thị chỉ số ảnh
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  const listImg = [
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/b6fd42b0473879f8ca1fe5e8a3574eda.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/25c5229720346508a29821d0f2a221af.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/8219bc0b6bb012a47513f33cf023db9e.png",
    },
  ];
  return (
   <>
    <div className="Home-Slider">
    <Slider {...settings}>
        {listImg.map((item) => (
          <>
            <img src={item.url} alt="" />
          </>
        ))}
    </Slider>
    <div className="content-slider">
    <h1>Điểm đến thú vị vui chơi thỏa thích</h1>
    <h2>Trải nghiệm mới làm tăng hoocmon hạnh phúc của bạn</h2>
      <form action="" className="d-flex">
        <input type="text" placeholder="Tìm theo điểm đến, hoạt động" className="form-control" />
        <button className="btn btn-primary">Tìm kiếm</button>
      </form>
    </div>
    </div>
   </>
    
  );
}

export default HomeSlider;
