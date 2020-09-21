package com.team2.airbnb.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team2.airbnb.model.Room;
import com.team2.airbnb.service.RoomService;

@Controller
public class HomeController {	
	private final RoomService roomService;
	
	@Autowired
	public HomeController(RoomService roomService) {
		this.roomService = roomService;
	}

	@RequestMapping(value = "/room/{roomId}", method = RequestMethod.GET)
	public String room_detail(@PathVariable int roomId , Model model) {
		// 1. get user from session
		
		// 2. get room info
		 Room room = roomService.getRoomById(roomId);
		 model.addAttribute("room", room);
		 
		// 3. put info into model
		return "room_detail";
	}
	
	@RequestMapping(value = "/api/room/{roomId}", method=RequestMethod.GET)
	@ResponseBody
	public List<String> apiCall(HttpServletRequest request, @PathVariable int roomId) {
		return roomService.getReservedDatesById(roomId);
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