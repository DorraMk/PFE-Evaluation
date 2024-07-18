package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Hierarchie;
import com.bezkoder.springjwt.models.Hierarchie.HierarchieId;
import com.bezkoder.springjwt.models.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
@Query("SELECT r FROM Notification r WHERE r.matricule =:mat" )
public List<Notification> findByMatriculee(String mat); 
}
