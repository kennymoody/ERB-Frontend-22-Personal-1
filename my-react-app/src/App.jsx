import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div className="container" id="home">
        {/* <!-- Section - NAVBAR --> */}
        <nav className="navbar">
          {/* <!-- <h1>DEMO TRAVEL PAGE</h1> */}
          <div className="navbar-flex">
            <img src="./IMG/travel-svgrepo-com.svg" alt="" className="logo" />
            <ul className="main-menu-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#tours">Tours</a>
              </li>
            </ul>
            <ul className="social-menu-list">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" className="nav-icon">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
            {/* // <!-- Mobile Menu --> */}
            <div className="mobile-menu">
              <div className="mobile-menu-toggle">
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="mobile-menu-items">
                <ul className="mobile-menu-list">
                  <li>
                    <a href="#home" className="mobile-menu-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="mobile-menu-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="mobile-menu-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#tours" className="mobile-menu-link">
                      Tours
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* // <!-- Section - HERO --> */}
        <section className="section hero">
          <div className="hero-container">
            <h1>Continue Exploring</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corporis,Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <button className="hero-btn btn">
              <a href="#tours">explore tours</a>
            </button>
          </div>
        </section>
        {/* // <!-- Section - ABOUT --> */}
        <section className="section about" id="about">
          <div className="about-container">
            <h2>
              about <span>us</span>
            </h2>
            <div className="about-grid">
              <div className="about-left">
                <div className="about-image">
                  <img
                    src="https://loremflickr.com/1200/600/parrot?random=3"
                    alt=""
                  />
                </div>
              </div>
              <div className="about-info">
                <h3>explore the difference</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis,Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Vo
                </p>
                <button className="btn about-btn">
                  <a href="#services">read more</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- Section - SERVICES --> */}
        <section className="section services" id="services">
          <div className="services-container">
            <h2>
              our <span>Services</span>
            </h2>
            <div className="services-card-grid">
              <div className="services-card-flex">
                <span className="services-icon">
                  <i className="fa-solid fa-wallet"></i>
                </span>
                <div className="services-info">
                  <h4>Saving Money</h4>
                </div>
                <div className="services-text">
                  <p>Lorem ipsum dolor, sit amet consectetur</p>
                </div>
              </div>
              <div className="services-card-flex">
                <span className="services-icon">
                  <i className="fa-solid fa-tree"></i>
                </span>
                <div className="services-info">
                  <h4>Endless Hiking</h4>
                </div>
                <div className="services-text">
                  <p>Lorem ipsum dolor, sit amet consectetur</p>
                </div>
              </div>
              <div className="services-card-flex">
                <span className="services-icon">
                  <i className="fa-solid fa-socks"></i>
                </span>
                <div className="services-info">
                  <h4>Amazing Comfort</h4>
                </div>
                <div className="services-text">
                  <p>Lorem ipsum dolor, sit amet consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- Section - TOURS --> */}
        <section className="section tours" id="tours">
          <div className="tours-container">
            <h2>
              featured <span>tours</span>
            </h2>
            <div className="tour-card-grid">
              {/* // <!-- TOUR CARD 1 --> */}
              <div className="tour-card-container">
                <div className="tour-card-image">
                  <img src="./IMG/tibet.jpg" alt="" />
                  <p className="tour-date">Sep 21st, 2026</p>
                </div>
                <div className="tour-card-title">
                  <h3>Tibet Adventure</h3>
                </div>
                <div className="tour-card-info">
                  <h3>Lorem ipsum dolor sit.</h3>
                </div>
                <div className="tour-card-details-container">
                  <span className="tour-card-details-logo">
                    <i className="fa-regular fa-map"></i>China
                  </span>
                  <div className="tour-card-details-day">6 Days</div>
                  <div className="tour-card-details-price">from $4000</div>
                </div>
              </div>
              {/* // <!-- TOUR CARD 2 --> */}
              <div className="tour-card-container">
                <div className="tour-card-image">
                  <img src="./IMG/southkorea.jpg" alt="" />
                  <p className="tour-date">Aug 21st, 2026</p>
                </div>
                <div className="tour-card-title">
                  <h3>Seoul Adventure</h3>
                </div>
                <div className="tour-card-info">
                  <h3>
                    Lorem ipsum dolor sit. Lorem ipsum dolor sit amet
                    consabore!dfsdfdsfdsfdsfsf
                  </h3>
                </div>
                <div className="tour-card-details-container">
                  <span className="tour-card-details-logo">
                    <i className="fa-regular fa-map"></i>South Korea
                  </span>
                  <div className="tour-card-details-day">7 Days</div>
                  <div className="tour-card-details-price">from $8000</div>
                </div>
              </div>
              {/* // <!-- TOUR CARD 3 --> */}
              <div className="tour-card-container">
                <div className="tour-card-image">
                  <img src="./IMG/london.jpg" alt="" />
                  <p className="tour-date">Dec 21st, 2026</p>
                </div>
                <div className="tour-card-title">
                  <h3>London Adventure</h3>
                </div>
                <div className="tour-card-info">
                  <h3>Lorem ipsum dolor sit.</h3>
                </div>
                <div className="tour-card-details-container">
                  <span className="tour-card-details-logo">
                    <i className="fa-regular fa-map"></i>UK
                  </span>
                  <div className="tour-card-details-day">10 Days</div>
                  <div className="tour-card-details-price">from $12000</div>
                </div>
              </div>
              {/* // <!-- TOUR CARD 4 --> */}
              <div className="tour-card-container">
                <div className="tour-card-image">
                  <img src="./IMG/tibet.jpg" alt="" />
                  <p className="tour-date">Sep 21st, 2026</p>
                </div>
                <div className="tour-card-title">
                  <h3>Tibet Adventure</h3>
                </div>
                <div className="tour-card-info">
                  <h3>Lorem ipsum dolor sit.</h3>
                </div>
                <div className="tour-card-details-container">
                  <span className="tour-card-details-logo">
                    <i className="fa-regular fa-map"></i>China
                  </span>
                  <div className="tour-card-details-day">6 Days</div>
                  <div className="tour-card-details-price">from $4000</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- Section - FOOTER --> */}
        <section className="section footer">
          <div className="footer-menu-items">
            <ul className="footer-menu-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#tours">Tours</a>
              </li>
            </ul>
            <ul className="footer-social-menu-list">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" className="nav-icon">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
            <p className="copyright">
              {/* {Fix Year} */}
              &copy; <span id="date"></span> Demo Travel Page
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
