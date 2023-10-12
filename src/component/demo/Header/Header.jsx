import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(
    "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > 0;

      if (isScrollingDown) {
        setLogoSrc(
          "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
          );
        setIsScrolled(false)

      } else {
        setLogoSrc(
          "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
        );
        setIsScrolled(true)

      }
    };

    window.addEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className={`${isScrolled?'navbar bg-body-tertiary navbar-expand responsive-menu fixed-top':'navbar bg-body-tertiary navbar-expand responsive-menu fixed-top scrolled'}`}>
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <img
                  src={logoSrc}
                  width="92"
                  height="22"
                  className="d-inline-block align-text-top logo"
                  alt=""
                />
              </NavLink>
              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <Link to="/">home 1</Link>
                    </li>
                    <li>
                      <Link to="/">home 2</Link>
                    </li>
                    <li>
                      <Link to="/">home 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Tours<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Tours</Link>
                    </li>
                    <li>
                      <Link to="/">
                        Tours 1 <i className="bi bi-arrow-right"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/" className="nav-link">
                            Tours 1.1
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav-link">
                            Tours 1.2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/">
                        Tours 2 <i className="bi bi-arrow-right"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/" className="nav-link">
                            Tours 2.1
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav-link">
                            Tours 2.2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/">
                        Tours 3 <i className="bi bi-arrow-right"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/" className="nav-link">
                            Tours 3.1
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav-link">
                            Tours 3.2
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Booking<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Booking</Link>
                    </li>
                    <li>
                      <Link to="/">Booking 1</Link>
                    </li>
                    <li>
                      <Link to="/">Booking 2</Link>
                    </li>
                    <li>
                      <Link to="/">Booking 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Destinations<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Destinations</Link>
                    </li>
                    <li>
                      <Link to="/">Destinations 1</Link>
                    </li>
                    <li>
                      <Link to="/">Destinations 2</Link>
                    </li>
                    <li>
                      <Link to="/">Destinations 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Pages<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Pages</Link>
                    </li>
                    <li>
                      <Link to="/">Pages 1</Link>
                    </li>
                    <li>
                      <Link to="/">Pages 2</Link>
                    </li>
                    <li>
                      <Link to="/">Pages 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Blog<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Blog 1</Link>
                    </li>
                    <li>
                      <Link to="/">Blog 2</Link>
                    </li>
                    <li>
                      <Link to="/">Blog 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Shortcodes<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Shortcodes</Link>
                    </li>
                    <li>
                      <Link to="/">Shortcodes 1</Link>
                    </li>
                    <li>
                      <Link to="/">Shortcodes 2</Link>
                    </li>
                    <li>
                      <Link to="/">Shortcodes 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Shop<i className="bi bi-arrow-down"></i>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/">Shop</Link>
                    </li>
                    <li>
                      <Link to="/">Shop 1</Link>
                    </li>
                    <li>
                      <Link to="/">Shop 2</Link>
                    </li>
                    <li>
                      <Link to="/">Shop 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item1">
                  <NavLink className="nav-link1" to="/">
                    <i className="bi bi-list"></i>{" "}
                  </NavLink>
                  <NavLink className="nav-link1" to="/">
                    <i className="bi bi-minecart"></i>{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <h2 className="titleh2">Where do you want to g/o?</h2>
          <p className="contentp">
            Trips, experiences, and places. All in one service
          </p>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="input-group">
                <input
                  id="keyword"
                  name="keyword"
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Destination, city"
                />
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <div
                id="autoComplete"
                className="autoComplete"
                data-mousedown="false"
              ></div>
            </div>
            <div className="col-12 col-md-3">
              <div className="input-group">
                <select id="month" name="month" className="form-select">
                  <option value="">Any Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
                <span className="input-group-text">
                  <i className="bi bi-calendar-month"></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="input-group">
                <select id="sort_by" name="sort_by" className="form-select">
                  <option value="date">Sort By Date</option>
                  <option value="price_low">Price Low to H/igh</option>
                  <option value="price_high">Price High to L/ow</option>
                  <option value="name">Sort By Name</option>
                  <option value="popular">Sort By Popularity</option>
                  <option value="review">Sort By Review Score</option>
                </select>
                <span className="input-group-text">
                  <i className="bi bi-arrow-down-up"></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="input-group">
                <input
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  value="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
