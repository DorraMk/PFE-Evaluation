package com.bezkoder.springjwt.security.services;

import java.util.List;

import com.bezkoder.springjwt.models.Notification;

public interface NotificationService {
public List<Notification> getByMatricule(String mat);
public void deactivateNotif(Long id); 
}
