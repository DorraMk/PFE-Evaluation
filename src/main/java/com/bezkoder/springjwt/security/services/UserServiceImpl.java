package com.bezkoder.springjwt.security.services;



import java.sql.Types;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.bezkoder.springjwt.models.Utilisateur;
import com.bezkoder.springjwt.repository.UserRepository;





@Service
public class UserServiceImpl implements UserService {
	//final static Logger logger = Logger.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserRepository repo;

	@Override
	public Optional<Utilisateur> findByIdentifiant(String identifiant) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(Utilisateur user) {
		// TODO Auto-generated method stub
		
	}

	

	@Override
	public List<Utilisateur> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public List<Utilisateur> findByFlgVal(Boolean x) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByflgStatutAndGradeOrderByUsrNomprenomAsc(String statut, Long grade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgCons(Boolean flgCons) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByflgStatut(String flgStatut) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByflgStatutOrderByUsrNomprenomAsc(String string) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Utilisateur getByUsrMatricule(String usrMatricule) {
		return userRepository.findByUsrMatricule(usrMatricule);
	}

	@Override
	public Utilisateur findOneByUsrMatricule(String usrMatricule) {
		return null;
				//userRepository.findOneByUsrMatricule(usrMatricule);
	}

	@Override
	public List<Utilisateur> findByFlgConsAndFlgStatut(Boolean flgCons, String statut) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgRegie(Boolean flgRegie) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByUsrMatriculeAndFlgRegie(String usrMatricule, Boolean flgRegie) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgStatutAndMatriculeAssNotNull(String flgStatut) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgStatutAndMatriculeAssIsNull(String flgStatut) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Utilisateur> findByMatriculeAss(String matriculeAss) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgStatutAndFlgRegie(String flgStatut, Boolean flgRegie) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgStatutAndFlgRegieAndFlgCons(String flgStatut, Boolean flgRegie, Boolean flgcons) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgStatutIn(Collection<String> FlgStatuts) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateUser(Utilisateur user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Utilisateur> findByflgStatutOrderByUsrMatriculeAsc(String statut) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByflgStatutAndFlgRegieOrderByUsrNomprenomAsc(String statut, Boolean flgRegie) {
		// TODO Auto-generated method stub
		return null;
	}
	   

	

	
/*
	@Override
	@Transactional(readOnly = true)
	public Optional<Utilisateur> findByIdentifiant(String identifiant) {
		return userRepository.findById(identifiant);
	}

	
	 * @Override
	 * 
	 * @Transactional(readOnly = false) public void updateUser(Utilisateur user) {
	 * userRepository.save(user);
	 * 
	 * }
	 * 
	 * @Override
	 * 
	 * @Transactional public void deleteUser(Utilisateur user) {
	 * userRepository.delete(user); }
	 

	@Override
	@Transactional(readOnly = true)
	public List<Utilisateur> findByGroupe(Groupe grp) {
		return userRepository.findByGroupe(grp);
	}

	/*
	 * @Override
	 * 
	 * @Transactional(readOnly = true) public List<Utilisateur> findAll() { return
	 * userRepository.findAll(); }
	 * 
	 * @Override
	 * 
	 * @Transactional(readOnly = true) public List<Utilisateur> findByFlgVal(Boolean
	 * flgVal) { return userRepository.findByFlgVal(flgVal);
	 * 
	 * }
	 



	@Override
	public List<Utilisateur> findByFlgCons(Boolean flgCons) {

		return userRepository.findByFlgCons(flgCons);
	}

	@Override
	public List<Utilisateur> findByflgStatut(String flgStatut) {
		return userRepository.findByflgStatutOrderBySoldeCongeDesc(flgStatut);
	}

	@Override
	public List<Utilisateur> findByflgStatutOrderByUsrNomprenomAsc(String statut) {

		return userRepository.findByflgStatutOrderByUsrNomprenomAsc(statut);
	}
	
	@Override
	public List<Utilisateur> findByflgStatutAndGradeOrderByUsrNomprenomAsc(String statut,Long grade) {

		return userRepository.findByflgStatutAndGradeOrderByUsrNomprenomAsc(statut,grade);
	}
	
	
	@Override
	public List<Utilisateur> findByflgStatutOrderByUsrMatriculeAsc(String statut) {

		return userRepository.findByflgStatutOrderByUsrMatriculeAsc(statut);
	}

	@Override
	public List<Utilisateur> findByUsrMatricule(String usrMatricule) {
		return userRepository.findByUsrMatricule(usrMatricule);
	}

	@Override
	public Utilisateur findOneByUsrMatricule(String usrMatricule) {
		return userRepository.findUtilisateurByusrMatricule(usrMatricule);
	}

	@Override
	public List<Utilisateur> findByFlgConsAndFlgStatut(Boolean flgCons, String statut) {
		return userRepository.findByFlgConsAndFlgStatut(flgCons, statut);
	}

	@Override
	public List<Utilisateur> findByFlgRegie(Boolean flgRegie) {
		return userRepository.findByFlgRegie(flgRegie);
	}

	@Override
	public List<Utilisateur> findByUsrMatriculeAndFlgRegie(String usrMatricule, Boolean flgRegie) {
		return userRepository.findByUsrMatriculeAndFlgRegie(usrMatricule, flgRegie);
	}

	@Override
	public List<Utilisateur> findByFlgStatutAndMatriculeAssNotNull(String flgStatut) {
		return userRepository.findByFlgStatutAndMatriculeAssNotNull(flgStatut);
	}

	@Override
	public List<Utilisateur> findByFlgStatutAndMatriculeAssIsNull(String flgStatut) {
		return userRepository.findByFlgStatutAndMatriculeAssIsNull(flgStatut);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<Utilisateur> findByMatriculeAss(String matriculeAss) {
		return userRepository.findByMatriculeAss(matriculeAss);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Utilisateur> findByFlgStatutAndFlgRegie(String flgStatut, Boolean flgRegie) {
		return userRepository.findByFlgStatutAndFlgRegie(flgStatut, flgRegie);
	}
	@Override
	@Transactional(readOnly = true)
	public List<Utilisateur> findByFlgStatutAndFlgRegieAndFlgCons(String flgStatut, Boolean flgRegie,Boolean flgcons) {
		return userRepository.findByFlgStatutAndFlgRegieAndFlgCons(flgStatut, flgRegie,flgcons);
	}
	

	@Override
	public List<Utilisateur> findByFlgStatutIn(Collection<String> FlgStatuts) {

		return userRepository.findByFlgStatutIn(FlgStatuts);
	}

	

	
	
	@Override
	public List<Utilisateur> findByflgStatutAndFlgRegieOrderByUsrNomprenomAsc(String statut, Boolean flgRegie) {
		return userRepository.findByflgStatutAndFlgRegieOrderByUsrNomprenomAsc( statut,  flgRegie);
	}

	@Override
	public Optional<Utilisateur> findByIdentifiant(String identifiant) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(Utilisateur user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Utilisateur> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utilisateur> findByFlgVal(Boolean x) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateUser(Utilisateur user) {
		// TODO Auto-generated method stub
		
	}

	/*
	 * @Override public void checkUserFailure(String username) { // TODO
	 * Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public void assignerNouvMatricule(Utilisateur utilisateur, String
	 * nouveauMatricule) { // TODO Auto-generated method stub
	 * 
	 * }
	 * 
	 * @Override public Collection<String> getAuthorities() { // TODO Auto-generated
	 * method stub return null; }
	 */


 
}
