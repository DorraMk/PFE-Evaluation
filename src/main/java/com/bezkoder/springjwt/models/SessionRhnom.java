package com.bezkoder.springjwt.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@Entity

@AllArgsConstructor

@NoArgsConstructor

@Table(name = "SessionRhnom")


public class SessionRhnom {


    private static final long serialVersionUID = 1L;



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQUENCE")
	@SequenceGenerator(name = "SEQUENCE", sequenceName = "ID_SessionRhnom_SEQ")
	private Long IdSessionRhnom;

    private Long IdSessionn;

	private Long idContrat;

    private Long idFonction;


    
}
