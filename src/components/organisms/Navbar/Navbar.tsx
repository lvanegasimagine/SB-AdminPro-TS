import React, { useState } from "react";
import {
  FiActivity,
  FiAlignLeft,
  FiBarChart,
  FiBell,
  FiBook,
  FiCode,
  FiFileText,
  FiLogOut,
  FiMail,
  FiSearch,
  FiSettings,
  FiUserPlus,
  FiChevronRight
} from "react-icons/fi";
import "./styles/Navbar.css";
import { NavLink } from 'react-router-dom';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = (): JSX.Element => {
  const [menu, setMenu] = useState<string>("sidebarToggle");
  return (
    <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white">
      <button
        className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
        id={menu}
        onClick={() => {
          document.body.classList.toggle("sidenav-toggled");
          localStorage.setItem(
            "sb|sidebar-toggle",
            document.body.classList.contains("sidenav-toggled").toString()
          );
        }}
      >
        <FiAlignLeft />
      </button>

      <NavLink className="navbar-brand pe-3 ps-4 ps-lg-2" to="/">
        SB Admin Pro
      </NavLink>
      <form className="form-inline me-auto d-none d-lg-block me-3">
        <div className="input-group input-group-joined input-group-solid">
          <input
            className="form-control pe-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-text">
            <FiSearch />
          </div>
        </div>
      </form>
      <ul className="navbar-nav align-items-center ms-auto">
        <li className="nav-item dropdown no-caret d-none d-md-block me-3">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdownDocs"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="fw-500">Documentation</div>
            <FiChevronRight/>
          </a>
          <div
            className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up"
            aria-labelledby="navbarDropdownDocs"
          >
            <a
              className="dropdown-item py-3"
              href="https://docs.startbootstrap.com/sb-admin-pro"
              target="_blank"
            >
              <div className="icon-stack bg-primary-soft text-primary me-4">
                <FiBook color="#0061f2" />
              </div>
              <div>
                <div className="small text-gray-500">Documentation</div>
                Usage instructions and reference
              </div>
            </a>
            <div className="dropdown-divider m-0"></div>
            <a
              className="dropdown-item py-3"
              href="https://docs.startbootstrap.com/sb-admin-pro/components"
              target="_blank"
            >
              <div className="icon-stack bg-primary-soft text-primary me-4">
                <FiCode color="#0061f2" />
              </div>
              <div>
                <div className="small text-gray-500">Components</div>
                Code snippets and reference
              </div>
            </a>
            <div className="dropdown-divider m-0"></div>
            <a
              className="dropdown-item py-3"
              href="https://docs.startbootstrap.com/sb-admin-pro/changelog"
              target="_blank"
            >
              <div className="icon-stack bg-primary-soft text-primary me-4">
                <FiFileText color="#0061f2" />
              </div>
              <div>
                <div className="small text-gray-500">Changelog</div>
                Updates and changes
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-caret me-3 d-lg-none">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="searchDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FiSearch />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline me-auto w-100">
              <div className="input-group input-group-joined input-group-solid">
                <input
                  className="form-control pe-0"
                  type="text"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-text">
                  <FiSearch />
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownAlerts"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FiBell/>
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownAlerts"
          >
            <h6 className="dropdown-header dropdown-notifications-header">
              <FiBell color="#fff" className="me-2"/>
              Alerts Center
            </h6>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <div className="dropdown-notifications-item-icon bg-warning">
                <FiActivity />
              </div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">
                  December 29, 2021
                </div>
                <div className="dropdown-notifications-item-content-text">
                  This is an alert message. It's nothing serious, but it
                  requires your attention.
                </div>
              </div>
            </a>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <div className="dropdown-notifications-item-icon bg-info">
                <FiBarChart/>
              </div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">
                  December 22, 2021
                </div>
                <div className="dropdown-notifications-item-content-text">
                  A new monthly report is ready. Click here to view!
                </div>
              </div>
            </a>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <div className="dropdown-notifications-item-icon bg-danger">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">
                  December 8, 2021
                </div>
                <div className="dropdown-notifications-item-content-text">
                  Critical system failure, systems shutting down.
                </div>
              </div>
            </a>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <div className="dropdown-notifications-item-icon bg-success">
                <FiUserPlus/>
              </div>
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-details">
                  December 2, 2021
                </div>
                <div className="dropdown-notifications-item-content-text">
                  New user request. Woody has requested access to the
                  organization.
                </div>
              </div>
            </a>
            <a
              className="dropdown-item dropdown-notifications-footer"
              href="#!"
            >
              View All Alerts
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownMessages"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FiMail/>
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownMessages"
          >
            <h6 className="dropdown-header dropdown-notifications-header">
              <FiMail className="me-2"/>
              Message Center
            </h6>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <img
                className="dropdown-notifications-item-img"
                src="assets/img/illustrations/profiles/profile-2.png"
              />
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="dropdown-notifications-item-content-details">
                  Thomas Wilcox · 58m
                </div>
              </div>
            </a>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <img
                className="dropdown-notifications-item-img"
                src="assets/img/illustrations/profiles/profile-3.png"
              />
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="dropdown-notifications-item-content-details">
                  Emily Fowler · 2d
                </div>
              </div>
            </a>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <img
                className="dropdown-notifications-item-img"
                src="assets/img/illustrations/profiles/profile-4.png"
              />
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="dropdown-notifications-item-content-details">
                  Marshall Rosencrantz · 3d
                </div>
              </div>
            </a>
            <a className="dropdown-item dropdown-notifications-item" href="#!">
              <img
                className="dropdown-notifications-item-img"
                src="assets/img/illustrations/profiles/profile-5.png"
              />
              <div className="dropdown-notifications-item-content">
                <div className="dropdown-notifications-item-content-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="dropdown-notifications-item-content-details">
                  Colby Newton · 3d
                </div>
              </div>
            </a>
            <a
              className="dropdown-item dropdown-notifications-footer"
              href="#!"
            >
              Read All Messages
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownUserImage"
            href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="img-fluid"
              src="assets/img/illustrations/profiles/profile-1.png"
            />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownUserImage"
          >
            <h6 className="dropdown-header d-flex align-items-center">
              <img
                className="dropdown-user-img"
                src="assets/img/illustrations/profiles/profile-1.png"
              />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name">Valerie Luna</div>
                <div className="dropdown-user-details-email">vluna@aol.com</div>
              </div>
            </h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon">
                <FiSettings/>
              </div>
              Account
            </a>
            <a className="dropdown-item" href="#!">
              <div className="dropdown-item-icon">
                <FiLogOut/>
              </div>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
