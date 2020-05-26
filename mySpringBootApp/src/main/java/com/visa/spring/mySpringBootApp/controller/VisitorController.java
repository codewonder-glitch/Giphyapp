package com.visa.spring.mySpringBootApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.visa.spring.mySpringBootApp.model.Visitor;
import com.visa.spring.mySpringBootApp.repository.VisitorRepository;

@RestController
@RequestMapping("/giphy/v1/visitor")
public class VisitorController {

	@Autowired
	private VisitorRepository visitorRepository;

	@GetMapping("/count")
	public int getAllVisitorcount() {

		Visitor visitor =visitorRepository.findAll().get(0);

		incrementCount(visitor);
		return visitor.getCount();

	}

	public void incrementCount(Visitor visitor) {
		int count = visitor.getCount() + 1;
		visitor.setCount(count);
		this.visitorRepository.save(visitor);
	}

}