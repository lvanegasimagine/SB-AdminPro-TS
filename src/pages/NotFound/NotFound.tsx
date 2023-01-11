import React from "react";
import { NavLink } from 'react-router-dom';
import "./styles/NotFound.css";
export interface NotFoundInterface {}

const NotFound: React.FC<NotFoundInterface> = () => {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div className="container-xl px-4">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <img
                    className="img-fluid p-4"
                    src="assets/img/illustrations/404-error-with-a-cute-animal.svg"
                    alt=""
                  />
                  <p className="lead">
                    This requested URL was not found on this server.
                  </p>
                  <NavLink className="text-arrow-icon" to="/">
                    <i className="ms-0 me-1" data-feather="arrow-left"></i>
                    Return to Dashboard
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutError_footer">
        <footer className="footer-admin mt-auto footer-light">
          <div className="container-xl px-4">
            <div className="row">
              <div className="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div className="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFound;
