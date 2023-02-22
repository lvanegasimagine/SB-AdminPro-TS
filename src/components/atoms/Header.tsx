import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
}): JSX.Element => {
  let location = useLocation();
  console.log("🚀 ~ file: Header.tsx:12 ~ location:", location)
  const [route, setRoute] = useState<string>("");

  useEffect(() => {
    const arr = location.pathname.split("/").slice(-1);
    setRoute(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  }, [location]);

  return (
    <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
      <div className="container-fluid px-4">
        <div className="page-header-content">
          <div className="row align-items-center justify-content-between pt-3">
            <div className="col-auto mb-3">
              <h1 className="page-header-title">
                <div className="page-header-icon">
                  <i className={icon}></i>
                </div>
                {title} - {route}
              </h1>
            </div>
            <div className="col-12 col-xl-auto mb-3">
              {/* <button className="btn btn-sm btn-light text-primary">
                <i
                  className="bi-person"
                  style={{ fontSize: "1rem", marginRight: "0.2rem" }}
                ></i>
                Manage Users
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
