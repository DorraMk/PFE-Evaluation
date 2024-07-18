package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import com.bezkoder.springjwt.models.Critere;



public interface CritereService {
	public Critere addCritere(Critere c);
	public List<Critere> findCritereByTheme(Long idtheme);
	//public void affecterThemeAuCritere(Long idT, Long idC);
	public Optional<Critere> getById(Long idC);
	public Critere updateCritere(Long critereId, String nouveauTitre,float ponderation );
	
}
