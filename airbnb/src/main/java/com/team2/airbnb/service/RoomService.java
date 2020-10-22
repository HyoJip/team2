package com.team2.airbnb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.RoomDao;
import com.team2.airbnb.model.User;
import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.util.Pagination;

@Service
public class RoomService {

	private final RoomDao roomDao;

	@Autowired
	public RoomService(RoomDao roomDao) {
		this.roomDao = roomDao;
	}

	public Map<String, Object> getRoomById(int roomId) {
		Map map = new HashMap<String, Object>();
		
		User host = roomDao.selectHost(roomId);
		RoomVO room = roomDao.selectObject(roomId);
		
		map.put("host", host);
		map.put("room", room);
		return map;
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

	public List<RoomVO> getAllRoom(Pagination pagination) {
		return roomDao.selectAllRoom(pagination);
	}

	public List<RoomVO> getRooms(Pagination pagination, String keyword) {
		return roomDao.selectRoomsByAddrOrName(pagination, keyword);
	}
	
	public int getCountAll() {
		return roomDao.selectCountAll();
	}
	
	public int getCount(String keyword) {
		return roomDao.selectCount(keyword);
	}
}
