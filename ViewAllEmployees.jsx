import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const ViewAllEmployees = () => {
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    const getAllEmployee = async () => {
      const allEmployee = await retrieveAllEmployees();
      if (allEmployee) {
        setAllEmployees(allEmployee.users);
      }
    };

    getAllEmployee();
  }, []);

  const retrieveAllEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user/employee/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      toast.error("Failed to retrieve employee data", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  const deleteEmployee = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/delete?userId=${userId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (res.success) {
        toast.success(res.responseMessage, {
          position: "top-center",
          autoClose: 1000,
        });
        setAllEmployees((prev) => prev.filter(employee => employee.id !== userId));
      } else {
        toast.error("Failed to delete employee", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Failed to delete employee", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <h2>All Employees</h2>
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>{employee.contact}</td>
                  <td>{`${employee.street} ${employee.city} ${employee.pincode}`}</td>
                  <td>
                    <RemoveButton onClick={() => deleteEmployee(employee.id)}>
                      Remove
                    </RemoveButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const CardHeader = styled.div`
  background-color: #007bff;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
  border-radius: 10px 10px 0 0;
  
  h2 {
    margin: 0;
    font-size: 2rem;
  }
`;

const CardBody = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  
  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
  }
  
  thead {
    background-color: #f8f9fa;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #c82333;
  }
`;

export default ViewAllEmployees;
