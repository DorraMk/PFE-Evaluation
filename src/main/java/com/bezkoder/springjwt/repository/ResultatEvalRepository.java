package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bezkoder.springjwt.models.ResultatEvaluation;

public interface ResultatEvalRepository extends JpaRepository<ResultatEvaluation, Long> {
public List<ResultatEvaluation> findByEvaluateur(String mat); 

@Query("SELECT r FROM ResultatEvaluation r WHERE r.flgEval = true" )
public List<ResultatEvaluation> ListResultats();
/*
 * @Query("SELECT AVG(r.resultat) FROM ResultatEvaluation r WHERE r.flgEval = true"
 * ) public Float calculateAverageResultat();
 */
/*
 * @Query( nativeQuery = true ,
 * value="SELECT EXTRACT(YEAR FROM r.date_res) AS \\\"YEAR\\\", AVG(r.resultat) AS averageResultat FROM res_eval r WHERE r.flg_eval = true GROUP BY year ORDER BY year"
 * ) List<ResultatEvaluation[]> calculateAverageResultat();
 */

@Query(nativeQuery = true, value = "SELECT EXTRACT(YEAR FROM r.date_res) AS \"YEAR\", AVG(r.resultat) AS averageResultat FROM res_eval r WHERE r.flg_eval =1 GROUP BY EXTRACT(YEAR FROM r.date_res) ORDER BY EXTRACT(YEAR FROM r.date_res)")
List<Object[]> calculateAverageResultat();



@Query(nativeQuery = true, value = "SELECT EXTRACT(YEAR FROM r.date_res) AS \"YEAR\", AVG(r.resultat) AS averageResultat \r\n"
		+ "FROM res_eval r \r\n"
		+ "WHERE r.flg_eval = 1 and r.evalue =:matricule and r.resultat <> 0 \r\n"
		+ "GROUP BY EXTRACT(YEAR FROM r.date_res)\r\n"
		+ "ORDER BY EXTRACT(YEAR FROM r.date_res)")
List<Object[]> calculateAverageResultatByEvalue(String matricule);



@Query(nativeQuery = true, value="SELECT TO_CHAR(r.date_res, 'YYYY'), r.resultat AS moyenne, c.titrecritere "
		+ "FROM res_eval r "
		+ "JOIN utilisateur u ON u.usr_matricule = r.evalue "
		+ "JOIN grille_eval g ON g.fonction = u.code_fonction "
		+ "JOIN themes t ON t.grille = g.id_grille "
		+ "JOIN critere c ON c.id_theme = t.id_theme "
		+ "WHERE g.fonction =:idnom and r.resultat <> 0  "
		+ "GROUP BY TO_CHAR(r.date_res, 'YYYY'), c.titrecritere ,r.resultat "
		+ "ORDER BY TO_CHAR(r.date_res, 'YYYY'), c.titrecritere, r.resultat")
List<Object[]> TauxParFonction(Long idnom);
}
