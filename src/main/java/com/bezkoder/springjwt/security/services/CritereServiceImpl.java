package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.Critere;
import com.bezkoder.springjwt.repository.CritereRepository;
import com.bezkoder.springjwt.repository.ThemeRepository;


@Service
public class CritereServiceImpl implements CritereService {

	@Autowired
	CritereRepository critereRepo;
	@Autowired
	private ThemeRepository themeRepo;
	
	@Override
	public Critere addCritere(Critere c) {
		critereRepo.save(c);
		return c ;
	}


	@Override
	public List<Critere> findCritereByTheme(Long idtheme) {
		
		return critereRepo.getByTheme(idtheme);
	}


	/*
	 * @Override public void affecterThemeAuCritere(Long idT, Long idC) { Critere
	 * critere=critereRepo.findById(idC).orElse(null); critere.setTheme(idT);
	 * critereRepo.save(critere); }
	 */

	@Override
	public Critere updateCritere(Long critereId, String nouveauTitre, float ponderation) {
		Optional<Critere> optionalCritere = critereRepo.findById(critereId);
	      Critere critere = optionalCritere.get();
	      critere.setTitrecritere(nouveauTitre);
	      critere.setPonderation(ponderation);
	      critereRepo.save(critere);
	    return critere;
	}

	@Override
	public Optional<Critere> getById(Long idC) {
		return critereRepo.findById(idC);
	}



}
