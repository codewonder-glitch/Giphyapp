package com.visa.spring.mySpringBootApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.visa.spring.mySpringBootApp.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByuserName(String userName);

}
