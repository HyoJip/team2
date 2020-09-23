package com.team2.airbnb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.team2.airbnb.service.ReserveService;
import com.team2.airbnb.service.RoomService;
import com.team2.airbnb.service.UserService;

@Controller
public class UserController {

	private final UserService userService;
	private final RoomService roomService;
	private final ReserveService reserveService;
	
	@Autowired
	public UserController(UserService userService, RoomService roomService,
			ReserveService reserveService) {
		this.userService = userService;
		this.roomService = roomService;
		this.reserveService = reserveService;
	}

	@RequestMapping(value = "/user/{id}/reservations", method = RequestMethod.GET)
	public String userReservationList(@PathVariable int id, Model model) {
		reserveService.getListByUserId(id);
		
		return "reservation/user_reserve_list";
	}
}
