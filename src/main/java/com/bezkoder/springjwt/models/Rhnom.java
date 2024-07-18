package com.bezkoder.springjwt.models;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "RHNOM")
public class Rhnom implements java.io.Serializable {

	@Id
	@Column(name = "IDNOM", unique = true, nullable = false, precision = 10, scale = 0)
	private Long idnom;

	@Column(name = "CUTICRE", nullable = false)
	private String cutiCre;

//	private Long SessionEval;
//	private Long sessionEvalContrat;
	
	
	
	@ManyToOne
    @JoinColumn(name = "SessionEval")
    private SessionEvaluation sessionEval;

    @ManyToOne
    @JoinColumn(name = "SessionEvalContrat")
    private SessionEvaluation sessionEvalContrat;
    
    
	@Column(name = "LIB1", length = 500)
	private String lib1;

	@Column(name = "LIB2", length = 100)
	private String lib2;

	@Column(name = "LIB3", length = 100)
	private String lib3;

	@Column(name = "LIB4", length = 100)
	private String lib4;

	@Column(name = "LIB5", length = 100)
	private String lib5;


}