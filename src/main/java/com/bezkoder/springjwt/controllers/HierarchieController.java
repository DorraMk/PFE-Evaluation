package com.bezkoder.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Hierarchie;
import com.bezkoder.springjwt.security.services.HierarchieService;


@RestController
@RequestMapping("/hierarchie")
@CrossOrigin(origins = "http://localhost:4200")
public class HierarchieController {

	@Autowired
	HierarchieService hierarchieService; 
	
	
	@GetMapping("/getByMatSup/{userconcerne}")
	public List<Hierarchie> getByMatSup(String userconcerne){
		return hierarchieService.findByMatSup(userconcerne);
	}
	
	@GetMapping("/getByMat/{userconcerne}")
	public List<Hierarchie> getByMatricule(String userconcerne){
		return hierarchieService.findByMat(userconcerne);
	}
	
	@GetMapping("/getHier")
	public List<String> getOrgani(){
		return hierarchieService.ListOrgani();
	}
	
	@GetMapping("/getHierr")
	public List<String> getOrganii(){
		return hierarchieService.ListOrganii();
	}
	
	@GetMapping("/getOrgani")
	public List<Object> getHierarchie()
	{
		return hierarchieService.getHierarchie();
	}

}
