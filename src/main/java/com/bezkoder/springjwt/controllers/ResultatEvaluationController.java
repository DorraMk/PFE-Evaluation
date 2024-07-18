package com.bezkoder.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Critere;
import com.bezkoder.springjwt.models.ResultatEvaluation;
import com.bezkoder.springjwt.security.services.ResultatEvaluationService;

@RestController
@RequestMapping("/resultat")
public class ResultatEvaluationController {

	@Autowired
	ResultatEvaluationService resService;
	
	@GetMapping("/getByEvaluateur/{mat}")
	public List<ResultatEvaluation> getByTheme(@PathVariable("mat") String mat)
	{
		return resService.findByEvaluateur(mat);
	}
	@GetMapping("/ListeRes")
	public List<ResultatEvaluation> liste()
	{
		return resService.listResultat();
	}
	
	@GetMapping("/getById/{id}")
	public ResultatEvaluation getById(@PathVariable("id") Long id)
	{
		return resService.findById(id);
	}
	  
	  @PutMapping("/updateResultat/{id}")
	  public ResultatEvaluation updateResultat(@PathVariable("id") Long id, @RequestBody ResultatEvaluation res)
	  {
		  return resService.updatResultat(id, res.getResultat(), res.getResume(), res.getAmelioration(),res.getPointFort(), res.getObjectifs());
	  }
	
		@GetMapping("/average")
		public List<Object[]> calculateAverageResultat()
		{
			return resService.calculateAverageResultat();
		}
		
		@GetMapping("/evolution/{mat}")
		public List<Object[]> calculateEvolution(@PathVariable String mat)
		{
			return resService.calculateAverageResultatByEvalue(mat);
		}
		
		@GetMapping("/tauxParCritere/{idnom}")
		List<Object[]> TauxParFonction(@PathVariable Long idnom)
		{
			return resService.TauxParFonction(idnom);
		}
		
		 @PostMapping("/envoyer/{id}/{evalue}")
		    public ResponseEntity<String> executeMyProcedure(@PathVariable("id") Long id , @PathVariable("evalue") String evalue) {
		        try {
		        	String path="D:\\my downloads\\angular-11-spring-boot-jwt-authentication-master\\angular-11-spring-boot-jwt-authentication-master\\spring-boot-server" ;
		            // Call your PL/SQL procedure using myProcedureService or any other service
		        	resService.envoyerRes(id, evalue, path);

		            // Return a success response
		            return ResponseEntity.ok("Procedure executed successfully.");
		        } catch (Exception e) {
		            // Handle exceptions and return an error response
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
		                    .body("Error executing procedure: " + e.getMessage());
		        }
		    }
}
