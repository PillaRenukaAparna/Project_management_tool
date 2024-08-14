import { Link } from "react-router-dom";
import logo from "../images/task_logo.png";
import RoleNav from "./RoleNav";

const headerStyles = {
  navbar: {
    backgroundColor: '#f8f9fa', // Light background color
    padding: '0.5rem 1rem', // Padding around the navbar
  },
  navbarBrand: {
    color: '#007bff', // Primary text color
    fontSize: '1.25rem', // Font size for brand text
    display: 'flex',
    alignItems: 'center',
  },
  navbarBrandText: {
    marginLeft: '0.5rem',
    fontWeight: 'normal', // Ensure text is not bold
  },
  navItem: {
    margin: '0 0.5rem', // Space between items
  },
  navLink: {
    color: '#007bff', // Primary text color
    textDecoration: 'none',
    padding: '0.5rem 1rem', // Padding around the link
    borderRadius: '0.25rem', // Rounded corners
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontWeight: 'normal', // Ensure text is not bold
  },
  navLinkHover: {
    color: '#ffffff', // Text color on hover
    backgroundColor: '#0056b3', // Background color on hover
  },
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={headerStyles.navbar}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={headerStyles.navbarBrand}>
          <img
            src={logo}
            width="65"
            height="auto"
            className="d-inline-block align-top"
            alt="Project Management Tool Logo"
          />
          <span style={headerStyles.navbarBrandText}>Project Management Tool</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={headerStyles.navItem}>
              <Link
                to="/about"
                className="nav-link"
                aria-current="page"
                style={headerStyles.navLink}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerStyles.navLinkHover.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item" style={headerStyles.navItem}>
              <Link
                to="/contact"
                className="nav-link"
                aria-current="page"
                style={headerStyles.navLink}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerStyles.navLinkHover.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <RoleNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
