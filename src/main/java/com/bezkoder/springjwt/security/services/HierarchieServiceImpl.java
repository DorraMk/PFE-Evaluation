package com.bezkoder.springjwt.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.Hierarchie;
import com.bezkoder.springjwt.repository.HierarchieRepository;
import com.bezkoder.springjwt.repository.UserRepository;

import java.util.List;


@Service
public class HierarchieServiceImpl implements HierarchieService {
	@Autowired
	private HierarchieRepository hierarchierepo;
	
	@Autowired
	private UserRepository userepo;

	@Override
	public List<Hierarchie> findByMatSup(String userconcernee) {


	return hierarchierepo.findByMatSup(userconcernee);

	}

	@Override

	public List<Hierarchie> findByMat(String matricule) {

	return hierarchierepo.findByMatricule(matricule) ;

	}

	@Override
	public List<String> ListOrgani() {
		return userepo.findHierarchie();
	}

	@Override
	public List<String> ListOrganii() {
	
		return userepo.findHierarchiee();
	}

	@Override
	public List<Object> getHierarchie() {
		return hierarchierepo.getHierarchie();
	}
	
	
	
}
