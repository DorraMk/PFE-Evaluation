package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Edeclenchement;
import com.bezkoder.springjwt.models.SessionEvaluation;
import com.bezkoder.springjwt.models.SessionRhnom;
import com.bezkoder.springjwt.security.services.SessionEvaluationService;
import com.bezkoder.springjwt.security.services.SessionRhnomService;



@RestController
@RequestMapping("/session")
public class SessionEvalController {
	
	@Autowired
	SessionEvaluationService SessionService; 
	@Autowired
	SessionRhnomService sessionRhService; 
	
	
	
	@PostMapping("/ajoutSession")
	@ResponseBody
	public SessionEvaluation ajouCentre(@RequestBody SessionEvaluation s) {
		return SessionService.addEval(s);
	}
	
	
	@PostMapping("/ajoutSessionRh")
	@ResponseBody
	public  SessionRhnom ajouSR(@RequestBody  SessionRhnom s) {
		return sessionRhService.addEval(s);
	}
	
	
	@PutMapping("/modifSession/{id}")
	@ResponseBody
	public SessionEvaluation modifSession(@PathVariable Long id ,@RequestBody SessionEvaluation s) {
		return SessionService.modifSess(id, s.getEvals());
	}
	
	@GetMapping("/getSession/{id}")
	
	public SessionEvaluation getSession(@PathVariable("id") Long id) {
		 return SessionService.getById(id);
	}
	
	

	
	@GetMapping("/getSessions")
	public List<SessionEvaluation> getAllThemes()
	{
		return SessionService.listSessions();
	}
	
	@PutMapping("/desactiverSession/{id}")
	@ResponseBody
	public SessionEvaluation desactiver(@PathVariable("id") Long id) {
		 return SessionService.DesactiverSession(id);
	}
	

	
	
	@GetMapping("/declenchement")
	  public ResponseEntity<String[]> getDeclenchement() {
	    String[] values = Stream.of(Edeclenchement.values())
	        .map(Enum::name)
	        .toArray(String[]::new);
	    return ResponseEntity.ok(values);
	  }
	  
	  @PutMapping("/SessionEvaluateur/{idSession}")
	  public SessionEvaluation SessionEval(@PathVariable Long idSession,@RequestBody SessionEvaluation session) {
	 return SessionService.SessionEvaluateurs(idSession, session.getEvals());
	  }
	  
//		@PutMapping("/lancerSession/{id}")
//		@ResponseBody
//		public boolean lancerSession(@PathVariable("id") Long id) {
//			 return SessionService.lancerSession(id);
//		}
//		
//		@PutMapping("/lancerSessionMan/{id}")
//		@ResponseBody
//		public boolean lancerSessionManuel(@PathVariable("id") Long id) {
//			 return SessionService.lancerSessionManuel(id);
//		}
		
}
