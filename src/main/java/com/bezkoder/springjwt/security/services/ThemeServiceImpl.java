package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.context.Theme;

import com.bezkoder.springjwt.models.Themes;
import com.bezkoder.springjwt.repository.CritereRepository;
import com.bezkoder.springjwt.repository.GrilleEvalRepository;
import com.bezkoder.springjwt.repository.RhnomRepo;
import com.bezkoder.springjwt.repository.ThemeRepository;



@Service
public class ThemeServiceImpl implements ThemeService {

	@Autowired
	private ThemeRepository themeRepo;
	@Autowired
	private CritereRepository critereRepo;
	@Autowired 
	private RhnomRepo RhnomRep;
	@Autowired
	private GrilleEvalRepository grilleRep;
	
	
	@Override
	public Themes addTheme(Themes T ) {
		
		themeRepo.save(T);
		return T ;
	}

	/*
	 * @Override public void affecterThemeAuCritere(Long idT, Long idC) { Themes
	 * theme=themeRepo.getById(idT); Critere critere=critereRepo.getById(idC);
	 * //List<Critere> criteres=theme.getCriteres(); //criteres.add(critere);
	 * //theme.setCriteres(criteres); themeRepo.save(theme);
	 * 
	 * 
	 * }
	 */

	@Override
	public List<Themes> getAllThemes() {
		return themeRepo.findAll();
	}

	/*
	 * @Override public List<Themes> findThemesByCategorie(Rhnom idnom) { return
	 * themeRepo.getByCategorie(idnom); }
	 */
	/*@Override
	public void affecterThemeCat(Long idT, Long idC) {
		Themes theme=themeRepo.getById(idT);
		Rhnom cat=RhnomRep.getById(idC);
		theme.setCategorie(cat);
		RhnomRep.save(cat);
	
	}*/
		
	/*
	 * @Override public void affecterThemeGrille(Long idT, Long idG) { Themes
	 * theme=themeRepo.getById(idT); GrilleEvaluation grille=grilleRep.getById(idG);
	 * theme.setGrille(grille);
	 * 
	 * 
	 * }
	 */
	

	/*
	 * @Override public List<Themes> findThemesByCategorie2(Rhnom idnom) { return
	 * themeRepo.findThemesByCategorie(idnom); }
	 */

	@Override
	public Optional<Themes> getThemeById(Long idT) {
		
		return themeRepo.findById(idT);
	}

	
	/*
	 * @Override public void affecterCategorieAuTheme(Long idTheme, Rhnom categorie)
	 * { themeRepo.setCategorieForTheme(categorie, idTheme); }
	 */
	
	@Override
	public Themes updateTheme(Long themeId, String nouveauTitre) {
		 Themes theme = themeRepo.findById(themeId).orElse(null);
		    if (theme != null) {
		        theme.setTitre(nouveauTitre);
		        themeRepo.save(theme);
		    }
		    return theme;
	  }

	@Override
	public Optional<Themes> getById(Long idT) {
		return themeRepo.findById(idT);
	}

	@Override
	public Themes updateThemeGrille(Long idT, Long idGrille) {
		Themes theme=themeRepo.findById(idT).orElse(null);
		theme.setGrille(idGrille);
		return themeRepo.save(theme);
	}

	@Override
	public List<Themes> findThemesByGrille(Long IdGrille) {
		
		return themeRepo.findByGrille(IdGrille);
	}

	
	
	
}
