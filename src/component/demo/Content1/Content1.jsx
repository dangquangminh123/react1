import React from "react";
import "./Content1.css";
import { Link } from "react-router-dom";

function Content1(props) {
  return (
    <>
      <div className="container mt-5">
        <h2 className="titlecontent">Popular Destinations</h2>
        <p className="contentcontent">World's best tourist destinations</p>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          <div className="col">
            <div className="card">
              <img
                src={
                  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                }
                className="card-img-top"
                alt="Tokyo"
              />
              <div className="card-body">
                <h3 className="card-title">Tokyo</h3>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
                className="card-img-top"
                alt="Seoul"
              />
              <div className="card-body">
                <h3 className="card-title">Seoul</h3>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={
                  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
                }
                className="card-img-top"
                alt="Paris"
              />
              <div className="card-body">
                <h3 className="card-title">Paris</h3>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={
                  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
                }
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">London</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="titlecontent">Best Value Trips</h2>
        <p className="contentcontent">Best offers trips from us</p>
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
          <div className="col">
            <div className="card">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                className="card-img-top"
                alt="Seoul"
              />
              <div className="card-body">
                <h3 className="card-title">French Autumn</h3>
                <p>City Tours, Urban</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                className="card-img-top"
                alt="Paris"
              />
              <div className="card-body">
                <h3 className="card-title">Grand Switzerland</h3>
                <p>Shopping, Mountain, Snow & Ice</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                alt=""
                src={
                  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                }
              />
              <div className="card-body">
                <h3 className="card-title">Discover Japan</h3>
                <p>City Tours, Iconic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="titlecontent">Why Choose Us</h2>
        <p className="contentcontent">
          Here are reasons you should plan trip with us
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
          <div className="col">
            <div className="card">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
                className="card-img-center"
                alt="Seoul"
              />
              <div className="card-body">
                <h3 className="card-title">Handpicked Hotels</h3>
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                alt=""
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
              />
              <div className="card-body">
                <h3 className="card-title">World Class Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={
                  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
                }
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">Best Price Guarantee</h3>
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video">
        {/* <iframe
          className="embed-responsive-item w-100 mt-5"
          src="https://www.youtube.com/embed/VIDEO_ID"
          allowfullscreen
        ></iframe> */}
      </div>
      <div className="container mt-5">
        <h2 className="titlecontent">Articles & Tips</h2>
        <p className="contentcontent">
          Explore some of the best tips from around the world
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
          <div className="col">
            <div className="card">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                className="card-img-center"
                alt="Seoul"
              />
              <div className="card-body">
                <h7 className="card-date">DECEMBER 10, 2016</h7>

                <h3 className="card-title">
                  Memorial Day to Someone Told Me to Travel
                </h3>
                <p>
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache...
                </p>
                <Link className="card-more" to="">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                alt=""
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
              />
              <div className="card-body">
                <h7 className="card-date">DECEMBER 10, 2016</h7>
                <h3 className="card-title">
                  7 Tips For Nomads On A Budget Trips
                </h3>
                <p>
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache...
                </p>
                <Link className="card-more" to="">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                alt=""
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
              />
              <div className="card-body">
                <h7 className="card-date">DECEMBER 10, 2016</h7>

                <h3 className="card-title">Taking A Travel Blog Victory Lap</h3>
                <p>
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache...
                </p>
                <Link className="card-more" to="">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content1;
