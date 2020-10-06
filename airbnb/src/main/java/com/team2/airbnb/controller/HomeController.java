package com.team2.airbnb.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.service.RoomService;

@Controller
public class HomeController {	
	private final RoomService roomService;
	
	@Autowired
	public HomeController(RoomService roomService) {
		this.roomService = roomService;
	}

	@RequestMapping(value = "/room/{roomId}", method = RequestMethod.GET)
	public String room_detail(@PathVariable int roomId , HttpSession session, Model model) {
		RoomVO room = roomService.getRoomById(roomId);
		List<ReviewVO> reviews = roomService.getReviews(roomId);
		Map<String, Object> reviewCountAndAvg = roomService.getReviewCount(roomId);
		int count = (int) reviewCountAndAvg.get("count");
		double avg = (double) reviewCountAndAvg.get("avg");
		avg = Math.round(avg * 100)/ 100;
		
		model.addAttribute("room", room);
		model.addAttribute("reviews", reviews);
		model.addAttribute("count", count);
		model.addAttribute("avg", avg);
		
		return "room_detail";
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Model model) {
		return "main";
	}
	
	
	//////////////////////////////////////////// API
	@RequestMapping(value = "/api/room/{roomId}", method=RequestMethod.GET)
	@ResponseBody
	public List<Map<String, Object>> apiCall(@PathVariable int roomId) {
		return roomService.getReservedDatesById(roomId);
	}
}