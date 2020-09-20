package com.team2.airbnb.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.team2.airbnb.model.Room;
import com.team2.airbnb.service.RoomService;

@Controller
public class HomeController {	
	private final RoomService roomService;
	
	@Autowired
	public HomeController(RoomService roomService) {
		this.roomService = roomService;
	}

	@RequestMapping(value = "/room/detail/{roomId}", method = RequestMethod.GET)
	public String room_detail(@PathVariable int roomId , Model model) {
		// 1. get user from session
		
		// 2. get room info from database: room, room.bookedday
		 Room room = roomService.getRoomById(roomId);
		 model.addAttribute("room", room);
		 List<LocalDate> reservedDateList = roomService.getReservedDatesById(roomId);
		 model.addAttribute("reservedDateList", reservedDateList);
		// 3. put info into model
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