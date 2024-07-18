package com.bezkoder.springjwt.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "GRILLE_EVAL")
public class GrilleEvaluation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQUENCE")
	@SequenceGenerator(name = "SEQUENCE", sequenceName = "ID_Grille_Eval_SEQ")
	private Long IdGrille; 
	private String titreG;

	//@OneToMany(mappedBy="grille", fetch=FetchType.EAGER, cascade=CascadeType.REMOVE)
	//private List<Themes> themes;
	
	//@OneToOne( cascade=CascadeType.ALL)
	//@JoinColumn(name = "fonction_id")

	private Long fonction;
	

	
	
}
