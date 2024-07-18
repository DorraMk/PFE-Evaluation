package com.bezkoder.springjwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.springjwt.models.Declenchement;
import com.bezkoder.springjwt.models.Edeclenchement;




public interface DeclenchementRepository extends JpaRepository<Declenchement, Long>{
	
	Optional<Declenchement> findByName(Edeclenchement name);

}
