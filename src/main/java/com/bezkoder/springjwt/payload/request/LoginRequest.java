package com.bezkoder.springjwt.payload.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
	private String usrMatricule;

	@NotBlank
	private String password;

	
	public String getUsrMatricule() {
		return usrMatricule;
	}

	public void setUsrMatricule(String usrMatricule) {
		this.usrMatricule = usrMatricule;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
