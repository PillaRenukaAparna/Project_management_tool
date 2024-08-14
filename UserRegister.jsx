import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
  });

  const navigate = useNavigate();

  if (document.URL.indexOf("admin") !== -1) {
    user.role = "admin";
  } else if (document.URL.indexOf("manager") !== -1) {
    user.role = "manager";
  } else if (document.URL.indexOf("employee") !== -1) {
    user.role = "employee";
  }

  console.log("ROLE FETCHED: " + user.role);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [genders, setGenders] = useState([]);

  const retrieveAllGenders = async () => {
    const response = await axios.get("http://localhost:8080/api/user/gender");
    return response.data;
  };

  useEffect(() => {
    const getAllGenders = async () => {
      const allGenders = await retrieveAllGenders();
      if (allGenders) {
        setGenders(allGenders.genders);
      }
    };

    getAllGenders();
  }, []);

  const saveUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/user/" + user.role + "/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        if (res.success) {
          toast.success(res.responseMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate("/user/login");
          }, 1000); // Redirect after 1 second
        } else {
          toast.error("Registration failed, please try again.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        }
      });
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "40rem", borderRadius: "20px" }}>
        <div className="card-header bg-primary text-white text-center" style={{ borderRadius: "15px 15px 0 0" }}>
          <h4>Register as {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h4>
        </div>
        <div className="card-body">
          <form className="row g-3" onSubmit={saveUser}>
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={handleUserInput}
                value={user.firstName}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={handleUserInput}
                value={user.lastName}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="emailId" className="form-label">Email Id</label>
              <input
                type="email"
                className="form-control"
                id="emailId"
                name="emailId"
                onChange={handleUserInput}
                value={user.emailId}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleUserInput}
                value={user.password}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="sex" className="form-label">Gender</label>
              <select
                onChange={handleUserInput}
                className="form-control"
                name="sex"
                required
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>{gender}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="form-label">Contact No</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                name="contact"
                onChange={handleUserInput}
                value={user.contact}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                onChange={handleUserInput}
                value={user.age}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street" className="form-label">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                name="street"
                onChange={handleUserInput}
                value={user.street}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onChange={handleUserInput}
                value={user.city}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                name="pincode"
                onChange={handleUserInput}
                value={user.pincode}
                required
              />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary btn-block w-100" style={{ padding: "0.75rem", borderRadius: "10px" }}>
                Register
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
