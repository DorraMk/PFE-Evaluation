package com.bezkoder.springjwt.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@Data

public class Critere {
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQUENCE")
	@SequenceGenerator(name = "SEQUENCE", sequenceName = "ID_CRITERE_SEQ")
	private Long IdCritere; 
	private String titrecritere;
	private float ponderation;
	//@ManyToOne
	//@JoinColumn(name="THEME", nullable=true)
	//@JsonIgnore
	//@Nullable
	@Column(name="ID_THEME")
	private Long theme;
	
}
