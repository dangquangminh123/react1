import React from "react";
import Slider from "react-slick";
import './HomeVoucher.css'

function HomeVoucher(props) {
  const settings = {
    dots: false, // hiển thị chỉ số ảnh
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // ảnh tự chuyển động
    autoplaySpeed: 4000,
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
  const listVoucher = [
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/b6fd42b0473879f8ca1fe5e8a3574eda.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/7aac32cc8b576446dccf186a4d58d495.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/8219bc0b6bb012a47513f33cf023db9e.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/0103121061ecfb73f220efe3def8b1b2.png",
    },
  ];

  return <div className="container mt-4">
   <Slider {...settings}>
   {listVoucher.map(item=>(
      <>
      <div className="mx-2">
        <img src={item.url} alt="" width='100%' height='130px' />
      </div>
      </>
    ))}
   </Slider>
  </div>;
}

export default HomeVoucher;
