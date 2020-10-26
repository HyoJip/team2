package com.team2.airbnb.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.team2.airbnb.model.Review;
import com.team2.airbnb.model.User;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.service.ReserveService;
import com.team2.airbnb.service.ReviewService;
import com.team2.airbnb.service.RoomService;

@Controller
public class ReviewController {
	private final ReviewService reviewService;
	private final RoomService roomService;
	private final ReserveService reserveService;

	public ReviewController(ReviewService reviewService, RoomService roomService, ReserveService reserveService) {
		this.reviewService = reviewService;
		this.roomService = roomService;
		this.reserveService = reserveService;
	}
	
	@RequestMapping(value = "/review/create/{roomId}", method = RequestMethod.GET)
	public String reviewForm(@PathVariable int roomId, @RequestParam int reserveId, Model model) {
		Map<String, Object> map = roomService.getRoomById(roomId);
		RoomVO room = (RoomVO) map.get("room");
		String[] files = (String[]) map.get("files");
		
		model.addAttribute("room", room);
		model.addAttribute("reserveId", reserveId);
		model.addAttribute("roomPhoto", files[0]);
		return "review/review_form";
	}
	
	@RequestMapping(value = "/review/create/{roomId}", method = RequestMethod.POST)
	public String reviewForm(@PathVariable int roomId, @RequestParam int reserveId, Review reviewReq, HttpSession session) {
		User user = (User) session.getAttribute("login");
		reviewReq.setUserId(user.getId());
		reviewReq.setRoomId(roomId);
		
		int isSuccessed = reviewService.createReview(reviewReq);
		if (isSuccessed == 1) {
			reserveService.completeReservation(reserveId);
			return "redirect:/room/" + roomId;
		}
		return "redirect:/";
	}
}