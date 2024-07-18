package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.SessionEvaluation;



@Repository
public interface SessionEvalRepository  extends JpaRepository<SessionEvaluation,Long> {
	
	 @Query(value = "SELECT rh.lib1, rh.idnom FROM session_eval s join Rhnom rh ON rh.population_id_session = s.id_session where s.id_session=:idsession", nativeQuery = true)
	    List<String> getPopulationSession(@Param("idsession") Long idsession);
	 
	 @Query(value = "SELECT rh.lib1 ,idnom FROM session_eval as session inner join Rhnom rh ON rh.session_eval = session.id_session where session.id_session=:idsession", nativeQuery = true)
	    List<String> getEvaluateursSession(@Param("idsession") Long idsession);

}
