package com.bezkoder.springjwt.security.services;

import java.sql.CallableStatement;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.ResultatEvaluation;
import com.bezkoder.springjwt.repository.ResultatEvalRepository;



@Service
public class ResultatEvaluationServiceImpl implements ResultatEvaluationService {

	@Autowired
	ResultatEvalRepository resultatRepo;
	
	private final JdbcTemplate jdbcTemplate;
	
	
	@Autowired
    public ResultatEvaluationServiceImpl(ResultatEvalRepository resultatRepo, JdbcTemplate jdbcTemplate) {
        this.resultatRepo = resultatRepo;
        this.jdbcTemplate = jdbcTemplate;
    }
	
	
	@Override
	public List<ResultatEvaluation> listResultat() {
		
		return resultatRepo.ListResultats();
	}

	@Override
	public void addResultat(ResultatEvaluation R) {
		resultatRepo.save(R);

	}

	@Override
	public ResultatEvaluation findById(Long id) {
		return resultatRepo.findById(id).orElse(null);
	}

	@Override
	public List<ResultatEvaluation> findByEvaluateur(String mat) {
		return resultatRepo.findByEvaluateur(mat);
	}

	@Override
	public ResultatEvaluation updatResultat(Long id, float resultat, String Resume, String Amelioration,String pointFort,String Objectifs) {
		ResultatEvaluation res=resultatRepo.findById(id).orElse(null); 
		LocalDate currentDate = LocalDate.now();
		res.setResultat(resultat);
		res.setResume(Resume);
		res.setAmelioration(Amelioration);
		res.setDateRes(currentDate);
		res.setPointFort(pointFort);
		res.setObjectifs(Objectifs);
		res.setFlgEval(true);
		resultatRepo.save(res);
	  // callPlSqlProcedure(id); 
		return res;
	}
	
	
	
	
	private void callPlSqlProcedure(Long id,String evalue, String path) {
        String procedureCall = "BEGIN MailingProcedure(?,?,?); END;";
        jdbcTemplate.update(con -> {
            CallableStatement callableStatement = con.prepareCall(procedureCall);
            callableStatement.setLong(1, id); 
            return callableStatement;
        });
    }


	@Override
	public List<Object[]> calculateAverageResultat() {
		return resultatRepo.calculateAverageResultat();
	}


	@Override
	public List<Object[]> calculateAverageResultatByEvalue(String mat) {
		return resultatRepo.calculateAverageResultatByEvalue(mat);
	}


	@Override
	public List<Object[]> TauxParFonction(Long idnom) {
		return resultatRepo.TauxParFonction(idnom);
	}


	@Override
	public void envoyerRes(Long id,String evalue, String path) {
		ResultatEvaluation res=resultatRepo.findById(id).orElse(null); 
		String nomEvalue=res.getEvalue();
		callPlSqlProcedure(id,nomEvalue,path);
	}

}
