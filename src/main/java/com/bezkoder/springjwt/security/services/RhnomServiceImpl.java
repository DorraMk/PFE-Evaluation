package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.Rhnom;
import com.bezkoder.springjwt.models.SessionEvaluation;
import com.bezkoder.springjwt.repository.GrilleEvalRepository;
import com.bezkoder.springjwt.repository.RhnomRepo;
import com.bezkoder.springjwt.repository.SessionEvalRepository;
import com.bezkoder.springjwt.repository.ThemeRepository;

@Service
public class RhnomServiceImpl implements RhnomService {

	@Autowired
	RhnomRepo rhnomRepo;
	@Autowired
	ThemeRepository themerep; 
	@Autowired
	SessionEvalRepository sessionRepo; 
	@Autowired
	GrilleEvalRepository grilleRepo; 
	
	@Override
	public List<Rhnom> findCatgorie() {
		
		return rhnomRepo.findCatgorie();
	}
	


	
	@Override
	public Rhnom getCatbyId(Long idnom) {
		
		return rhnomRepo.findById(idnom).orElse(null);
	}


	@Override
	public List<Rhnom> findContrat() {
		
		return rhnomRepo.findContrat();
	}




	@Override
	public Rhnom AffecterSessionFonction(Long idnom, Long idSession) {
		Rhnom fonction=rhnomRepo.findById(idnom).orElse(null);
		SessionEvaluation session=sessionRepo.findById(idSession).orElse(null);
		fonction.setSessionEval(session);
		//fonction.setSessionEval(idSession);
		rhnomRepo.save(fonction);
		return fonction;
		
	}

	@Override
	public Rhnom AffecterSessionContrat(Long idnom, Long idSession) {
	    Rhnom fonction = rhnomRepo.findById(idnom).orElse(null);
	    if (fonction != null) {
	    	SessionEvaluation session=sessionRepo.findById(idSession).orElse(null);
			fonction.setSessionEvalContrat(session);
	       // fonction.setSessionEvalContrat(idSession);
	        rhnomRepo.save(fonction);
	    }
	    return fonction;
	}




	@Override
	public List<Rhnom> findContratByIdSession(Long idSession) {
		return rhnomRepo.findContratByIdSession(idSession);
	}

	@Override
	public List<Rhnom> findFonctionByIdSession(Long idSession) {
		return rhnomRepo.findFonctionByIdSession(idSession);
	}




	@Override
	public Rhnom getRhnomById(Long idnom) {
		return rhnomRepo.findById(idnom).orElse(null);
	}




	@Override
	public Rhnom findFonctionByLib1(String lib1) {
		return rhnomRepo.findFonctionByLib1(lib1);
	}




	
	
	 
}
