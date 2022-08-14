import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    XYZ.com
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="login"> LOGIN </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="signin">SIGNUP</a>
                        </li>
                    </ul>
                </div>
                </nav>

      <Outlet />
    </>
  )
};

export default NavBar;
