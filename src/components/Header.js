import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header className="App-header">
      <nav className="nav-header">
        <span className="nav-logo">
          <Link to="/">
            {" "}
            <img src="../images/ghana-logo.png" />
          </Link>
        </span>
        <span className="nav-link-container">
          <Link className="nav-link" to="/about/">
            About
          </Link>
          |
          <Link className="nav-link" to="/music-services/">
            Music Services
          </Link>
          |
          <Link className="nav-link" to="/contact/">
            Contact
          </Link>
          |
          <Link className="nav-link" to="/get-started/">
            Get Started
          </Link>
        </span>
      </nav>
      {children}
    </header>
  );
}

export default Header;
