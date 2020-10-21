package com.team2.airbnb.controller;

import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team2.airbnb.model.User;
import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.service.RoomService;
import com.team2.airbnb.service.UserService;

@Controller
public class RoomController {	
	private final RoomService roomService;
	private final UserService userService;
	
	@Autowired
	public RoomController(RoomService roomService, UserService userService) {
		this.roomService = roomService;
		this.userService = userService;
	}

	@RequestMapping(value = "/room/{roomId}", method = RequestMethod.GET)
	public String roomDetail(@PathVariable int roomId , HttpSession session, Model model) {
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
		
		return "room/room_detail";
	}
	
	@RequestMapping(value = "/room/create", method= RequestMethod.GET)
	public String roomCreate() {
		return "room/room_form";
	}
	
	@RequestMapping(value = "/room/create", method= RequestMethod.POST)
	public String roomCreate(RoomVO room, HttpSession session, HttpServletRequest request, Model model) {
		User user = (User) session.getAttribute("login");
		room.setHostId(user.getId());
		room.setCreated(LocalDate.now());
		
		StringBuffer addrBuffer = new StringBuffer();
		addrBuffer.append(request.getParameter("address1"));
		addrBuffer.append(request.getParameter("address2"));
		addrBuffer.append(request.getParameter("address3"));
		room.setAddress(addrBuffer.toString());
		
		userService.setHost(user);
		int isSuccess = roomService.roomCreate(room);
		if (isSuccess == 1) {
			model.addAttribute("room", room);
			return "room/room_photo_form";
		}
		
		return "room/room_form";
	}
	
	@RequestMapping(value = "/room", method= RequestMethod.GET)
	public String roomList(Model model) {
		List<RoomVO> rooms = roomService.getAllRoom();
		model.addAttribute("rooms", rooms);
		return "room/room_list";
	}
	
	@RequestMapping(value = "/s/{keyword}", method = RequestMethod.GET)
	public String roomSearh(@PathVariable String keyword, Model model) throws UnsupportedEncodingException {
		// url로 한글 보낼 시 톰캣7.0 인코딩(8859-1) 후 스프링 web.xml(UTF-8) 인코딩 됨
		keyword = new String(keyword.getBytes("8859_1"), "utf-8");
		List<RoomVO> rooms = roomService.getRooms(keyword);
		model.addAttribute("rooms", rooms);
		model.addAttribute("keyword", keyword);
		return "room/room_list";
	}
	
	//////////////////////////////////////////// API
	@RequestMapping(value = "/api/room/{roomId}", method=RequestMethod.GET)
	@ResponseBody
	public List<Map<String, Object>> apiCall(@PathVariable int roomId) {
		return roomService.getReservedDatesById(roomId);
	}
}