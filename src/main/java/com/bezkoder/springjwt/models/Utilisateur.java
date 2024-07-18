package com.bezkoder.springjwt.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import lombok.Data;
@Data
@Entity
@Table
public class Utilisateur {
	@Id
	private String usrMatricule;
	
	private String usrNomprenom;

	private LocalDate dateContrat;
	private Long contrat;
	
	private LocalDate dateRecrutement;
	private Long codeFonction;
	
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	public Utilisateur() {
	}

	public Utilisateur(String mat, String password) {
		this.usrMatricule=mat;
		this.password = password;
	}

}
