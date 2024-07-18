package com.bezkoder.springjwt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Critere;
import com.bezkoder.springjwt.models.resultatCritere;
import com.bezkoder.springjwt.security.services.CritereResultatService;

@RestController
@RequestMapping("/critereRes")
public class ResultatCritereController {
	@Autowired
	private CritereResultatService serviceRes; 
	
	@PostMapping("/add-Rescritere")
	@ResponseBody
	public resultatCritere addCritere(@RequestBody resultatCritere c)
	{
	 return serviceRes.addCritereRes(c);
	}
	

}
