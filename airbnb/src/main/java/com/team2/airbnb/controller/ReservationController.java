package com.team2.airbnb.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

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
import com.team2.airbnb.model.User;
import com.team2.airbnb.model.vo.ReserveVO;
import com.team2.airbnb.model.vo.RoomVO;
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
	public String reserve(Model model,
			@PathVariable int id,
			@RequestParam(value = "checkIn") String checkIn,
			@RequestParam(value = "checkOut") String checkOut,
			@RequestParam(value = "numOfGuest") int numOfGuest,
			@RequestParam(value = "roomPrice") int roomPrice) {

		int reserveNight = reserveService.getReserveNight(checkIn, checkOut);
		String minDateForFullRefund = reserveService.getMinDateForFullRefund(checkIn);
		int totalPrice = roomPrice * reserveNight;
		
		// DB에 저장된 정보
		RoomVO room = roomService.getRoomById(id);
		model.addAttribute("room", room);
		
		// 게스트가 입력한  정보
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

	@RequestMapping(value = "/room/{roomId}/reserve", method = RequestMethod.POST)
	public String reserve(Reservation reserveReq, @PathVariable int roomId, HttpSession session) {
		try {
			// 1. 세션에서 guestID 주입
			User user = (User) session.getAttribute("login");
			reserveReq.setGuestId(user.getId());
			// 2. roomID 주입
			reserveReq.setRoomId(roomId);
			// 3. 예약서비스 실행
			reserveService.book(reserveReq);
			return "redirect:/user/" + user.getId() + "/reservations/" + reserveReq.getId();
		} catch (Exception e) {
			e.printStackTrace();
			return "room_detail";
		}
	}
	
	@RequestMapping(value = "/host/{hostId}/reservations", method = RequestMethod.GET)
	public String reserveList(@PathVariable int hostId, HttpSession session, Model model) {
		// 본인인지 확인
			User user = (User) session.getAttribute("login");
			if (user.getId() != hostId)
				return "redirect:/";
		// 본인 숙소 예약 리스트 GET
			List<ReserveVO> list = reserveDao.selectByHostId(hostId);
			for (ReserveVO reserve: list) {
				changeStatusToCancledIfAfterToday(reserve);
			}
			model.addAttribute("reserveList", list);
		return "reservation/room_reserve_list";
	}
	
	@RequestMapping(value = "/user/{userId}/reservations/{reserveId}", method = RequestMethod.GET)
	public String reserveDetail(@PathVariable int userId, @PathVariable int reserveId, Model model) {
		// 1. 예약 정보 GET
		ReserveVO roomReserve = reserveService.getReserve(reserveId);
		// 2. 환불 금액 계산
		double refundPrice;
		if (LocalDate.now().isAfter(roomReserve.getCheckIn().minus(7, ChronoUnit.DAYS))) {
			refundPrice = roomReserve.getPrice() * 0.5;
		} else {
			refundPrice = roomReserve.getPrice();
		}
		model.addAttribute("reserve", roomReserve);
		model.addAttribute("refundPrice", refundPrice);
		return "reservation/reserve_detail";
	}
	
	@RequestMapping(value = "/user/{userId}/reservations/{reserveId}", method = RequestMethod.POST)
	public String reserveUpdate(Reservation reserveReq, @PathVariable int userId, @PathVariable int reserveId) {
		reserveReq.setId(reserveId);
		reserveReq.setGuestId(userId);
		reserveReq.setUpdated(LocalDate.now());
		int isValid = reserveService.changeReserve(reserveReq);
		if (isValid == 1) {
			return "redirect:/user/" + userId + "/reservations/" + reserveId;
		}
		return "redirect:/user/" + userId + "/reservations";
	}
	
	@RequestMapping(value = "/user/{userId}/reservations/{reserveId}/cancel", method = RequestMethod.POST)
	public String reserveDelete(@RequestParam(value = "checkIn") String CheckIn, @PathVariable int userId, @PathVariable int reserveId, HttpSession session) {
		// 1. 권한 확인
		User user = (User) session.getAttribute("login");
		if (userId == user.getId()) {
			// 2. 하루전(+당일) 예약 취소 불가 확인
			if (LocalDate.now().isBefore(LocalDate.parse(CheckIn).minus(2, ChronoUnit.DAYS))) {
				reserveService.doCancel(reserveId);
				return "redirect:/user/" + userId + "/reservations";
			} else {
				return "redirect:/user/" + userId + "/reservations/" + reserveId + "?error=outOfDate";
			}
			// 3. 취소
		}
		return "redirect:/";
	}
	
	@RequestMapping(value = "/user/{id}/reservations", method = RequestMethod.GET)
	public String userReservationList(@PathVariable int id, HttpSession session, Model model) {
		User user = (User) session.getAttribute("login");
		if (user.getId() == id) {
			List<ReserveVO> rooms = reserveService.getListByUserId(id);
			
			for (ReserveVO reserve: rooms) {
				changeStatusToCompletedIfAfter2Weeks(reserve);
				changeStatusToCancledIfAfterToday(reserve);
			}
			model.addAttribute("rooms", rooms);
			
			return "reservation/user_reserve_list";			
		}
		return "redirect:/";
	}
	
	private void changeStatusToCompletedIfAfter2Weeks(ReserveVO reserve) {
		if (reserve.getStatus().equals(ReserveStatus.ACCEPTED)) {
			if (LocalDate.now().isAfter(reserve.getCheckOut().plusDays(14))) {
				reserveDao.updateStatus(reserve.getId(), "COMPLETED");
			}
		}
	}
	
	private void changeStatusToCancledIfAfterToday(ReserveVO reserve) {
		if (reserve.getStatus().equals(ReserveStatus.PENDING) || reserve.getStatus().equals(ReserveStatus.REFUSED)) {
			if (LocalDate.now().isAfter(reserve.getCheckIn())) {
				reserveDao.updateStatus(reserve.getId(), "CANCLED");
			}
		}
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
