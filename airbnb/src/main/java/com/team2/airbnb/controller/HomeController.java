package com.team2.airbnb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.team2.airbnb.service.UserService;

@Controller
public class HomeController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/test", method = RequestMethod.GET)
	public String test(Model model) {
		model.addAttribute("userList", userService.getUserList());
		return "test";
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String room_detail(Model model) {
		return "room_detail";
	}
	
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model) {
		return "user/login";
	}
	
	@RequestMapping(value = "/memberjoin", method = RequestMethod.GET)
	public String memberjoin(Model model) {
		return "user/memberjoin";
	}

	
}