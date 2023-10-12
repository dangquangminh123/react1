import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
        <div className="header fixed-top">
          <div className="container mt-3 ">
            <div className="row header-top">
              <div className="col-4 header-left d-flex">
                <img
                  src="https://vigomanager.com/app-assets/mobile/balotour/logo/LOGO%20BALOTOUR-01.png"
                  alt=""
                />
                <div className="input-group">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Tìm theo điểm đến, hoạt động"
                  />
                </div>
              </div>
              <div className="col-8 header-right d-flex justify-content-end">
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="i18n">
                    <img src="https://vigomanager.com/app-assets/mobile/manager/image/flag_vn.png" alt=""/>
                  </div>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link">Tải ứng dụng</Link>
                      </li>
                      <li>
                        <Link className="nav-link">Trợ giúp</Link>
                      </li>
                      <li>
                        <Link className="nav-link">Xem gần đây</Link>
                      </li>
                      <li>
                        <Link className="nav-link">Đăng ký</Link>
                      </li>
                      <li>
                        <Link className=" btn btn-primary rounded-pill" type="">
                          Đăng nhập
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-mid mt-3">
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="collspace navbar-collapse">
                  <ul className="navbar-nav mx-auto ">
                    <li className="nav-item">
                      <Link className="nav-link">Tất cả <i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Golf<i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Tour du lịch<i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Lưu trú<i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Di chuyển<i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Khác<i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">|</span>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Về chúng tôi</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Liên hệ</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"><i class="bi bi-gift"></i>Phiếu quà tặng</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link"><i class="bi bi-cart2"></i>Giỏ hàng<i className="bi bi-caret-down-fill"></i></Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
  );
}

export default Header;
