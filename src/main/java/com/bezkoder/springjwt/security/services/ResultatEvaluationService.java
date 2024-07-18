package com.bezkoder.springjwt.security.services;

import java.util.List;

import com.bezkoder.springjwt.models.ResultatEvaluation;




public interface ResultatEvaluationService {
	public List<ResultatEvaluation> listResultat();
	public void addResultat(ResultatEvaluation R);
	public ResultatEvaluation findById(Long id);
	public List<ResultatEvaluation> findByEvaluateur(String mat);
	public ResultatEvaluation updatResultat(Long id, float resultat,String Resume,String Amelioration,String pointFort,String Objectifs);
	public List<Object[]> calculateAverageResultat(); 
	public List<Object[]> calculateAverageResultatByEvalue(String mat); 
	List<Object[]> TauxParFonction(Long idnom);
	public void envoyerRes(Long id,String evalue, String path); 
}
