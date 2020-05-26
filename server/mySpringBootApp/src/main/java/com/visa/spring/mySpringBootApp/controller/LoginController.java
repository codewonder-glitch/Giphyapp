package com.visa.spring.mySpringBootApp.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.visa.spring.mySpringBootApp.model.User;
import com.visa.spring.mySpringBootApp.repository.UserRepository;

@RestController
@RequestMapping("/giphy/v1/login")
public class LoginController {

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/authenticate")
	public Map<String, Boolean> authenticateUser(@Valid @RequestBody User user) {

		String userName = user.getUserName();
		String password = user.getUserPassword();

		Map<String, Boolean> response = new HashMap<>();

		if (userName == null || userName.trim().equals(""))
			response.put("result", Boolean.FALSE);
		if (password == null || password.trim().equals(""))
			response.put("result", Boolean.FALSE);

		user = userRepository.findByuserName(userName);
		if (user == null)
			response.put("result", Boolean.FALSE);
		else if (!user.getUserPassword().equals(password))

			response.put("result", Boolean.FALSE);
		else
			response.put("result", Boolean.TRUE);
		return response;
	}

}
