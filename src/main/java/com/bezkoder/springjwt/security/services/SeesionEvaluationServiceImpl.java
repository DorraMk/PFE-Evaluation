package com.bezkoder.springjwt.security.services;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.SessionEvaluation;
import com.bezkoder.springjwt.repository.SessionEvalRepository;


@Service
public class SeesionEvaluationServiceImpl implements SessionEvaluationService {
@Autowired
SessionEvalRepository sessionRepo;

private  SessionEvaluation session; 

@Override
public SessionEvaluation addEval(SessionEvaluation s)
{
	return sessionRepo.save(s);
}


@Override
public List<SessionEvaluation> listSessions()
{
return sessionRepo.findAll();
}
@Override
public SessionEvaluation findById(Long id) {
	
	return sessionRepo.findById(id).orElse(null);
}



	@Override
	public List<String> getPopulationSession(Long idsession) {
		return sessionRepo.getPopulationSession(idsession);
	}
	@Override
	public List<String> getEvaluateursSession(Long idsession) {
		
		return sessionRepo.getEvaluateursSession(idsession);
	}
	@Override
	public SessionEvaluation updateSession(Long sessionId, String nouveauTitre, Date DateDebut, String DateFin,
			String DatLancement, Integer periode)
	{
		Optional<SessionEvaluation> session=sessionRepo.findById(sessionId);
		if(session.isPresent())
		{
			SessionEvaluation session2=session.get();
			session2.setTitre(nouveauTitre);
			session2.setDateDebut(DateDebut);
			session2.setDateFin(DateFin);
			session2.setDateLancement(DatLancement);
			session2.setPeriode(periode);
			sessionRepo.save(session2);
			return session2;
		}	else
		{
			throw new IllegalArgumentException("Session with ID " + sessionId + " not found");
		}
		
	}
	@Override
	public SessionEvaluation getById(Long id) {
		SessionEvaluation s=sessionRepo.findById(id).orElse(null);
		return s;
	}
	@Override
	public SessionEvaluation DesactiverSession(Long idsess) {
		SessionEvaluation s=sessionRepo.findById(idsess).orElse(null);
		s.setDesactiverSession(true);
		sessionRepo.save(s);
		return s;
	}
	
	
	@Override
	public SessionEvaluation SessionEvaluateurs(Long sessionId, String evaluateurs) {
		SessionEvaluation s=sessionRepo.findById(sessionId).orElse(null);
		s.setEvals(evaluateurs);
		sessionRepo.save(s);
		return s;
	}


	@Override
	public SessionEvaluation modifSess(Long id, String s) {
		SessionEvaluation ss=sessionRepo.findById(id).orElse(null);
	      ss.setEvals(s);;
	     sessionRepo.save(ss);
	      return ss ;
	}

	/*
@Override
public boolean lancerSession(Long idSession) {
	session=sessionRepo.findById(idSession).orElse(null);
	LocalDate currentDate = LocalDate.now();
    
	   LocalDate launchDate = session.getDateLancement().toInstant()
		        .atZone(ZoneId.systemDefault())
		        .toLocalDate();
    
    if (currentDate.equals(launchDate)) {
        session.setFlag_lance(true);
        sessionRepo.save(session);
        return true;
    } else {
        return false;
    }
	
}
@Override
public boolean lancerSessionManuel(Long idSession) {
	session=sessionRepo.findById(idSession).orElse(null);
	if(!session.isFlag_lance())
	{
		session.setFlag_lance(true);
		sessionRepo.save(session);
	}
	return session.isFlag_lance();
	}*/
}
