package com.bezkoder.springjwt.models;



import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode
@Table(name = "GROUPE")
public class Groupe {

	@Id
	@Column(name = "CODGRP", unique = true, nullable = false, length = 20)
	private String codgrp;
	private String libgrp;
	private String cutimod;
	private String cuticre;
	private Boolean flgConsProj;
	private Boolean flgModifProj;
	private Boolean flgAjoutProj;
	private Boolean flgValidProj;
	private Boolean flgAnnulProj;

	private Boolean flgReprendProj;
	private Boolean flgClotureProj;
	private LocalDateTime datecre;
	private LocalDateTime datemod;
	//@Column(name = "ROWID", insertable = false, updatable = false)
	//private String rowid;


}