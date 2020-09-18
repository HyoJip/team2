package com.team2.airbnb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.ReservationDao;
import com.team2.airbnb.model.reservation.User;

@Service
public class UserService {
	
	@Autowired
	private ReservationDao reservationDao;
	
	public List<User> getUserList() {
		return reservationDao.selectAll();
	}
}
