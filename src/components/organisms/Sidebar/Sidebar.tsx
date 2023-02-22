import { useUserContext } from "@/provider";
import React from "react";
import { FiActivity, FiAirplay } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/Sidebar.css";

interface EnumServiceItem {
  name: string;
  path: string;
}

export interface SidebarInterface {
  // header: string;
  // icon: JSX.Element;
  // title: string;
  // routes: EnumServiceItem[]
}

const arrayRouteSidebar = [
  {
    header: "core",
    icon: <FiActivity />,
    title: "Dashboards",
    routes: [
      { name: "Empleados", path: "empleado" },
      { name: "Cargo", path: "cargo" },
      { name: "Departamento", path: "departamento" },
      { name: "Pantalla 2", path: "dashboard-2" },
    ],
  },
  {
    header: "UI Toolkit",
    icon: <FiAirplay />,
    title: "Cuba",
    routes: [
      { name: "Empleados", path: "empleado" },
      { name: "Pantalla 2", path: "dashboard-2" },
    ],
  },
];

const Sidebar: React.FC<SidebarInterface> = () => {
  const { user }: any = useUserContext();

  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
              <div className="nav accordion" id="accordionSidenav">
                {arrayRouteSidebar.map((item, index) => (
                  <div key={index}>
                    <div className="sidenav-menu-heading">{item.header}</div>
                    <a
                      className="nav-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.title}`}
                      aria-expanded="false"
                      aria-controls={`collapse${item.title}`}
                    >
                      <div className="nav-link-icon">{item.icon}</div>
                      {item.title}
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id={`collapse${item.title}`}
                      data-bs-parent="#accordionSidenav"
                    >
                      <nav
                        className="sidenav-menu-nested nav accordion"
                        id="accordionSidenavPages"
                      >
                        {item.routes.map((rt, index) => (
                          <NavLink
                            className="nav-link"
                            to={rt.path}
                            key={index}
                          >
                            {rt.name}
                          </NavLink>
                        ))}
                        {/* <NavLink className="nav-link" to="dashboard-2">
                          Pantalla 2
                          <span className="badge bg-primary-soft text-primary ms-auto">
                            Updated
                          </span>
                        </NavLink>
                        <NavLink className="nav-link" to="empleado">
                          Empleados
                        </NavLink> */}
                      </nav>
                    </div>
                  </div>
                ))}
                {/* <div className="sidenav-menu-heading">Core</div>
                <a
                  className="nav-link collapsed"
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
                    <NavLink className="nav-link" to="empleado">
                      Empleados
                    </NavLink>
                  </nav>
                </div> */}
              </div>
            </div>
            <div className="sidenav-footer">
              <div className="sidenav-footer-content">
                <div className="sidenav-footer-subtitle">Logged in as:</div>
                <div className="sidenav-footer-title">{user?.displayName}</div>
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
