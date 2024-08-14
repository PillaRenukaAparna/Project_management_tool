import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const headerStyles = {
  navbarNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
    marginRight: '3rem',
  },
  navItem: {
    margin: '0 0.5rem',
  },
  navLink: {
    color: '#007bff', // Primary text color
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontWeight: 'normal', // Ensure text is not bold
  },
  navLinkHover: {
    color: '#ffffff',
    backgroundColor: '#0056b3',
  },
};

const EmployeeHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-employee"));
  console.log(user);

  const employeeLogout = () => {
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-employee");
    sessionStorage.removeItem("expert-jwtToken");

    setTimeout(() => {
      navigate("/home");
      window.location.reload(true);
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5" style={headerStyles.navbarNav}>
      <li className="nav-item" style={headerStyles.navItem}>
        <Link
          to="/user/employee/project/all"
          className="nav-link"
          aria-current="page"
          style={headerStyles.navLink}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerStyles.navLinkHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
        >
          My Projects
        </Link>
      </li>

      <li className="nav-item" style={headerStyles.navItem}>
        <Link
          to="/user/change/password"
          className="nav-link"
          aria-current="page"
          style={headerStyles.navLink}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerStyles.navLinkHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
        >
          Change Password
        </Link>
      </li>

      <li className="nav-item" style={headerStyles.navItem}>
        <Link
          to="#"
          className="nav-link"
          aria-current="page"
          style={headerStyles.navLink}
          onClick={employeeLogout}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerStyles.navLinkHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
        >
          Logout
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default EmployeeHeader;
