import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");

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
    const response = await axios.get("http://localhost:8080/api/project/fetch");
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
      `http://localhost:8080/api/project/search?projectName=${projectName}`
    );
    return response.data;
  };

  const searchProjectbyName = (e) => {
    e.preventDefault();
    getProjectsByName();
    setProjectName("");
  };

  const getProjectsById = async () => {
    const allProject = await retrieveProjectById();
    if (allProject) {
      setAllProjects(allProject.projects);
    }
  };

  const retrieveProjectById = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/project/search/id?projectId=${projectId}`
    );
    return response.data;
  };

  const searchProjectbyId = (e) => {
    e.preventDefault();
    getProjectsById();
    setProjectId("");
  };

  const assignToManager = (project) => {
    navigate("/project/assign/manager", { state: project });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow border-0 rounded">
        <div className="card-header bg-primary text-white text-center rounded-top">
          <h2 className="mb-0">All Projects</h2>
        </div>
        <div className="card-body">
          <div className="row g-3 mb-4">
            <div className="col-auto">
              <form className="d-flex" onSubmit={searchProjectbyName}>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter Project Name..."
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="col-auto">
              <form className="d-flex" onSubmit={searchProjectbyId}>
                <input
                  type="number"
                  className="form-control me-2"
                  placeholder="Enter Project Id..."
                  onChange={(e) => setProjectId(e.target.value)}
                  value={projectId}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
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
                      {project.assignedToManager === "Not Assigned" && (
                        <button
                          onClick={() => assignToManager(project)}
                          className="btn btn-warning btn-sm"
                        >
                          Assign To Manager
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

export default ViewAllProjects;
