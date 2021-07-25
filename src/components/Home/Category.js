import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <section className="main-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3>What do you need to find?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <Link to="night-life" className="col-md-4">
              <div className="find-place-img_wrap">
                <div className="grid">
                  <figure className="effect-ruby">
                    <img
                      src="assets/images/find-place1.jpg"
                      className="img-fluid"
                      alt="img13"
                    />
                    <figcaption>
                      <h5>Nightlife </h5>
                      <p>385 Listings</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </Link>
            <div className="col-md-4">
              <div className="row find-img-align">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src="assets/images/find-place2.jpg"
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Restaurants</h5>
                          <p>210 Listings</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src="assets/images/find-place3.jpg"
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Outdoors </h5>
                          <p>114 Listings</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row find-img-align">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src="assets/images/find-place4.jpg"
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Hotels </h5>
                          <p>577 Listings</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src="assets/images/find-place5.jpg"
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Art &amp; Culture </h5>
                          <p>79 Listings</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
