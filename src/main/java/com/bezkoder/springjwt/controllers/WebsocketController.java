package com.bezkoder.springjwt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Notification;
import com.bezkoder.springjwt.repository.NotificationRepository;

@Controller
public class WebsocketController {
	 private final NotificationRepository notificationRepository;

	    @Autowired
	    public WebsocketController(NotificationRepository notificationRepository) {
	        this.notificationRepository = notificationRepository;
	    }

	    @MessageMapping("/sendNotification")
	    @SendTo("/topic/notifications")
	    public Notification sendNotification(String message) {
	        // Create a new Notification entity and save it to the database
	        Notification notification = new Notification();
	        notification.setMessageNotif(message);
	        // Set other attributes as needed

	        // Save the notification to the database
	        notificationRepository.save(notification);

	        return notification;
	    }
}
