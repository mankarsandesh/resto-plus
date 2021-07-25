import React from "react";
import { useParams } from "react-router-dom";

function SearchListing() {
  let { category } = useParams();
  return (
    <div id="wrapper-content" className="wrapper-content bg-gray-04 pb-0">
      <div className="container">
        <ul className="breadcrumb breadcrumb-style-02 py-7">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">Sidebar Listing - Grid View</li>
        </ul>
        <div className="page-container row">
          <div className="sidebar col-lg-4 order-1 order-lg-0 mb-8 mb-lg-0">
            <div className="card rounded-0 mb-6 map p-0">
              <div
                id="googleMap"
                data-google-map="true"
                className="small-map"
              ></div>
              <div className="map-content">
                <a
                  href="#"
                  className="btn btn-primary btn-icon-left font-size-md px-5 lh-18"
                >
                  <i className="fas fa-map-marker-alt"></i>See On Map
                </a>
              </div>
            </div>
            <div className="card search bg-white mb-6 border-0 rounded-0 px-6">
              <div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
                <h5 className="card-title mb-0">Search</h5>
              </div>
              <div className="card-body px-0 pb-42">
                <div className="form-search form-search-style-03">
                  <div className="form-group">
                    <div className="input-group d-flex align-items-center">
                      <label
                        className="input-group-prepend text-dark font-weight-semibold"
                      >
                        What
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="what"
                        placeholder="Any keywords..."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group d-flex align-items-center">
                      <label
                        className="input-group-prepend text-dark font-weight-semibold"
                      >
                        Where
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="where"
                        placeholder="City, postcode..."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-icon-left font-size-md"
                  >
                    <i className="fal fa-search"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="card widget-filter bg-white mb-6 border-0 rounded-0 px-6">
              <div className="card-header bg-transparent border-0 pt-4 pb-0 px-0">
                <h5 className="card-title mb-0">Filter</h5>
              </div>
              <div className="card-body px-0">
                <div className="form-filter">
                  <form>
                    <div className="form-group category">
                      <div className="select-custom">
                        <select className="form-control">
                          <option value="0">Categories</option>
                          <option value="1">New York</option>
                          <option value="1">LA</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group price-range">
                      <label className="form-label">Price Range</label>
                      <div
                        id="price"
                        data-slider="true"
                        data-slider-options='{"min":0,"max":4000,"values":[0,2000]}'
                      ></div>
                      <div className="description">
                        From
                        <input
                          type="text"
                          className="amount border-0"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                        />
                        <span className="input-group-append">
                          <i className="fal fa-clock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                        />
                        <span className="input-group-append">
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                        />
                        <span className="input-group-append">
                          <i className="fal fa-comment"></i>
                        </span>
                      </div>
                    </div>
                    <div className="form-group filter-tags">
                      <label className="form-label">Filter by tags</label>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="street-foody"
                        />
                        <label
                          className="custom-control-label"
                        >
                          Street Foody
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="luxury"
                        />
                        <label className="custom-control-label" >
                          Luxury
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="chinese"
                        />
                        <label className="custom-control-label" >
                          Chinese
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="fast-food"
                        />
                        <label className="custom-control-label" >
                          Fast Food
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="drinking"
                        />
                        <label className="custom-control-label" >
                          Drinking
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="coffee"
                        />
                        <label className="custom-control-label" >
                          Coffee
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="italian"
                        />
                        <label className="custom-control-label" >
                          Italian
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="beer-club"
                        />
                        <label className="custom-control-label" >
                          Beer Club
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="vegetarian"
                        />
                        <label
                          className="custom-control-label"
                        >
                          Vegetarian
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox lh-19">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          id="hotpots"
                        />
                        <label className="custom-control-label" >
                          Hotpots
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="campaign">
              <img src="images/other/campaign.jpg" alt="Campaign" />
            </div>
          </div>
          <div className="page-content col-12 col-lg-8 order-0 order-lg-1 mb-8 mb-lg-0">
            <div className="explore-filter d-lg-flex align-items-center d-block">
              <div className="text-dark font-weight-semibold font-size-md mb-4 mb-lg-0">
                56 Results found
              </div>
              <div className="form-filter d-flex align-items-center ml-auto">
                <div className="form-group row no-gutters align-items-center">
                  <label
                    className="col-sm-3 text-dark font-size-md font-weight-semibold mb-0"
                  >
                    Sort by
                  </label>
                  <div className="select-custom col-sm-9">
                    <select id="sort-by" className="form-control">
                      <option value="0">Latest</option>
                      <option value="1">New York</option>
                      <option value="1">LA</option>
                    </select>
                  </div>
                </div>
                <div className="format-listing ml-auto">
                  <a href="#" className="active">
                    <i className="fas fa-th"></i>
                  </a>
                  <a href="explore-sidebar-list.html">
                    <i className="fal fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row equal-height">
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/popular-place-2.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-popular-place-2.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick view"
                          data-gtf-mfp="true"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Fruit Cake - Halsey St{" "}
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-success mr-1 d-inline-block">
                          4.8
                        </span>
                        <span className="number">2 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $4.0
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>
                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="assets/images/listing/testimonial-1.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        They specialize in makgeolli at this Korean-style pub in
                        Seorae Village. And they use...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        92 Halsey St, Brooklyn, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/popular-place-3.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-popular-place-3.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick view"
                          data-gtf-mfp="true"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        EBI Coffe Vintage - Hobbits Ave St
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-success d-inline-block mr-1">
                          4.7
                        </span>
                        <span className="number">6 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $2.50
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>
                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="assets/images/listing/testimonial-5.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        After a yoga className changed her life, Maz became
                        vegan, launched...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        275 Hobbits Ave St, Queen, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/popular-place-5.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-popular-place-5.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-gtf-mfp="true"
                          title="Quick view"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Meet Grilled - Lower Rd St
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-success d-inline-block mr-1">
                          4.8
                        </span>
                        <span className="number">2 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $12.50
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-danger">Close now!</span>
                      </li>
                    </ul>

                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="assets/images/listing/testimonial-3.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        Established in 1895, these style merchants have set the
                        standard in Sydney suiting for generations...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        212 Lower Rd St, Linden, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/popular-place-6.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-popular-place-6.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quickview"
                          data-gtf-mfp="true"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Water Melon Pudding - 55 Orchar..
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-success d-inline-block mr-1">
                          4.9
                        </span>
                        <span className="number">6 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $3.20
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>
                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="assets/images/listing/testimonial-5.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        Overlooking Bloomsbury's Russell Square and a 2 minutes'
                        walk from the tube station of the same name...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        55 Orchard St, Jeersy City, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/popular-place-1.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-popular-place-1.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick view"
                          data-gtf-mfp="true"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Japan Rice Mixed Seafood
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-success mr-1 d-inline-block">
                          5.0
                        </span>
                        <span className="number">4 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $9.0
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>
                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="images/listing/testimonial-1.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        Overlooking Bloomsbury’s Russell Square and a 2 minutes’
                        walk from the tube station of the same name...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        534 Salem Rd St, Newark, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/popular-place-4.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-popular-place-4.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-gtf-mfp="true"
                          data-placement="top"
                          title="Quick view"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Strawberry Cocktail - Main St
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-warning d-inline-block mr-1">
                          4.4
                        </span>
                        <span className="number">4 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $5.00
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>

                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="assets/images/listing/testimonial-2.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        Most items can be packed securely in these boxes, which
                        are available in several sizes...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        306 Main St, Queen, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/top-place-1.jpg"
                        alt="store 1"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="assets/images/shop/full-top-place-1.jpg"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quickview"
                          data-gtf-mfp="true"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Thai’s Taste Restaurant
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-success mr-1 d-inline-block">
                          5.0
                        </span>
                        <span className="number">4 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $9.0
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>
                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="images/listing/testimonial-1.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        Overlooking Bloomsbury’s Russell Square and a 2 minutes’
                        walk from the tube station of the same name...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        534 Salem Rd St, Newark, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-6">
                <div className="store card border-0 rounded-0">
                  <div className="position-relative store-image">
                    <a href="listing-details-full-image.html">
                      <img
                        src="assets/images/shop/top-place-2.jpg"
                        alt="store 2"
                        className="card-img-top rounded-0"
                      />
                    </a>
                    <div className="image-content position-absolute d-flex align-items-center">
                      <div className="content-right ml-auto d-flex">
                        <a
                          href="images/shop/full-top-place-2.jpg"
                          data-gtf-mfp="true"
                          className="item viewing"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick view"
                        >
                          {/* <svg className="icon icon-expand">
                                                        <use xlink:href="#icon-expand"></use>
                                                    </svg> */}
                        </a>
                        <a
                          href="#"
                          className="item marking"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Bookmark"
                        >
                          <i className="fal fa-bookmark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-4">
                    <a
                      href="listing-details-full-image.html"
                      className="card-title h5 text-dark d-inline-block mb-2"
                    >
                      <span className="letter-spacing-25">
                        Pepperoni’s Pizza Restaurant
                      </span>
                    </a>
                    <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                      <li className="list-inline-item">
                        <span className="badge badge-warning d-inline-block mr-1">
                          4.4
                        </span>
                        <span className="number">4 rating</span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="mr-1">From</span>
                        <span className="text-danger font-weight-semibold">
                          $5.00
                        </span>
                      </li>
                      <li className="list-inline-item separate"></li>
                      <li className="list-inline-item">
                        <span className="text-green">Open now!</span>
                      </li>
                    </ul>

                    <div className="media">
                      <a href="#" className="d-inline-block mr-3">
                        <img
                          src="assets/images/listing/testimonial-2.png"
                          alt="testimonial"
                          className="rounded-circle"
                        />
                      </a>
                      <div className="media-body lh-14 font-size-sm">
                        Most items can be packed securely in these boxes, which
                        are available in several sizes...
                      </div>
                    </div>
                  </div>
                  <div className="card-footer rounded-0 border-top-0 pb-3 pt-0 bg-transparent">
                    <div className="border-top pt-3">
                      <span className="d-inline-block mr-1">
                        <i className="fal fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="#"
                        className="text-secondary text-decoration-none address"
                      >
                        306 Main St, Queen, NY
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination mt-7">
              <a
                href="#"
                className="btn btn-lg btn-dark-red btn-block font-size-h5 lh-18"
              >
                More Results...48/56
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-view pt-9 bg-white pb-10">
        <div className="container">
          <div className="mb-6">
            <h5 className="mb-0">Recently Viewed</h5>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="store media align-items-stretch bg-white">
                <div className="store-image position-relative">
                  <a href="listing-details-full-image.html">
                    <img
                      src="assets/images/shop/recent-view-1.jpg"
                      alt="Recent view 1"
                    />
                  </a>
                  <div className="image-content position-absolute d-flex align-items-center">
                    <div className="content-right ml-auto d-flex">
                      <a
                        href="assets/images/shop/full-top-place-3.jpg"
                        className="item viewing"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quickview"
                        data-gtf-mfp="true"
                      >
                        {/* <svg className="icon icon-expand">
                                                    <use xlink:href="#icon-expand"></use>
                                                </svg> */}
                      </a>
                      <a
                        href="#"
                        className="item marking"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="fal fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="media-body pl-0 pl-sm-3 pt-4 pt-sm-0">
                  <a
                    href="listing-details-full-image.html"
                    className="font-size-md font-weight-semibold text-dark d-inline-block mb-2 lh-11"
                  >
                    <span className="letter-spacing-25">
                      Canabo View Street, Main St
                    </span>{" "}
                  </a>
                  <ul className="list-inline store-meta mb-2 lh-1 font-size-sm d-flex align-items-center flex-wrap">
                    <li className="list-inline-item">
                      <span className="badge badge-warning d-inline-block mr-1">
                        4.3
                      </span>
                      <span className="number">6 rating</span>
                    </li>
                    <li className="list-inline-item separate"></li>
                    <li className="list-inline-item">
                      <span className="mr-1">From</span>
                      <span className="text-danger font-weight-semibold">
                        $8.00
                      </span>
                    </li>
                  </ul>
                  <div>
                    <span className="d-inline-block mr-1">
                      <i className="fal fa-map-marker-alt"></i>
                    </span>
                    <a
                      href="#"
                      className="text-secondary text-decoration-none address"
                    >
                      77 Main St, Queen, NY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="store media align-items-stretch bg-white">
                <div className="store-image position-relative">
                  <a href="listing-details-full-image.html">
                    <img
                      src="assets/images/shop/recent-view-2.jpg"
                      alt="Recent view 1"
                    />
                  </a>
                  <div className="image-content position-absolute d-flex align-items-center">
                    <div className="content-right ml-auto d-flex">
                      <a
                        href="assets/images/shop/full-top-place-4.jpg"
                        className="item viewing"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quickview"
                        data-gtf-mfp="true"
                      >
                        {/* <svg className="icon icon-expand">
                                                    <use xlink:href="#icon-expand"></use>
                                                </svg> */}
                      </a>
                      <a
                        href="#"
                        className="item marking"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="fal fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="media-body pl-0 pl-sm-3 pt-4 pt-sm-0">
                  <a
                    href="listing-details-full-image.html"
                    className="font-size-md font-weight-semibold text-dark d-inline-block mb-2 lh-11"
                  >
                    <span className="letter-spacing-25">
                      Japan's Sushi - 10th Ave St
                    </span>{" "}
                  </a>
                  <ul className="list-inline store-meta mb-2 lh-1 font-size-sm d-flex align-items-center flex-wrap">
                    <li className="list-inline-item">
                      <span className="badge badge-success d-inline-block mr-1">
                        5.0
                      </span>
                      <span className="number">7 rating</span>
                    </li>
                    <li className="list-inline-item separate"></li>
                    <li className="list-inline-item">
                      <span className="mr-1">From</span>
                      <span className="text-danger font-weight-semibold">
                        $12.00
                      </span>
                    </li>
                  </ul>
                  <div>
                    <span className="d-inline-block mr-1">
                      <i className="fal fa-map-marker-alt"></i>
                    </span>
                    <a
                      href="#"
                      className="text-secondary text-decoration-none address"
                    >
                      99 10th Ave St, Mahattan, NY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="store media align-items-stretch bg-white">
                <div className="store-image position-relative">
                  <a href="listing-details-full-image.html">
                    <img
                      src="assets/images/shop/recent-view-3.jpg"
                      alt="Recent view 1"
                    />
                  </a>
                  <div className="image-content position-absolute d-flex align-items-center">
                    <div className="content-right ml-auto d-flex">
                      <a
                        href="images/shop/full-top-place-5.jpg"
                        className="item viewing"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quickview"
                        data-gtf-mfp="true"
                      >
                        {/* <svg className="icon icon-expand">
                            <use xlink:href="#icon-expand"></use>
                          </svg> */}
                      </a>
                      <a
                        href="#"
                        className="item marking"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="fal fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="media-body pl-0 pl-sm-3 pt-4 pt-sm-0">
                  <a
                    href="listing-details-full-image.html"
                    className="font-size-md font-weight-semibold text-dark d-inline-block mb-2 lh-11"
                  >
                    <span className="letter-spacing-25">
                      Korean Bingsu Shop
                    </span>
                  </a>
                  <ul className="list-inline store-meta mb-2 lh-1 font-size-sm d-flex align-items-center flex-wrap">
                    <li className="list-inline-item">
                      <span className="badge badge-success d-inline-block mr-1">
                        5.0
                      </span>
                      <span className="number">7 rating</span>
                    </li>
                    <li className="list-inline-item separate"></li>
                    <li className="list-inline-item">
                      <span className="mr-1">From</span>
                      <span className="text-danger font-weight-semibold">
                        $12.00
                      </span>
                    </li>
                  </ul>
                  <div>
                    <span className="d-inline-block mr-1">
                      <i className="fal fa-map-marker-alt"></i>
                    </span>
                    <a
                      href="#"
                      className="text-secondary text-decoration-none address"
                    >
                      534 Salem Rd St, Newark, NY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchListing;
