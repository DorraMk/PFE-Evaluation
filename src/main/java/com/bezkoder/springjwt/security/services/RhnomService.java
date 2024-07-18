package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import com.bezkoder.springjwt.models.Rhnom;



public interface RhnomService {
	public List<Rhnom> findCatgorie();
	public List<Rhnom> findContrat();
	public  Rhnom getRhnomById(Long idnom);
	//public void affecterThemeCat(Long idT, Long idC);
	public Rhnom  getCatbyId(Long idnom);
	
	public Rhnom AffecterSessionFonction(Long idnom, Long idSession) ;
	public Rhnom AffecterSessionContrat(Long idnom, Long idSession) ;
	
	public List<Rhnom> findContratByIdSession(Long idSession); 
	public List<Rhnom> findFonctionByIdSession(Long idSession);
	public Rhnom findFonctionByLib1(String lib1); 
}
