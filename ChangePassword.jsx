import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
  const [user, setUser] = useState({});
  const [sessionUserName, setSessionUserName] = useState("");
  const [sessionJWTName, setSessionJWTName] = useState("");

  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const manager = JSON.parse(sessionStorage.getItem("active-manager"));
  const employee = JSON.parse(sessionStorage.getItem("active-employee"));

  const [loginRequest, setLoginRequest] = useState({
    userId: "",
    password: "",
  });

  useEffect(() => {
    if (admin) {
      setLoginRequest(prevState => ({ ...prevState, userId: admin.id }));
      setSessionJWTName("admin-jwtToken");
      setSessionUserName("active-admin");
      setUser(admin);
    } else if (manager) {
      setLoginRequest(prevState => ({ ...prevState, userId: manager.id }));
      setSessionJWTName("manager-jwtToken");
      setSessionUserName("active-manager");
      setUser(manager);
    } else if (employee) {
      setLoginRequest(prevState => ({ ...prevState, userId: employee.id }));
      setSessionJWTName("employee-jwtToken");
      setSessionUserName("active-employee");
      setUser(employee);
    }
  }, [admin, manager, employee]);

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setLoginRequest({
      ...loginRequest,
      [e.target.name]: e.target.value,
    });
  };

  const userChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/user/changePassword', loginRequest, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        toast.success(response.data.responseMessage, {
          position: "top-center",
          autoClose: 1000,
        });

        setTimeout(() => {
          sessionStorage.removeItem(sessionJWTName);
          sessionStorage.removeItem(sessionUserName);
          navigate("/user/login");
          window.location.reload(true);
        }, 3000);
      } else {
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000);
      }
    } catch (error) {
      toast.error("Error occurred", {
        position: "top-center",
        autoClose: 1000,
      });
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <h5>Change Password</h5>
        </CardHeader>
        <CardBody>
          <div className="mb-3">
            <Label>User Email Id</Label>
            <Input type="text" value={user.emailId} readOnly />
          </div>

          <div className="mb-3">
            <Label>User Contact No</Label>
            <Input type="text" value={user.contact} readOnly />
          </div>

          <form onSubmit={userChangePassword}>
            <div className="mb-3">
              <Label>Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleUserInput}
                value={loginRequest.password}
              />
            </div>

            <Button type="submit">Change Password</Button>
          </form>
          <ToastContainer />
        </CardBody>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const Card = styled.div`
  width: 100%;
  max-width: 25rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-color: #007bff;
  color: #ffffff;
  padding: 15px;
  text-align: center;
  
  h5 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333333;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default ChangePassword;
