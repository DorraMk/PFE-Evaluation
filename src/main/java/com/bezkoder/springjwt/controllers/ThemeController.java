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

import com.bezkoder.springjwt.models.Themes;
import com.bezkoder.springjwt.security.services.ThemeService;



@RestController
@RequestMapping("/theme")
public class ThemeController {
	@Autowired
	private ThemeService themeService; 
	
	@PostMapping("/add-theme")
	@ResponseBody
	public Themes addTheme(@RequestBody Themes v)
	{

	 themeService.addTheme(v);
	 return v;
	}
	

	
	
	/*
	 * @PutMapping("/affectationTC/{themeid}/{idnom}")
	 * 
	 * @ResponseBody public void affecterThemeCat(@PathVariable("themeid") Long
	 * themeid , @PathVariable("idnom") Long idnom) {
	 * themeService.affecterThemeCat(themeid, idnom);
	 * 
	 * }
	 */
	
	 /* @PutMapping("modif/{themeId}")
	  public Themes updateGrille(@PathVariable Long themeId, @RequestBody Themes theme) {

		return themeService.updateTheme(themeId, theme.getTitre(), theme.getCriteres());
	        
	  }*/
	
	@GetMapping("getById/{idT}")
	public Optional<Themes> getById(@PathVariable Long idT)
	{
		return themeService.getById(idT);
	}
	  
	  
	
	
	@GetMapping("/getThemes")
	public List<Themes> getAllThemes()
	{
		return themeService.getAllThemes();
	}
	/*
	 * @GetMapping("/getByCat/{idnom}") public List<Themes>
	 * getThemesByCat(@PathVariable Rhnom idnom) { return
	 * themeService.findThemesByCategorie(idnom); }
	 * 
	 * @GetMapping("/getByCat2/{idnom}") public List<Themes>
	 * getThemesByCat2(@PathVariable Rhnom idnom) { return
	 * themeService.findThemesByCategorie2(idnom); }
	 */
	
	
	@GetMapping("/getThemeId/{idt}")
	public Optional<Themes> getThemesById(@PathVariable Long idt)
	{
		return themeService.getThemeById(idt);
	}
	
	
	@PutMapping("modif/{themeId}")
	public Themes updateGrille(@PathVariable Long themeId, @RequestBody Themes theme) {
	    return themeService.updateTheme(themeId, theme.getTitre());
	}
	
	

	@PutMapping("modifThemeGrille/{themeId}")
	public Themes updateThemeGrille(@PathVariable Long themeId, @RequestBody Themes theme) {
	    return themeService.updateThemeGrille(themeId, theme.getGrille());
	}
	
	
	@GetMapping("/getThemeByGrille/{idt}")
	public List<Themes> getThemesByGrille(@PathVariable Long idt)
	{
		return themeService.findThemesByGrille(idt);
	}
}
