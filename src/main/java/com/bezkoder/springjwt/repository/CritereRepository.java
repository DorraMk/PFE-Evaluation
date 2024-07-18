package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Critere;



@Repository
public interface CritereRepository  extends JpaRepository<Critere,Long>{
	
	/*@Query(nativeQuery = true, value = "SELECT * "
			+ "FROM critere c "
			+ "JOIN themes t ON c.id_theme = t.ID_THEME where c.id_theme=:idtheme")
	public List<Critere> getCritereByTheme( @Param("idtheme") Long idtheme);*/

	public List<Critere> getByTheme(Long idtheme);

}
