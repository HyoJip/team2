package com.team2.airbnb.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team2.airbnb.dao.ReserveDao;
import com.team2.airbnb.model.Reservation;
import com.team2.airbnb.model.ReserveStatus;
import com.team2.airbnb.model.Room;
import com.team2.airbnb.model.RoomReserve;
import com.team2.airbnb.service.ReserveService;
import com.team2.airbnb.service.RoomService;
import com.team2.airbnb.util.NumberUtil;

@Controller
public class ReservationController {

	private final ReserveService reserveService;
	private final ReserveDao reserveDao;
	private final RoomService roomService;

	@Autowired
	public ReservationController(ReserveService reserveService, ReserveDao reserveDao, RoomService roomService) {
		this.reserveService = reserveService;
		this.reserveDao = reserveDao;
		this.roomService = roomService;
	}

	@RequestMapping(value = "/room/{id}/reserve", method = RequestMethod.GET)
	public String reserveGet(Model model,
			@PathVariable int id,
			@RequestParam(value = "checkIn") String checkIn,
			@RequestParam(value = "checkOut") String checkOut,
			@RequestParam(value = "numOfGuest") int numOfGuest,
			@RequestParam(value = "roomPrice") int roomPrice) {

		int reserveNight = reserveService.getReserveNight(checkIn, checkOut);
		String minDateForFullRefund = reserveService.getMinDateForFullRefund(checkIn);
		int totalPrice = roomPrice * reserveNight;
		Room room = roomService.getRoomById(id);
		model.addAttribute("room", room);
		
		model.addAttribute("checkIn", checkIn);
		model.addAttribute("checkOut", checkOut);
		model.addAttribute("numOfGuest", numOfGuest);
		model.addAttribute("reserveNight", reserveNight);
		model.addAttribute("minDateForFullRefund", minDateForFullRefund);
		model.addAttribute("roomPrice", NumberUtil.wonFormatter.format(roomPrice));
		model.addAttribute("totalPrice", NumberUtil.wonFormatter.format(totalPrice));
		model.addAttribute("finalPrice", NumberUtil.wonFormatter.format(totalPrice + 5000));

		return "reservation/reserve_form";
	}

	@RequestMapping(value = "/room/{id}/reserve", method = RequestMethod.POST)
	public String reservePost(Reservation reserveReq, @PathVariable int id) {
		try {
			// 1. roomID 주입
			reserveReq.setRoomId(id);
			// 2. 세션에서 guestID 주입
			reserveReq.setGuestId(1);
			// 3. 예약서비스 실행
			reserveService.book(reserveReq);
			return "redirect:/room/" + id + "/reservations";
		} catch (Exception e) {
			e.printStackTrace();
			return "room_detail";
		}
	}
	
	@RequestMapping(value = "/room/{id}/reservations", method = RequestMethod.GET)
	public String reserveList(@PathVariable int id, Model model) {
			List<RoomReserve> list = reserveDao.selectAll(id);
			model.addAttribute("reserveList", list);
		return "reservation/room_reserve_list";
	}
	
	
	
	//////////////////////////////////// API
	@RequestMapping(value = "/api/reserve/{id}", method = RequestMethod.PATCH)
	@ResponseBody
	public Map<String, Object> approveReserve(@PathVariable int id, @RequestBody Map<String, Object> request) {
		String status = request.get("status").toString();
		int isVaild = reserveService.approveReservation(id, status);
		Map<String, Object> response = new HashMap<>();
		if (isVaild == 1) {
			response.put("status", status);
			response.put("statusName", ReserveStatus.valueOf(status).getName());
		}
		return response;
	}
}
