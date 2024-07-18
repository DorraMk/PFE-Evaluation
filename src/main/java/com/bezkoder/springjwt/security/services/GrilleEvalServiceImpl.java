package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.GrilleEvaluation;
import com.bezkoder.springjwt.repository.GrilleEvalRepository;
import com.bezkoder.springjwt.repository.RhnomRepo;
import com.bezkoder.springjwt.repository.ThemeRepository;


@Service
public class GrilleEvalServiceImpl implements GrilleEvalService {

	@Autowired
	GrilleEvalRepository grilleRepo; 
	@Autowired
	ThemeRepository themeRepo;
	@Autowired 
	RhnomRepo rhnomrepo;
	
	@Override
	public List<GrilleEvaluation> ListGrille() {
		
		return grilleRepo.findAll();
	}

	@Override
	public Optional<GrilleEvaluation> getGrilleById(Long id) {
		
		return grilleRepo.findById(id);
	}

	


	


	@Override
	public GrilleEvaluation AjoutGrille(GrilleEvaluation grille) {
		grilleRepo.save(grille);
		return grille;
	}

	/*
	 * @Override public void affecterGrilleTheme(Long idG, Long idT) { Themes
	 * theme=themeRepo.getById(idT); GrilleEvaluation
	 * grille=grilleRepo.getById(idG); theme.setGrille(grille);
	 * themeRepo.save(theme);
	 * 
	 * }
	 */

	@Override
	public GrilleEvaluation updateUser(Long id, GrilleEvaluation g) {
		GrilleEvaluation oldGrille=grilleRepo.findById(id).orElse(null);
		oldGrille.setTitreG(g.getTitreG());
		oldGrille.setFonction(g.getFonction());
		return grilleRepo.save(oldGrille);
	
	}
	
	@Override
	//plan b 
	public GrilleEvaluation updateGrille(Long grilleId, String nouveauTitre,Long idnom) {
	    Optional<GrilleEvaluation> optionalGrille = grilleRepo.findById(grilleId);
	    if (optionalGrille.isPresent()) {
	      GrilleEvaluation grille = optionalGrille.get();
	      grille.setTitreG(nouveauTitre);
	      grille.setFonction(idnom);;
	      grilleRepo.save(grille);
	      return grille ;
	    } else {
	      throw new IllegalArgumentException("Grille with ID " + grilleId + " not found");
	    }
	  }

	@Override
	public GrilleEvaluation getByFonction(Long idnom) {
		return grilleRepo.findByFonction(idnom);
	}

	
}
