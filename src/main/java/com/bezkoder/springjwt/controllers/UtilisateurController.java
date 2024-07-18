package com.bezkoder.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Critere;
import com.bezkoder.springjwt.models.Utilisateur;
import com.bezkoder.springjwt.security.services.UserService;

@RestController
@RequestMapping("/utilisateur")
public class UtilisateurController {
@Autowired
private  UserService utilisateurService;  
	
	@GetMapping("/getByMat/{mat}")
	
	public Utilisateur getByMat(@PathVariable String mat)
	{
		return utilisateurService.getByUsrMatricule(mat);
	}
	
@GetMapping("/getAll")
	
	public List<Utilisateur> getAll()
	{
		return utilisateurService.findAll();
	}
}
