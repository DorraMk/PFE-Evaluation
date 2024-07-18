package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Declenchement;
import com.bezkoder.springjwt.models.resultatCritere;
import com.bezkoder.springjwt.models.resultatCritere.ResultaCritereId;
@Repository
public interface CritereResultatReository extends JpaRepository<resultatCritere, ResultaCritereId> {

}
