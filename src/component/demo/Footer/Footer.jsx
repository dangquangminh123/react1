import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(props) {
  return (
    <>
    <footer class="footer mt-5">
      <div class="container">
        <div class="row footertop">
          <div class="col-12 col-md-4">
            <div class="title">
              <h2>Our Awards</h2>
            </div>
            <div class="content">
              <p>
                London is Link megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </p>
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                width="246"
                height="113"
                style={{marginTop:'30px'}}
                alt=""
                data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                data-ll-status="loaded"
                class="entered lazyloaded"
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="title">
              <h2>Contact Info</h2>
            </div>
            <div class="content">
              <p><i class="bi bi-phone"></i> 1-567-124-44227</p>
              <p>
                <i class="bi bi-geo-alt"></i>
                184 Main Street East Perl Habour 8007
              </p>
              <p>
                <i class="bi bi-alarm"></i>
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </p>
              <ul>
                <li>
                  <Link to=""><i class="bi bi-facebook"></i> </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="bi bi-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i class="bi bi-pinterest"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="title">
              <h2>Recent Trips</h2>
            </div>
            <div class="content">
              <div class="row mt-3">
                <div class="col col-md-4">
                  <Link
                    target="_blank"
                    to="https://www.flickr.com/photos/artiephotography/28760131762/"
                  >
                    <img
                      src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                      alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                      class="img-fluid"
                    />
                  </Link>
                </div>
                <div class="col col-md-4">
                  <Link
                    target="_blank"
                    to="https://www.flickr.com/photos/artiephotography/27308262031/"
                  >
                    <img
                      src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                      alt="Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory"
                      class="img-fluid"
                    />
                  </Link>
                </div>
                <div class="col col-md-4">
                  <Link
                    target="_blank"
                    to="https://www.flickr.com/photos/artiephotography/27287965356/"
                  >
                    <img
                      src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                      alt="Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore"
                      class="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col col-md-4">
                  <Link
                    target="_blank"
                    to="https://www.flickr.com/photos/artiephotography/27138570412/"
                  >
                    <img
                      src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                      alt="View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America"
                      class="img-fluid"
                    />
                  </Link>
                </div>
                <div class="col col-md-4">
                  <Link
                    target="_blank"
                    to="https://www.flickr.com/photos/artiephotography/26520497604/"
                  >
                    <img
                      src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                      alt="Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR"
                      class="img-fluid"
                    />
                  </Link>
                </div>
                <div class="col col-md-4">
                  <Link
                    target="_blank"
                    to="https://www.flickr.com/photos/artiephotography/27012097142/"
                  >
                    <img
                      src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                      alt="The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR"
                      class="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row footerbottom">
          <ul class="navbarbottom">
            <li><Link to="">Home</Link></li>
            <li><Link to="">Tour</Link></li>
            <li><Link to="">Blog</Link></li>
            <li><Link to="">Purchase Theme</Link></li>
          </ul>
          <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;