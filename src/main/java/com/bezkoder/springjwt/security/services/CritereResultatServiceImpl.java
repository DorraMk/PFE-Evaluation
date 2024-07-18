package com.bezkoder.springjwt.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.resultatCritere;
import com.bezkoder.springjwt.repository.CritereResultatReository;
@Service
public class CritereResultatServiceImpl implements CritereResultatService {

	@Autowired
	private CritereResultatReository repo; 
	
	
	@Override
	public resultatCritere addCritereRes(resultatCritere c) {
		return repo.save(c);
	}

}
