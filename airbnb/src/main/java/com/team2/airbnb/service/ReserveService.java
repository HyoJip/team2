package com.team2.airbnb.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.ReserveDao;
import com.team2.airbnb.model.Reservation;
import com.team2.airbnb.model.ReserveStatus;
import com.team2.airbnb.model.vo.ReserveVO;
import com.team2.airbnb.util.DateUtil;

@Service
public class ReserveService {
	
	private final ReserveDao reserveDao;

	@Autowired
	public ReserveService(ReserveDao reserveDao) {
		this.reserveDao = reserveDao;
	}
	
	public int getReserveNight(String checkIn, String checkOut) {
		try {return DateUtil.getDateDiff(checkIn, checkOut);}
		catch (ParseException e) {e.printStackTrace(); return 0;}
	}
	
	public String getMinDateForFullRefund(String checkIn) {
		SimpleDateFormat dateFormat = DateUtil.getDateFormat();
		
		Calendar cal = Calendar.getInstance();
		try {cal.setTime(dateFormat.parse(checkIn));} catch (ParseException e) {e.printStackTrace();}
		cal.add(Calendar.DATE, -7);
		return dateFormat.format(cal.getTime());
	}

	public void book(Reservation reservation) {
		// 1. 상태, 예약생성일자 주입
		reservation.setStatus(ReserveStatus.PENDING);
		reservation.setCreated(LocalDate.now());
		// 2. INSERT
		reserveDao.insert(reservation);
	}

	public int approveReservation(int id, String status) {
		return reserveDao.updateStatus(id, status);
	}
	
	public int completeReservation(int id) {
		return reserveDao.updateStatus(id, "COMPLETED");
	}

	public List<ReserveVO> getListByUserId(int id) {
		List<ReserveVO> rooms = reserveDao.selectByUserId(id);
		return rooms;
	}

	public ReserveVO getReserve(int reserveId) {
		ReserveVO roomReserve = reserveDao.selectObject(reserveId);
		return roomReserve;
	}
	
	public int changeReserve(Reservation reservation) {
		return reserveDao.update(reservation);
	}

	public int doCancel(int reserveId) {
		// 1. 예약 STATUS PENDING -> CANCLE
		int statusIsChanged = reserveDao.updateStatus(reserveId, "CANCLED");
		// 2. 예약된 날짜(BookkedDay) 삭제
		int isDeleted = reserveDao.deleteBetweenDate(reserveId);
		if (statusIsChanged == 1 && isDeleted == 1) {
			return 1;
		}
		return 0;
	}
	
}
