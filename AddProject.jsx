import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
  const [addProjectRequest, setAddProjectRequest] = useState({
    name: "",
    description: "",
    requirement: "",
    deadlineDate: "",
  });

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setAddProjectRequest({
      ...addProjectRequest,
      [e.target.name]: e.target.value,
    });
  };

  const saveProject = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/project/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProjectRequest),
    })
      .then((result) => result.json())
      .then((res) => {
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
            navigate("/user/admin/project/all");
          }, 1000); // Redirect after 1 second
        } else {
          toast.error(res.responseMessage || "Something went wrong", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 1000); // Reload after 1 second
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0 rounded">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="card-title mb-0">Add Project</h5>
        </div>
        <div className="card-body">
          <form onSubmit={saveProject}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter project name"
                name="name"
                onChange={handleUserInput}
                value={addProjectRequest.name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Project Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name="description"
                onChange={handleUserInput}
                value={addProjectRequest.description}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="requirement" className="form-label">
                Project Requirement
              </label>
              <textarea
                className="form-control"
                id="requirement"
                rows="3"
                name="requirement"
                onChange={handleUserInput}
                value={addProjectRequest.requirement}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deadlineDate" className="form-label">
                Project Deadline
              </label>
              <input
                type="date"
                className="form-control"
                id="deadlineDate"
                name="deadlineDate"
                onChange={handleUserInput}
                value={addProjectRequest.deadlineDate}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProject;
