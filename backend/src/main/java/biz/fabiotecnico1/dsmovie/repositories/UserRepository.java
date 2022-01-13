package biz.fabiotecnico1.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import biz.fabiotecnico1.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);

}
