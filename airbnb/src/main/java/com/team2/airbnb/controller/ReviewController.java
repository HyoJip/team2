package com.team2.airbnb.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.team2.airbnb.model.Review;
import com.team2.airbnb.model.User;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.service.ReviewService;
import com.team2.airbnb.service.RoomService;

@Controller
public class ReviewController {
	private final ReviewService reviewService;
	private final RoomService roomService;

	public ReviewController(ReviewService reviewService, RoomService roomService) {
		this.reviewService = reviewService;
		this.roomService = roomService;
	}
	
	@RequestMapping(value = "/review/create/{roomId}", method = RequestMethod.GET)
	public String reviewForm(@PathVariable int roomId, HttpSession session, Model model) {
		User user = (User) session.getAttribute("login");
		RoomVO room = roomService.getRoomById(roomId);
		model.addAttribute("room", room);
		return "review/review_form";
	}
	
	@RequestMapping(value = "/review/create/{roomId}", method = RequestMethod.POST)
	public String reviewForm(@PathVariable int roomId, Review reviewReq, HttpSession session) {
		User user = (User) session.getAttribute("login");
		reviewReq.setUserId(user.getId());
		
		return "redirect:/";
	}
}