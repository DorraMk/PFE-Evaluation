package com.bezkoder.springjwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity

public class Declenchement {
	@Id
	
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Edeclenchement name;
	
	
}
