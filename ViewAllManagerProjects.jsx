import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllManagerProjects = () => {
  const manager = JSON.parse(sessionStorage.getItem("active-manager"));

  const [allProjects, setAllProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getAllProject = async () => {
      const allProject = await retrieveAllProject();
      if (allProject) {
        setAllProjects(allProject.projects);
      }
    };

    getAllProject();
  }, []);

  const retrieveAllProject = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/project/fetch/manager?managerId=${manager.id}`
    );
    return response.data;
  };

  const getProjectsByName = async () => {
    const allProject = await retrieveProjectByName();
    if (allProject) {
      setAllProjects(allProject.projects);
    }
  };

  const retrieveProjectByName = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/project/manager/search?projectName=${projectName}&managerId=${manager.id}`
    );
    return response.data;
  };

  const searchProjectbyName = (e) => {
    e.preventDefault();
    getProjectsByName();
    setProjectName("");
  };

  const assignToEmployee = (project) => {
    navigate("/project/assign/employee", { state: project });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded">
        <div className="card-header bg-primary text-white text-center rounded-top">
          <h2 className="mb-0">All Projects</h2>
        </div>
        <div className="card-body">
          <form className="mb-4" onSubmit={searchProjectbyName}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Project Name..."
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>

          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Project Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Requirement</th>
                  <th scope="col">Manager Status</th>
                  <th scope="col">Manager Name</th>
                  <th scope="col">Employee Status</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Created Date</th>
                  <th scope="col">Assigned Date</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.requirement}</td>
                    <td>{project.assignedToManager}</td>
                    <td>{project.managerName}</td>
                    <td>{project.assignedToEmployee}</td>
                    <td>{project.employeeName}</td>
                    <td>{project.createdDate}</td>
                    <td>{project.assignedDate}</td>
                    <td>{project.deadlineDate}</td>
                    <td>{project.projectStatus}</td>
                    <td>
                      {project.assignedToEmployee === "Not Assigned" && (
                        <button
                          onClick={() => assignToEmployee(project)}
                          className="btn btn-warning btn-sm"
                        >
                          Assign To Employee
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllManagerProjects;
