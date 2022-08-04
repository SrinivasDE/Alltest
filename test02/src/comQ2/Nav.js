import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Responsive
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link " aria-aria-current="page">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link " aria-aria-current="page">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link " aria-aria-current="page">
                Contact
              </a>
            </li>
          </ul>
          <button type="submit" className="btn btn-outline-success">
            {" "}
            login
          </button>
          <button type="submit" className="btn btn-outline-success">
            {" "}
            register
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="row col-12">
          <div className="container">
            <h1>Bootstrap Make it easy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
