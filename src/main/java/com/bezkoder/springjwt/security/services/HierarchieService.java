package com.bezkoder.springjwt.security.services;

import java.util.List;

import com.bezkoder.springjwt.models.Hierarchie;


public interface HierarchieService {
	public List<Hierarchie> findByMatSup(String userconcernee);
	public List<Hierarchie> findByMat(String matricule);
	public List<String> ListOrgani();
	public List<String> ListOrganii();
	public List<Object> getHierarchie();
}
