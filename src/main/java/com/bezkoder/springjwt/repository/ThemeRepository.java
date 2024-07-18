package com.bezkoder.springjwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Themes;


@Repository
public interface ThemeRepository  extends JpaRepository<Themes,Long>{

	List<Themes> findByGrille(Long idGrille);

	/*
	 * @Query(nativeQuery = true, value =
	 * "select t.titre  from themes t join rhnom r on t.categorie_idnom=r.idnom where  t.categorie_idnom=idnom "
	 * )*/
	  // public List<Themes> findThemesByCategorie( @Param("idnom") Rhnom idnom );
	 
	
		/*
		 * @Modifying
		 * 
		 * @Query("UPDATE Themes t SET t.categorie = :categorie WHERE t.IdTheme = :idTheme"
		 * ) void setCategorieForTheme(@Param("categorie") Rhnom
		 * categorie, @Param("idTheme") Long idTheme);
		 */

	   
	//@Query("SELECT t FROM Themes t  WHERE t.categorie = :idn")
	//public List<Themes> getThemesByCategorie(@Param("idn") Long idn);
	//public  List<Themes> getByCategorie(Rhnom categorie);
	

}
