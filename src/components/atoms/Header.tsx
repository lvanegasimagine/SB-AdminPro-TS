import { ReactNode, PropsWithChildren } from 'react'
import { FiGlobe, FiUser, FiUsers} from 'react-icons/fi'

const Header = ({children}: PropsWithChildren): JSX.Element => {
  return (
    <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
      <div className="container-fluid px-4">
        <div className="page-header-content">
          <div className="row align-items-center justify-content-between pt-3">
            <div className="col-auto mb-3">
              {children}
            </div>
            <div className="col-12 col-xl-auto mb-3">
              <a className="btn btn-sm btn-light text-primary">
                <FiUser className="me-1" />
                Manage Users
              </a>
              {/* <a className="btn btn-sm btn-light text-primary">
                <FiUsers className="me-1" />
                Manage Groups
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header