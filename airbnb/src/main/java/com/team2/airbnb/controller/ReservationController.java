package com.team2.airbnb.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team2.airbnb.dao.ReserveDao;
import com.team2.airbnb.model.Reservation;
import com.team2.airbnb.model.RoomReserve;
import com.team2.airbnb.service.ReserveService;
import com.team2.airbnb.util.NumberUtil;

@Controller
public class ReservationController {

	private final ReserveService reserveService;
	private final ReserveDao reserveDao;

	@Autowired
	public ReservationController(ReserveService reserveService, ReserveDao reserveDao) {
		this.reserveService = reserveService;
		this.reserveDao = reserveDao;
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
			return "redirect:/user/" + id + "/reservations";
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
	
	@RequestMapping(value = "/api/reserve/patch/{id}", method = RequestMethod.GET)
	@ResponseBody
	public int approveReserve(@PathVariable int id, HttpServletRequest request) {
		String status = request.getParameter("status");
		reserveService.approveReservation(id, status);
		return reserveService.approveReservation(id, status);
	}
}
