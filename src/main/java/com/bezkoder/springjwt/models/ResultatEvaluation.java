package com.bezkoder.springjwt.models;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.lang.Nullable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "resEval")
public class ResultatEvaluation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "RES_EVAL_SEQ")
	@SequenceGenerator(name = "RES_EVAL_SEQ", sequenceName = "ID_RES_EVAL_SEQ")

	private Long IdRes; 
	@Nullable
	private float resultat ; 
	@Nullable
	private String resume; 
	@Nullable
	private String amelioration; 
	@Nullable
	String pointFort;
    //@Temporal(TemporalType.TIMESTAMP)
	private LocalDate dateRes;
	@Nullable
	private String objectifs; 
	private String evaluateur; 
	private String evalue; 
	private Long  grille;
	private Long sessionid;
	@Nullable
	private boolean flgEval;

}
