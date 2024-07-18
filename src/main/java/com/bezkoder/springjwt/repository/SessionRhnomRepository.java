package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.GrilleEvaluation;
import com.bezkoder.springjwt.models.SessionRhnom;

@Repository
public interface SessionRhnomRepository extends JpaRepository< SessionRhnom, Long> {

}
