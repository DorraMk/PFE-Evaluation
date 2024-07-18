package com.bezkoder.springjwt.security.services;

import java.util.List;
import java.util.Optional;

import com.bezkoder.springjwt.models.GrilleEvaluation;

public interface GrilleEvalService {
public List<GrilleEvaluation> ListGrille();
public Optional<GrilleEvaluation> getGrilleById(Long id);
public GrilleEvaluation AjoutGrille(GrilleEvaluation grille);
//public void affecterGrilleTheme(Long idG, Long idT);
public GrilleEvaluation updateUser (Long id, GrilleEvaluation g);
//public GrilleEvaluation AffecterGrilleFonction(Long idGrille, Long idnom);
public GrilleEvaluation updateGrille(Long grilleId, String nouveauTitre, Long long1);
public GrilleEvaluation getByFonction(Long idnom); 
}
