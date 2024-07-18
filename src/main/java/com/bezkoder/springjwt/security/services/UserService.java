package com.bezkoder.springjwt.security.services;



import java.util.Collection;
import java.util.List;
import java.util.Optional;


import com.bezkoder.springjwt.models.Utilisateur;

//import org.springframework.stereotype.Service;


public interface UserService {

	public Optional<Utilisateur> findByIdentifiant(String identifiant);

	public void deleteUser(Utilisateur user);

	//public List<Utilisateur> findByGroupe(Groupe grp);

	public List<Utilisateur> findAll();
	
	//public List<String> findAllNames();

	public List<Utilisateur> findByFlgVal(Boolean x);

	//public void checkUserFailure(String username);
	
	public List<Utilisateur> findByflgStatutAndGradeOrderByUsrNomprenomAsc(String statut,Long grade);

	public List<Utilisateur> findByFlgCons(Boolean flgCons);

	public List<Utilisateur> findByflgStatut(String flgStatut);

	public List<Utilisateur> findByflgStatutOrderByUsrNomprenomAsc(String string);

	public Utilisateur getByUsrMatricule(String usrMatricule);
	
    public Utilisateur findOneByUsrMatricule(String usrMatricule);
	
	public List<Utilisateur> findByFlgConsAndFlgStatut(Boolean flgCons, String statut);

	public List<Utilisateur> findByFlgRegie(Boolean flgRegie);

	public List<Utilisateur> findByUsrMatriculeAndFlgRegie(String usrMatricule, Boolean flgRegie);

	public List<Utilisateur> findByFlgStatutAndMatriculeAssNotNull(String flgStatut);

	public List<Utilisateur> findByFlgStatutAndMatriculeAssIsNull(String flgStatut);
	
	public Optional<Utilisateur> findByMatriculeAss(String matriculeAss);

	public List<Utilisateur> findByFlgStatutAndFlgRegie(String flgStatut,Boolean flgRegie);
	
	public List<Utilisateur> findByFlgStatutAndFlgRegieAndFlgCons(String flgStatut, Boolean flgRegie,Boolean flgcons);
	
	public List<Utilisateur> findByFlgStatutIn(Collection<String> FlgStatuts);

	public void updateUser(Utilisateur user);
	
	//public void assignerNouvMatricule(Utilisateur utilisateur,String nouveauMatricule);

	public List<Utilisateur> findByflgStatutOrderByUsrMatriculeAsc(String statut);

	
	public List<Utilisateur> findByflgStatutAndFlgRegieOrderByUsrNomprenomAsc(String statut, Boolean flgRegie);

	//public Collection<String> getAuthorities();

	
	

	
}