package com.bezkoder.springjwt.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.SessionEvaluation;
import com.bezkoder.springjwt.models.SessionRhnom;
import com.bezkoder.springjwt.repository.SessionRhnomRepository;

@Service
public class SessionRhnomServiceImpl implements  SessionRhnomService{
@Autowired
SessionRhnomRepository sessionRhRepo;
	
	
	
	@Override
	public  SessionRhnom addEval(SessionRhnom s) {
	 sessionRhRepo.save(s) ;
	 return s ;
	}

}
