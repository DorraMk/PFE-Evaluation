package com.bezkoder.springjwt.models;

import java.time.LocalDateTime;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "Notification")
public class Notification {
private static final long serialVersionUID = 1L;
 
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQUENCE")
	@SequenceGenerator(name = "SEQUENCE", sequenceName = "ID_NOTIF")
	private Long idNotif ;
	private String messageNotif;
	private String description;
	private Date dateNotif; 
    private Boolean desactiverAlerte;
    private String matricule;

	

	

}
