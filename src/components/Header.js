import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="dark-bg sticky-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand" >
                  Resto App
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-menu" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Explore
                        <span className="icon-arrow-down" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdownMenuLink1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Listing
                        <span className="icon-arrow-down" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdownMenuLink2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                        <span className="icon-arrow-down" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <Link
                        to="ListingDetails"
                        className="btn btn-outline-light top-btn"
                      >
                        <span className="ti-plus" /> Add Listing
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
