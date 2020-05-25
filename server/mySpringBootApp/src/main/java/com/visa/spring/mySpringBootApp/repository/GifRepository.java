package com.visa.spring.mySpringBootApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.visa.spring.mySpringBootApp.model.Gif;

@Repository
public interface GifRepository extends JpaRepository<Gif, Integer>{

}
