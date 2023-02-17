import React from "react";
import { Header } from "@/components/atoms";
import "./styles/LayoutThree.css";
export interface LayoutThreeInterface {}

const LayoutThree: React.FC<LayoutThreeInterface> = () => {
  return (
    <>
      <main>
        <Header icon=" bi-file-earmark-person-fill" title="Account Settings" />
        <div className="container-fluid px-4">
          <div className="card bg-gradient-primary-to-secondary mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3">
                  <div className="small text-white-50">Organización:</div>
                  <div className="h1 text-white">Corea y Asociados S.A</div>
                </div>
                <div className="text-white">20 Member(s)</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {/* <div className="small text-muted mb-2">Administrators:</div> */}
              <div className="row">
                <div className="col-lg-4 pb-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg">
                      <img
                        className="avatar-img img-fluid"
                        src="assets/img/illustrations/profiles/profile-1.png"
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fs-4 text-dark fw-500">Tiger Nixon</div>
                      <div className="small text-muted">Admin</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg">
                      <img
                        className="avatar-img img-fluid"
                        src="assets/img/illustrations/profiles/profile-2.png"
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fs-4 text-dark fw-500">
                        Garrett Winters
                      </div>
                      <div className="small text-muted">Admin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
    </>
  );
};

export default LayoutThree;
