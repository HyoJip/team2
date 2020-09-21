package com.team2.airbnb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.RoomDao;
import com.team2.airbnb.model.Room;

@Service
public class RoomService {
	
	private final RoomDao roomDao;

	@Autowired
	public RoomService(RoomDao roomDao) {
		this.roomDao = roomDao;
	}

	public Room getRoomById(int roomId) {
		return roomDao.selectObject(roomId);
	}

	public List<String> getReservedDatesById(int roomId) {
		return roomDao.selectAllReservedDate(roomId);
	}
	
	
	
}
