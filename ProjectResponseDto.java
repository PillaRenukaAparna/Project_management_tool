package com.projectmanagementtool.dto;

import java.util.List;

import lombok.Data;

@Data
public class ProjectResponseDto extends CommonApiResponse {
	
	List<ProjectDto> projects;

	public List<ProjectDto> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectDto> projects) {
		this.projects = projects;
	}
	
	
}

