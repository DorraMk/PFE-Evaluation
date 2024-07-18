package com.bezkoder.springjwt.payload.response;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String usrMatricule;
	private List<String> roles;

	public JwtResponse(String accessToken, String mat, List<String> roles) {
		this.token = accessToken;
		this.usrMatricule = mat;
		this.roles = roles;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}





	public String getUsrMatricule() {
		return usrMatricule;
	}

	public void setUsrMatricule(String usrMatricule) {
		this.usrMatricule = usrMatricule;
	}

	public List<String> getRoles() {
		return roles;
	}
}
