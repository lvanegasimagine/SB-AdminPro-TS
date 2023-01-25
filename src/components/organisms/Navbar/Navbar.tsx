import React, { useState, useContext, useEffect } from "react";
import {
  FiAlignLeft,
  FiBarChart,
  FiBell,
  FiLogOut,
  FiMail,
  FiSearch,
  FiSettings,
  FiUserPlus,
} from "react-icons/fi";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "@/context";
import { UserContextProvider } from "@/types";
import { useAuth } from "@/hooks/useAuth";
import { logOut, upload } from "@/services";
import { useUserContext } from "@/provider";
import moment from "moment";
import 'moment-timezone';
// moment.locale('es')
export interface NavbarInterface {
  // setReloadApp: React.Dispatch<React.SetStateAction<undefined>>
}

const Navbar: React.FC<NavbarInterface> = (): JSX.Element => {

  const currentUser: any = useAuth();
  const { user, setUser }: any = useUserContext();
  const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')
  const [menu, setMenu] = useState<string>("sidebarToggle");
  const [photo, setPhoto] = useState('null');
  const [notifications, setNotifications] = useState<boolean>(false);
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    (async () => {
      if (currentUser?.photoURL) {
        await setPhotoURL(currentUser.photoURL);
      }
    })();
  }, [currentUser])

  useEffect(() => {
    (async () => {
      if (currentUser?.emailVerified === false) {
        const dateCreate = moment(currentUser?.metadata?.creationTime);
        setDate(dateCreate.format('dddd Do MMMM YYYY'))
        setNotifications(true);
      }
    })();
  }, [currentUser])

  console.log(date);


  function handleChange(e: any) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading).then(() => {
      setLoading(false);
      setUser(!user);
    })
  }

  const handleLogout = async () => {
    await logOut()
  };

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
        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
          <a type="button" className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true">
            <FiBell />
            {notifications &&
              <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                1+
                <span className="visually-hidden">unread messages</span>
              </span>
            }
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownAlerts"
          >
            {notifications &&
              <>
                <h6 className="dropdown-header dropdown-notifications-header">
                  <FiBell color="#fff" className="me-2" />
                  Alerts Center
                </h6>

                <a className="dropdown-item dropdown-notifications-item" href="#!">
                  <div className="dropdown-notifications-item-icon bg-warning">
                    <FiMail />
                  </div>
                  <div className="dropdown-notifications-item-content">
                    <div className="dropdown-notifications-item-content-details">
                      {date}
                      {/* Confirmar Correo Electronico */}
                    </div>
                    <div className="dropdown-notifications-item-content-text">
                      Verifica Tu Email.
                    </div>
                  </div>
                </a>
              </>
            }
            {/* <a className="dropdown-item dropdown-notifications-item" href="#!">
              <div className="dropdown-notifications-item-icon bg-info">
                <FiBarChart />
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
                <FiUserPlus />
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
            </a> */}
            {/* <a
              className="dropdown-item dropdown-notifications-footer"
              href="#!"
            >
              View All Alerts
            </a> */}
          </div>
        </li>
        <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
          <a
            className="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownMessages"
            // href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FiMail />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownMessages"
          >
            <h6 className="dropdown-header dropdown-notifications-header">
              <FiMail className="me-2" />
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
            // href="javascript:void(0);"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="img-fluid"
              src={photoURL}
            />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownUserImage"
          >
            <h6 className="dropdown-header d-flex align-items-center">
              <img
                className="dropdown-user-img"
                src={photoURL}
              />
              <div className="dropdown-user-details">
                <div className="dropdown-user-details-name">{user ? user.displayName : 'Valerie Luna'}</div>
                <div className="dropdown-user-details-email">{user ? user.email : 'vluna@aol.com'}</div>
                <input type="file" onChange={handleChange} />
                <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
              </div>
            </h6>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="account">
              <div className="dropdown-item-icon">
                <FiSettings />
              </div>
              Account
            </NavLink>
            <button className="dropdown-item" onClick={handleLogout}>
              <div className="dropdown-item-icon">
                <FiLogOut />
              </div>
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
