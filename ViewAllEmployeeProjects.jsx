import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllEmployeeProjects = () => {
  const employee = JSON.parse(sessionStorage.getItem("active-employee"));

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
      `http://localhost:8080/api/project/fetch/employee?employeeId=${employee.id}`
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
      `http://localhost:8080/api/project/employee/search?projectName=${projectName}&employeeId=${employee.id}`
    );
    return response.data;
  };

  const searchProjectbyName = (e) => {
    e.preventDefault();
    getProjectsByName();
    setProjectName("");
  };

  const updateProjectStatus = (project) => {
    navigate("/employee/project/status/update", { state: project });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded">
        <div className="card-header bg-primary text-white text-center rounded-top">
          <h2 className="mb-0">My Projects</h2>
        </div>
        <div className="card-body">
          <form className="mb-4" onSubmit={searchProjectbyName}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for Project Name..."
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
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Requirement</th>
                  <th>Manager Status</th>
                  <th>Manager Name</th>
                  <th>Employee Status</th>
                  <th>Employee Name</th>
                  <th>Created Date</th>
                  <th>Assigned Date</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.requirement}</td>
                    <td>{project.assignedToManager ? 'Assigned' : 'Not Assigned'}</td>
                    <td>{project.managerName || 'N/A'}</td>
                    <td>{project.assignedToEmployee ? 'Assigned' : 'Not Assigned'}</td>
                    <td>{project.employeeName || 'N/A'}</td>
                    <td>{project.createdDate}</td>
                    <td>{project.assignedDate}</td>
                    <td>{project.deadlineDate}</td>
                    <td>{project.projectStatus}</td>
                    <td>
                      {project.projectStatus !== "Completed" && (
                        <button
                          onClick={() => updateProjectStatus(project)}
                          className="btn btn-warning btn-sm"
                        >
                          Update Status
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

export default ViewAllEmployeeProjects;
