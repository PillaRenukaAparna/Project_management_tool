import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const AssignProjectToEmployee = () => {
  const [assignRequest, setAssignRequest] = useState({
    employeeId: "",
    projectId: "",
  });

  const [allEmployees, setAllEmployees] = useState([]);
  const location = useLocation();
  const project = location.state;

  assignRequest.projectId = project.id;

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setAssignRequest({
      ...assignRequest,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/user/employee/all");
        setAllEmployees(data.users);
      } catch (error) {
        console.error("Error fetching employees:", error);
        toast.error("Failed to load employees.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    };

    getAllEmployees();
  }, []);

  const assignProject = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/project/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignRequest),
    })
      .then((result) => result.json())
      .then((res) => {
        if (res.success) {
          toast.success(res.responseMessage, {
            position: "top-center",
            autoClose: 2000,
          });

          setTimeout(() => {
            navigate("/user/manager/project/all");
          }, 1000); // Redirect after 1 second
        } else {
          toast.error(res.responseMessage || "Failed to assign project.", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        console.error("Error assigning project:", error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="card-title mb-0">Assign Project to Employee</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="projectName" className="form-label">
              Project Name
            </label>
            <input
              type="text"
              className="form-control"
              id="projectName"
              value={project.name}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="projectDescription" className="form-label">
              Project Description
            </label>
            <textarea
              className="form-control"
              id="projectDescription"
              rows="3"
              value={project.description}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="createdDate" className="form-label">
              Project Created Date
            </label>
            <input
              type="text"
              className="form-control"
              id="createdDate"
              value={project.createdDate}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="deadlineDate" className="form-label">
              Project Deadline Date
            </label>
            <input
              type="text"
              className="form-control"
              id="deadlineDate"
              value={project.deadlineDate}
              readOnly
            />
          </div>

          <form onSubmit={assignProject}>
            <div className="mb-3">
              <label htmlFor="employeeId" className="form-label">
                Assign Project to Employee
              </label>
              <select
                name="employeeId"
                onChange={handleUserInput}
                className="form-select"
                required
              >
                <option value="">Select Employee</option>
                {allEmployees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Assign Project
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AssignProjectToEmployee;
