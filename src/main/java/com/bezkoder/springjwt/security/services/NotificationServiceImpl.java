package com.bezkoder.springjwt.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.models.Notification;
import com.bezkoder.springjwt.repository.NotificationRepository;

@Service
public class NotificationServiceImpl implements NotificationService {
 @Autowired
 NotificationRepository notifRep;
 
	@Override
	public List<Notification> getByMatricule(String mat) {
		return notifRep.findByMatriculee(mat);
	}

	@Override
	public void deactivateNotif(Long id) {
		Notification notif=notifRep.findById(id).orElse(null);
		notif.setDesactiverAlerte(true);
		notifRep.save(notif);
		
	}

}
