package com.team2.airbnb.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.team2.airbnb.dao.RoomDao;
import com.team2.airbnb.model.RoomPhoto;
import com.team2.airbnb.model.User;
import com.team2.airbnb.model.search.AllSearching;
import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.service.RoomService;
import com.team2.airbnb.service.UserService;
import com.team2.airbnb.util.Pagination;
import com.team2.airbnb.util.RegExpUtil;

@Controller
public class RoomController {	
	private final RoomService roomService;
	private final UserService userService;
	
	@Autowired
	public RoomController(RoomService roomService, UserService userService) {
		this.roomService = roomService;
		this.userService = userService;
	}
	
	@RequestMapping(value = "/myRoom", method = RequestMethod.GET)
	public String goToMyRoom(HttpSession session) {
		User user = (User) session.getAttribute("login");
		RoomVO room = roomService.getRoomByUserId(user.getId());
		int roomId = room.getId();
		return "redirect:/room/" + roomId;
	}

	@RequestMapping(value = "/room/{roomId}", method = RequestMethod.GET)
	public String roomDetail(@PathVariable int roomId , HttpSession session, Model model) {
		Map<String, Object> map = roomService.getRoomById(roomId);
		RoomVO room = (RoomVO) map.get("room");
		User host = (User) map.get("host");
		String[] files = (String[]) map.get("files");
		
		List<ReviewVO> reviews = roomService.getReviews(roomId);
		Map<String, Object> reviewCountAndAvg = roomService.getReviewCount(roomId);
		int count = (int) reviewCountAndAvg.get("count");
		double avg = (double) reviewCountAndAvg.get("avg");
		avg = Math.round(avg * 100)/ 100;
		
		model.addAttribute("room", room);
		model.addAttribute("reviews", reviews);
		model.addAttribute("count", count);
		model.addAttribute("avg", avg);
		model.addAttribute("host", host);
		model.addAttribute("files", files);
		
		return "room/room_detail";
	}
	
	@RequestMapping(value = "/room/create", method= RequestMethod.GET)
	public String roomCreate(HttpSession session) {
		User user = (User) session.getAttribute("login");
		if (user.getIsHost() == 1) {
			return "redirect:/host/"+ user.getId() + "/reservations";
		}
		return "room/room_form";
	}
	
	@RequestMapping(value = "/room/create", method= RequestMethod.POST)
	public String roomCreate(RoomVO room, HttpSession session, HttpServletRequest request, Model model) {
		User user = (User) session.getAttribute("login");
		room.setHostId(user.getId());
		room.setCreated(LocalDate.now());
		
		room.setFullAddress(request);
		String city = RegExpUtil.extractCity(request.getParameter("address1"));
		room.setCity(city);
		
		userService.setHost(user);
		int isSuccess = roomService.roomCreate(room);
		if (isSuccess == 1) {
			model.addAttribute("room", room);
			return "redirect:/room/create/photo";
		} else {	
			return "room/room_form";
		}		
	}
	
	@RequestMapping(value = "/room/create/photo", method= RequestMethod.GET)
	public String roomCreatePhoto(Model model, HttpSession session) {
			User user = (User) session.getAttribute("login");			
			RoomVO room = roomService.getRoomByUserId(user.getId());
			model.addAttribute("roomId", room.getId());
			return "room/room_photo_form";
	}
	
	@RequestMapping(value = "/room/create/photo", method = RequestMethod.POST)
	public String roomCreatePhoto(@RequestParam(required = true) int roomId,
			@RequestParam("file") MultipartFile[] files,
			Model model) throws IOException {
		Map<String, Object> map = roomService.createPhoto(roomId, files);
		
		model.addAttribute("msg", map.get("msg"));
		model.addAttribute("roomId", roomId);
		model.addAttribute("isValid", map.get("isValid"));			
		return "room/room_photo_form";
	}
	
	@RequestMapping(value = "/room/update", method = RequestMethod.GET)
	public String roomUpdate(Model model, HttpSession session) {
		User user = (User) session.getAttribute("login");
		RoomVO room = roomService.getRoomByUserId(user.getId());
		String[] addrArr = RegExpUtil.getSplitedAddr(room.getAddress());
		
		model.addAttribute("addrArr", addrArr);
		model.addAttribute("room", room);
		return "room/room_update_form";
	}
	
	@RequestMapping(value = "/room/update", method = RequestMethod.POST)
	public String roomUpdate(RoomVO room, HttpServletRequest request, Model model) {
		int isValid = roomService.updateRoom(room, request);
		
		if (isValid == 1) {
			return "redirect:/room/" + room.getId();
		}
		return "room/room_update_form";
	}
	
	@RequestMapping(value = "/room/delete", method = RequestMethod.POST)
	public String roomDelete(@RequestParam int id, HttpSession session, Model model) {
		Map<String, Object> map = roomService.deleteRoom(id);
		User user = (User) session.getAttribute("login");	
		
		int isValid = (int) map.get("isValid");
		if (isValid == 1) {
			userService.setHost(user);
		}
		
		model.addAllAttributes(map);
		return "room/delete_result";
	}
	
	@RequestMapping(value = "/room", method = RequestMethod.GET)
	public String roomList(Model model,
			@RequestParam(required = false, defaultValue = "1") int page,
			@RequestParam(required = false, defaultValue = "1") int range) {
		
		Map<String, Object> map = roomService.getAllPagedRoom(page, range);
		
		model.addAttribute("pagination", map.get("pagination"));
		model.addAttribute("rooms", map.get("rooms"));
		model.addAttribute("roomPhotos", map.get("roomPhotos"));
		return "room/room_list";
	}
	
	@RequestMapping(value = "/s/{keyword}", method = RequestMethod.GET)
	public String roomSearh(@PathVariable String keyword, Model model,
			@RequestParam(required = false, defaultValue = "1") int page,
			@RequestParam(required = false, defaultValue = "1") int range) throws UnsupportedEncodingException {
		// url로 한글 보낼 시 톰캣7.0 인코딩(8859-1) 후 스프링 web.xml(UTF-8) 인코딩 됨
		keyword = new String(keyword.getBytes("8859_1"), "utf-8");
		
		Map<String, Object> map = roomService.getAllPagedRoomByKeyword(page, range, keyword);
		
		model.addAttribute("pagination", map.get("pagination"));
		model.addAttribute("rooms", map.get("rooms"));
		model.addAttribute("roomPhotos", map.get("roomPhotos"));
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