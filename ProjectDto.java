package com.projectmanagementtool.dto;

import lombok.Data;

@Data
public class ProjectDto {
	
	private int id;
	
	private String name;
	
	private String description;
	
	private String assignedToManager;
	
	private String assignedToEmployee;
	
	private String projectStatus;
	
    private int employeeId;
	
	private int managerId;
	
	private String managerName;
	
	private String employeeName;
	
	private String requirement;
	
	private String createdDate;
	
	private String assignedDate;
	
	private String deadlineDate;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAssignedToManager() {
		return assignedToManager;
	}

	public void setAssignedToManager(String assignedToManager) {
		this.assignedToManager = assignedToManager;
	}

	public String getAssignedToEmployee() {
		return assignedToEmployee;
	}

	public void setAssignedToEmployee(String assignedToEmployee) {
		this.assignedToEmployee = assignedToEmployee;
	}

	public String getProjectStatus() {
		return projectStatus;
	}

	public void setProjectStatus(String projectStatus) {
		this.projectStatus = projectStatus;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getRequirement() {
		return requirement;
	}

	public void setRequirement(String requirement) {
		this.requirement = requirement;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public String getAssignedDate() {
		return assignedDate;
	}

	public void setAssignedDate(String assignedDate) {
		this.assignedDate = assignedDate;
	}

	public String getDeadlineDate() {
		return deadlineDate;
	}

	public void setDeadlineDate(String deadlineDate) {
		this.deadlineDate = deadlineDate;
	}
	
	

}
