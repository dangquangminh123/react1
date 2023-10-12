import "./Banner.css";

function Banner() {
  return (
    <div className="mt-3 backgroundBanner">
      <div className="container">
        <div className="row">
          <div className="col-3 pt-4 pb-4">
            <img src="https://www.balotour.net/image/Group%20191.png" alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="card-img ">
              <img
                src="https://www.balotour.net/image/Vigolf.svg"
                alt=""
                width="100%"
              />
              <img
                src="https://www.balotour.net/image/appstore%20chplay.png"
                alt=""
                width="100%"
              />
            </div>
          </div>

          <div className=" col-5 text-nowrap text-white d-flex flex-column justify-content-center">
            {" "}
            <h5>TẢI ỨNG DỤNG BALOTOUR </h5>
            <h4>NHẬN NGAY 10% ƯU ĐÃI CHO ĐƠN HÀNG ĐẦU TIÊN </h4>
            <ul>
              <li>Đặt các dịch vụ du lịch nhanh chóng tiện lợi </li>
              <li>Đặt các dịch vụ du lịch nhanh chóng tiện lợi </li>
              <li>Đặt các dịch vụ du lịch nhanh chóng tiện lợi </li>
              <li>Đặt các dịch vụ du lịch nhanh chóng tiện lợi </li>
              <li>Đặt các dịch vụ du lịch nhanh chóng tiện lợi </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
