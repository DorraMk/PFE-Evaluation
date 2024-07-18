package com.bezkoder.springjwt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Utilisateur;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur, String> {
	//Optional<Utilisateur> findByUsername(String username);

	//Boolean existsByUsername(String username);
	Boolean existsByUsrMatricule(String mat);
	Boolean existsByEmail(String email);
	
	
	 public Utilisateur findByUsrMatricule(String usrMatricule);

		@Query(nativeQuery=true ,value="select u.usr_nomprenom ,sub.usr_nomprenom as nomsuper ,rh.lib1 from utilisateur u join hierarchie h on h.matricule = u.usr_matricule join rhnom rh on rh.idnom = u.code_fonction join utilisateur sub on sub.usr_matricule=h.mat_sup ")
		public List<String> findHierarchie();
		
		@Query(nativeQuery = true, value = "SELECT u.usr_Nomprenom, u.usr_Matricule, r.lib1 "
		        + "FROM Utilisateur u "
		        + "JOIN Rhnom r ON u.code_Fonction = r.IDNOM")
		public List<String> findHierarchiee();
		
		public Utilisateur findUtilisateurByusrMatricule(String usrMatricule);
}
