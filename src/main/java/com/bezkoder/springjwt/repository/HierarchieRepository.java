package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Hierarchie;
import com.bezkoder.springjwt.models.Hierarchie.HierarchieId;


@Repository
public interface HierarchieRepository extends JpaRepository<Hierarchie, HierarchieId> {
	public List<Hierarchie> findByMatSup(String userMat);
	public List<Hierarchie> findByMatricule(String userMat);
	@Query(nativeQuery = true , value="SELECT\r\n"
			+ "    \r\n"
			+ "    U1.usr_nomprenom AS nomprenom_mat_sup,\r\n"
			+ "    R1.lib1 AS lib1_mat_sup,\r\n"
			+ "   \r\n"
			+ "    U2.usr_nomprenom AS nomprenom_matricule,\r\n"
			+ "    R2.lib1 AS lib1_matricule\r\n"
			+ "FROM\r\n"
			+ "    HIERARCHIE H\r\n"
			+ "JOIN\r\n"
			+ "    UTILISATEUR U1\r\n"
			+ "ON\r\n"
			+ "    H.mat_sup = U1.usr_matricule\r\n"
			+ "JOIN\r\n"
			+ "    UTILISATEUR U2\r\n"
			+ "ON\r\n"
			+ "    H.matricule = U2.usr_matricule\r\n"
			+ "JOIN\r\n"
			+ "    RHNOM R1\r\n"
			+ "ON\r\n"
			+ "    U1.code_fonction = R1.idnom\r\n"
			+ "JOIN\r\n"
			+ "    RHNOM R2\r\n"
			+ "ON\r\n"
			+ "    U2.code_fonction = R2.idnom")
	public List<Object> getHierarchie();
	
	
}
