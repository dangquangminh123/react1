import React from "react";
import { Link } from "react-router-dom";
import './FormLogin.css'

function FormLogin(props) {
  return (
    <div>
      <div className="card-header">
        <div className="card-title">
          <div className="card-img text-center">
            <img
              src="https://demo.nhanhtravel.com/upload/company/20230918143353.png"
              alt="logo"
              width={250}
            />
          </div>
          <h2 className="text-center mb-2">
            CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN VIGO (NHANH TRAVEL)
          </h2>
        </div>
      </div>
      <div className="card-content">
        <div className="card-body">
          <div className="divider">
            <div className="text-uppercase text-center text-content">
              <small>or login with email</small>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label className="label-form">Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="email"
                name="email"
              />
            </div>
            <div className="form-group mt-3">
              <label className="label-form">Mật khẩu</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="form-group mt-3 d-flex flex-md-row flex-column justify-content-between align-items-center">
              <div className="text-left">
                <div className="checkbox checkbox-sm">
                  <input
                    type="checkbox"
                    name="save_me"
                    value="1"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="checkboxsmall label-form" htmlFor="exampleCheck1">
                    <small>Ghi nhớ đăng nhập</small>
                  </label>
                </div>
              </div>
              <input
                type="hidden"
                name="is_login_cookie"
                value=""
                className="is_login_cookie"
              />
              <div className="text-right">
                <Link to="/" className="card-link label-form">
                  <small>Quên mật khẩu?</small>
                </Link>
              </div>
            </div>
            <button
              type="submit"
              value="submit_form"
              name="submit_form"
              className="mt-4 btn btn-primary glow w-100 position-relative submit_form"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
