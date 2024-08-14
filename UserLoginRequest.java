package com.projectmanagementtool.dto;

import lombok.Data;

@Data
public class UserLoginRequest {
	
	private String emailId;
	
	private String password;
	
	private String role;
	
	private int userId;   // for change password

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	

}
