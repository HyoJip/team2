package com.team2.airbnb.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.RoomDao;
import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;

@Service
public class RoomService {

	private final RoomDao roomDao;

	@Autowired
	public RoomService(RoomDao roomDao) {
		this.roomDao = roomDao;
	}

	public RoomVO getRoomById(int roomId) {
		return roomDao.selectObject(roomId);
	}

	public List<Map<String, Object>> getReservedDatesById(int roomId) {
		return roomDao.selectAllReservedDate(roomId);
	}
	
	public List<ReviewVO> getReviews(int roomId) {
		return roomDao.selectAllReview(roomId);
	}

	public Map<String, Object> getReviewCount(int roomId) {
		return roomDao.selectReviewCount(roomId);
	}

	public int roomCreate(RoomVO room) {
		return roomDao.insertRoom(room);
	}

	public List<RoomVO> getAllRoom() {
		return roomDao.selectAllRoom();
	}

	public List<RoomVO> getRooms(String keyword) {
		return roomDao.selectRoomsByAddrOrName(keyword);
	}
}
