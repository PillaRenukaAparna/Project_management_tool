import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const UpdateProjectStatus = () => {
  const [updateStatusRequest, setUpdateStatusRequest] = useState({
    projectId: "",
    projectStatus: "",
  });

  const [allStatus, setAllStatus] = useState([]);
  const location = useLocation();
  const project = location.state;

  updateStatusRequest.projectId = project.id;

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setUpdateStatusRequest({
      ...updateStatusRequest,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getAllStatus = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/project/allStatus");
        setAllStatus(data);
      } catch (error) {
        console.error("Error fetching statuses:", error);
        toast.error("Failed to load project statuses.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    };

    getAllStatus();
  }, []);

  const updateProjectStatus = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/project/update", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStatusRequest),
      });

      const res = await response.json();

      if (res.success) {
        toast.success(res.responseMessage, {
          position: "top-center",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/user/employee/project/all");
        }, 1000);
      } else {
        toast.error(res.responseMessage || "Failed to update status.", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("It seems server is down.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="card-title mb-0">Update Project Status</h5>
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

          <form onSubmit={updateProjectStatus}>
            <div className="mb-3">
              <label htmlFor="projectStatus" className="form-label">
                Status
              </label>
              <select
                name="projectStatus"
                id="projectStatus"
                onChange={handleUserInput}
                className="form-select"
                required
              >
                <option value="">Select Status</option>
                {allStatus.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Update Status
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProjectStatus;
