package com.bezkoder.springjwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.GrilleEvaluation;
import com.bezkoder.springjwt.models.Notification;
import com.bezkoder.springjwt.security.services.NotificationService;

@RestController
@RequestMapping("/notif")
public class NotificationController {
	@Autowired
	NotificationService notifService; 
	
	@GetMapping("/getByMat/{mat}")
	public List<Notification> getNotif(@PathVariable String mat)
	{
		return notifService.getByMatricule(mat); 
	}
	
	@PutMapping("/desactiver/{id}")
	  public void updateNotif(@PathVariable Long id) {

		notifService.deactivateNotif(id);
	  }
}
