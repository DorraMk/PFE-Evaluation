package com.bezkoder.springjwt.security.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.bezkoder.springjwt.models.SessionEvaluation;


public interface SessionEvaluationService {
	public List<SessionEvaluation> listSessions();
	public SessionEvaluation getById(Long id);  
	public SessionEvaluation addEval(SessionEvaluation s);
	public SessionEvaluation modifSess(Long id, String s);
	public SessionEvaluation findById(Long id);
	//public boolean lancerSession(Long idSession);
	//public boolean lancerSessionManuel(Long idSession);
	public SessionEvaluation DesactiverSession(Long idsess);
	List<String> getPopulationSession(Long idsession);
	List<String> getEvaluateursSession(Long idsession);
	public SessionEvaluation updateSession(Long sessionId, String nouveauTitre, Date DateDebut, String DateFin,String DatLancement, Integer nbjr);
	public SessionEvaluation SessionEvaluateurs(Long sessionId, String evaluateurs) ;	  
}
