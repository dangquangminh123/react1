import Slider from "react-slick";

function Experience() {
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
  const listExperience = [
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/51afeb2eb9926792b495ecc8a13cead2.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/db2fc652d4adb974beaef4474a72af54.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/94c1d0bca645883b0e81aa9432fcb23d.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/5f487ef1f9d4d8206f21942848047437.JPG",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/fc0254baac58892f63f93bfc61677176.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/ccfe9dfb3845966467f7ce4ad14fd9f4.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/989223b55e931b17f7f129a33acda2d3.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/cd3739769915bc4b3cff3d4b4437fbac.jpg",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/72e2a2a26dee43131040ef1e3a0d4d1a.JPG",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/7607a0c65bc50b184a37b734d9b65258.JPG",
    },
    
  ];
  return (
    <div className="mt-5">
      <div className="container">
        <h3>Trải nghiệm hấp dẫn cho mọi người</h3>
        <Slider {...settings}>
          {listExperience.map((item) => (
            <>
              <div className="mx-2">
                <img src={item.url} alt="" width="413.333px" height="300px" />
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Experience;
