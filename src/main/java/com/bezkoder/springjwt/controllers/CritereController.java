package com.bezkoder.springjwt.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Critere;
import com.bezkoder.springjwt.repository.CritereRepository;
import com.bezkoder.springjwt.security.services.CritereService;



@RestController
@RequestMapping("/critere")
public class CritereController {
	@Autowired
	CritereService critereService ;
	@Autowired
	CritereRepository critereRepo;
	
	@PostMapping("/add-critere")
	@ResponseBody
	public Critere addCritere(@RequestBody Critere c)
	{
	 return critereService.addCritere(c);
	}
	

	@GetMapping("/getByTheme/{idtheme}")
	public List<Critere> getByTheme(@PathVariable("idtheme") Long idtheme)
	{
		return critereService.findCritereByTheme(idtheme);
	}
	
	
	
	@GetMapping("getById/{idC}")
	public 	Optional<Critere> getById(@PathVariable Long idC)
	{
		return critereService.getById(idC);
	}
	
	
//  @PutMapping("/affectationcritTheme/{critId}")
//	  
//	  @ResponseBody public void affecterThemeCat(@PathVariable Long critereId, @RequestBody Critere critere) {
//	  critereService.affecterThemeAuCritere(critereId, critere.getTheme());
//	  
//	  }
  
  
	/*
	 * @PutMapping("modif/{critereId}") public Critere updateCritere(@PathVariable
	 * Long critereId, @RequestBody Critere critere) {
	 * 
	 * return critereService.updateCritere(critereId, critere.getTitrecritere(),
	 * critere.getPonderation());
	 * 
	 * 
	 * }
	 */
  
  
  @PutMapping("modif/{id}")
	public ResponseEntity<Critere> updateTutorial(@PathVariable("id") long id, @RequestBody Critere critere) {
		Optional<Critere> critereData =  critereRepo.findById(id);

		if (critereData.isPresent()) {
			Critere _critere = critereData.get();
			_critere.setTitrecritere(critere.getTitrecritere());
			_critere.setPonderation(critere.getPonderation());
			return new ResponseEntity<>( critereRepo.save(_critere), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
