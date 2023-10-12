import React from "react";
import Slider from "react-slick";

function Partner(props) {
  const settings = {
    dots: false, // hiển thị chỉ số ảnh
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
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
      url: "https://balotour.nhanhtravel.com/upload/balotour/64ac439f0e1b2e53a8d309c1254c8d21.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/6b13bb5e7d37c6946146f9bbc37d7214.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/31786a03dd8091ea694383eed2371fcb.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/4bf3f67a5db94eaa1ac297a139ab719f.gif",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/7d86d1f35524ab5a16720ecc3e5c6d1f.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/bea8a71e0d642fd4c02add812e77f993.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/e4fce4ce4f49a12c3998e71b517a1d7e.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/4bb5f3978723abdbf0482b8f053ff7be.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/b948b6d3810eedd26a788f6d724c389e.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/c08999a29e20e42fa367236c5cd490f4.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/30725bb433e8797d0b7ca4bf440a6597.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/49588b7ea93e309168fd1c0104d971c1.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/4363200733444724b3f8632315559779.jpg",
    },
  ];

  return <div className="container mt-4">
    <h3>Đối tác</h3>
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

export default Partner;
