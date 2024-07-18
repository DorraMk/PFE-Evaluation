package com.bezkoder.springjwt.models;

import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.fasterxml.jackson.annotation.JsonFormat;
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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.ParseException;
import java.text.SimpleDateFormat;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "session_eval")
public class SessionEvaluation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQUENCE")
	@SequenceGenerator(name = "SEQUENCE", sequenceName = "ID_SESSION_EVAL_SEQ")
	private Long IdSession;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_creation")
	private Date dateDebut;
   // @JsonFormat(pattern = "dd-MM")
	private String dateLancement; 
    //@JsonFormat(pattern = "dd-MM")
	private String dateFin; 
    
	private String titre; 
	private Integer periode; 
	private Edeclenchement declenchement; //0 selon date d'anniversaire et 1 annuelle 
	private float coeff=1;
	private boolean flag_lance=false; 
	private Boolean desactiverSession=false;
	private String evals; 
	
	
	
	@PrePersist
	public void prePersist() {
	    this.dateDebut = new Date();

	    if (this.dateLancement != null) {
	        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSX", Locale.US);
	        SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MM", Locale.US);

	        try {
	            Date parsedDate = inputFormat.parse(this.dateLancement);
	            this.dateLancement = outputFormat.format(parsedDate);
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }
	    }

	    if (this.dateFin != null) {
	        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSX", Locale.US);
	        SimpleDateFormat outputFormat = new SimpleDateFormat("dd-MM", Locale.US);

	        try {
	            Date parsedDate = inputFormat.parse(this.dateFin);
	            this.dateFin = outputFormat.format(parsedDate);
	        } catch (ParseException e) {
	            e.printStackTrace();
	        }
	    }
	}


	
	
	/*
	 * @OneToMany
	 * 
	 * @JoinColumn private List<Rhnom> Population;
	 */

//@OneToOne
//@JsonIgnore
//@Nullable
//private ResultatEvaluation resultat;
//

}
