import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div id="preloder">
        <div class="loader"></div>
      </div>

      <header class="header header--normal">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-2 col-md-2">
              <div class="header__logo">
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-md-9">
              <nav class="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to="home">Home</Link>
                  </li>
                  <li>
                    <a href="./services.html">Services</a>
                  </li>
                  <li>
                    <a href="./portfolio.html">Portfolio</a>
                  </li>
                  <li class="active">
                    <a href="#">Pages</a>
                    <ul class="dropdown">
                      <li>
                        <a href="./about.html">About</a>
                      </li>
                      <li>
                        <a href="./team.html">Team</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">News</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-2 col-md-1">
              <div class="header__right">
                <div class="header__right__social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </div>
                <div class="header__right__search">
                  <a href="#" class="search-switch">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
