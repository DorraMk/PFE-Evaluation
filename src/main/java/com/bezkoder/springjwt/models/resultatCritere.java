package com.bezkoder.springjwt.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@Entity

@AllArgsConstructor

@NoArgsConstructor

@Table
@IdClass(resultatCritere.ResultaCritereId.class)
public class resultatCritere {
@Id	
private Long idcritere ; 
@Id
private String matriculeEvalue; 
private Long idResultat; 
private boolean exceptionnel; 
private boolean bon; 
private boolean moyen;
private boolean besoin; 
private boolean insatisfaisant; 

public static class ResultaCritereId implements Serializable {


    private static final long serialVersionUID = 1L;


    private Long idcritere ; 
    private String matriculeEvalue; 
}


}
