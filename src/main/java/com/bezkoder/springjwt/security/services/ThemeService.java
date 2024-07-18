package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.ui.context.Theme;

import com.bezkoder.springjwt.models.Themes;


public interface ThemeService {
	public Themes addTheme(Themes R);
	public Optional<Themes> getThemeById(Long idT);
	public List<Themes>getAllThemes();
	public Themes updateThemeGrille(Long idT, Long idGrille);
	public Themes updateTheme(Long themeId, String nouveauTitre);
	public Optional<Themes> getById(Long idT);
	public List<Themes>findThemesByGrille(Long IdGrille);
}
