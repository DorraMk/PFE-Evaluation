package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.GrilleEvaluation;

@Repository
public interface GrilleEvalRepository extends JpaRepository<GrilleEvaluation, Long> {
public GrilleEvaluation findByFonction(long idnom);
}
