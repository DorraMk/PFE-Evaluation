package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Rhnom;


@Repository
public interface RhnomRepo  extends JpaRepository<Rhnom, Long> {
	@Query(nativeQuery=true ,value="select rh.* from rhnom rh join utilisateur u on rh.idnom =u.code_fonction")//u.idnom )
	public List<Rhnom> findCatgorie();
	
	@Query(nativeQuery=true ,value="select  rh.* from rhnom rh join utilisateur u on rh.idnom =u.contrat ")//u.idnom )
	public List<Rhnom> findContrat();
	
	@Query(nativeQuery=true ,value="select  rh.* from rhnom rh , utilisateur u where   rh.idnom=u.contrat and rh.session_eval_contrat=:idsession")
	public List<Rhnom> findContratByIdSession(@Param("idsession") Long idsession);
	
	@Query(nativeQuery=true ,value="select  rh.* from rhnom rh , utilisateur u where   rh.idnom=u.code_fonction and rh.session_eval=:idsession" )
	public List<Rhnom> findFonctionByIdSession(@Param("idsession") Long idsession);
	
	@Query("SELECT t FROM Rhnom t WHERE t.lib1 = :lib1")
	Rhnom findFonctionByLib1(@Param("lib1") String lib1);

}
