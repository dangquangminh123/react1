import React from "react";
import Slider from "react-slick";


function SliderLogin() {
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
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://demo.nhanhtravel.com/upload/photo_library/4a3db6ce0e0dc434173e330c0b6c0f8c.png"
          alt="Slide 1"
          width="100%"

        />
      </div>
      <div>
        <img
          src="https://demo.nhanhtravel.com/upload/photo_library/f56351c7d99c1940c517b75374cf8615.png"
          alt="Slide 2"
          width="100%"
        />
      </div>
    </Slider>
  );
}

export default SliderLogin;
