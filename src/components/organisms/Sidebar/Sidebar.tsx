import React from "react";
import { FiActivity, FiBell } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/Sidebar.css";

export interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
              <div className="nav accordion" id="accordionSidenav">
                <div className="sidenav-menu-heading d-sm-none">Account</div>
                <a className="nav-link d-sm-none" href="#!">
                  <div className="nav-link-icon">
                    <FiBell />
                  </div>
                  Alerts
                  <span className="badge bg-warning-soft text-warning ms-auto">
                    4 New!
                  </span>
                </a>
                <a className="nav-link d-sm-none" href="#!">
                  <div className="nav-link-icon">
                    <i data-feather="mail"></i>
                  </div>
                  Messages
                  <span className="badge bg-success-soft text-success ms-auto">
                    2 New!
                  </span>
                </a>
                <div className="sidenav-menu-heading">Core</div>
                <a
                  className="nav-link collapsed"
                  // href="javascript:void(0);"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseDashboards"
                  aria-expanded="false"
                  aria-controls="collapseDashboards"
                >
                  <div className="nav-link-icon">
                    <FiActivity />
                  </div>
                  Dashboards
                  <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseDashboards"
                  data-bs-parent="#accordionSidenav"
                >
                  <nav
                    className="sidenav-menu-nested nav accordion"
                    id="accordionSidenavPages"
                  >
                    <NavLink className="nav-link" to="dashboard-2">
                      Pantalla 2
                      <span className="badge bg-primary-soft text-primary ms-auto">
                        Updated
                      </span>
                    </NavLink>
                    <NavLink className="nav-link" to="dashboard-3">
                      Dashboard 3
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
            <div className="sidenav-footer">
              <div className="sidenav-footer-content">
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">Valerie Luna</div>
              </div>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
