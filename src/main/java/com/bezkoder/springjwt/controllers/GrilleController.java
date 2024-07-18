package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.Optional;

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

import com.bezkoder.springjwt.models.GrilleEvaluation;
import com.bezkoder.springjwt.security.services.GrilleEvalService;



@RestController
@RequestMapping("/grille")
public class GrilleController {
		@Autowired
		private GrilleEvalService grilleService; 
		
		@PostMapping("/add-grille")
		@ResponseBody
		public GrilleEvaluation addTheme(@RequestBody GrilleEvaluation g)
		{
		grilleService.AjoutGrille(g);
		 return g;
		}
		
	
		
		@GetMapping("/getAll")
		public List<GrilleEvaluation> getAll()
		{
			return grilleService.ListGrille();
		}
		
		@PutMapping("/modif/{grilleId}")
		  public GrilleEvaluation updateGrille(@PathVariable Long grilleId, @RequestBody GrilleEvaluation grille) {

			return grilleService.updateGrille(grilleId, grille.getTitreG(), grille.getFonction());
		       
		    
		  }
		
		
		
		@GetMapping("/getById/{id}")
		public Optional<GrilleEvaluation> getGrille(@PathVariable("id") Long id)
		{
			return grilleService.getGrilleById(id);
		}
		
		@GetMapping("/getByFonction/{idnom}")
		public GrilleEvaluation getByFonction(@PathVariable Long idnom)
		{
			return grilleService.getByFonction(idnom);
		}
		
		
}
