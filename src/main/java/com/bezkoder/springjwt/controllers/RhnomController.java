package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Rhnom;
import com.bezkoder.springjwt.security.services.RhnomService;
import com.bezkoder.springjwt.security.services.ThemeService;


@RestController
@RequestMapping("/rhnom")
public class RhnomController {
	@Autowired
	RhnomService rhnosmerv;
	@Autowired
	private ThemeService themeService; 
	
	
	
	@GetMapping("/getCat")
	public List<Rhnom> getCat(){
		return rhnosmerv.findCatgorie() ;
		}
	
	@GetMapping("/getDir")
	public Rhnom  getDirection(){
		return rhnosmerv.findFonctionByLib1("Direction") ;
		}
	@GetMapping("/getUtilisateur")
	public Rhnom  getUtilisateur(){
		return rhnosmerv.findFonctionByLib1("Utilisateur") ;
		}
	
	@GetMapping("/getContrat")
	public List<Rhnom> getContrat(){
		return rhnosmerv.findContrat() ;
		}
	
	@GetMapping("/getCatbyId/{idnom}")
	public Rhnom getCatbyId(@PathVariable Long idnom){
		return rhnosmerv.getCatbyId(idnom) ;
		}
	
	@GetMapping("/getbyId/{idnom}")
	public Rhnom getRhnomById(@PathVariable Long idnom)
	{
		return rhnosmerv.getRhnomById(idnom);
	}
		 
		
//	 @PutMapping("/affecterPopulations/{idnom}") 
//	 public Rhnom affecterPop(@PathVariable("idnom") Long idnom, @RequestBody Rhnom fonction) {
//	 	 return rhnosmerv.AffecterSessionFonction(idnom, fonction.getSessionEval());
//	}
//	 
//		
//	 @PutMapping("/affecterPopulationsContrat/{idnom}") 
//	 public Rhnom affecterPopContrat(@PathVariable("idnom") Long idnom, @RequestBody Rhnom contrat) {
//	 	 return rhnosmerv.AffecterSessionContrat(idnom,contrat.getSessionEvalContrat());
//	}
//	 
	 
	@PutMapping("/affecterPopulations/{idnom}/{idSession}") 
	public Rhnom affecterPop(@PathVariable("idnom") Long idnom, @PathVariable("idSession") Long idSession) {
	    return rhnosmerv.AffecterSessionFonction(idnom, idSession);
	}

	@PutMapping("/affecterPopulationsContrat/{idnom}/{idSession}") 
	public Rhnom affecterPopContrat(@PathVariable("idnom") Long idnom, @PathVariable("idSession") Long idSession) {
	    return rhnosmerv.AffecterSessionContrat(idnom, idSession);
	}

	 
	 
	 @GetMapping("/getContratBySession/{idsession}")
		public List<Rhnom> findContratByIdSession(@PathVariable Long idsession){
			return rhnosmerv.findContratByIdSession(idsession) ;
		}
	 
	 @GetMapping("/getFonctionBySession/{idsession}")
	 public List<Rhnom> findFonctionByIdSession(Long idsession){
			return rhnosmerv.findContratByIdSession(idsession) ;
		}
	 
}
