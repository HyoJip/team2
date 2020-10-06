package com.team2.airbnb.dao;

import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;

@Repository
public class RoomDao {

	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public RoomDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public RoomVO selectObject(int roomId) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT room.id, room.host_id as hostId, room.name, room.updated, room.created, room.description, room.city, room.price, room.address, room.beds, room.bedrooms, room.baths, room.check_in as checkIn, room.check_out as checkOut, room.instant_book as instantBook, room.guests, host.username, host.email, host.birthday ");
		sql.append("FROM rooms_room room, users_user host ");
		sql.append("WHERE room.id=? and room.host_id = host.id");
		return (RoomVO) jdbcTemplate.queryForObject(sql.toString(), new Object[] {roomId}, new BeanPropertyRowMapper<RoomVO>(RoomVO.class));
	}

	public List<Map<String, Object>> selectAllReservedDate(int roomId) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT day, reserve.status, reserve.id FROM reservations_bookedday day, reservations_reservation reserve ");
		sql.append("WHERE reserve.room_id =? ");
		sql.append("AND day.reservation_id = reserve.id ");
		sql.append("AND reserve.status in ('PENDING', 'ACCEPTED') ");
		
		List<Map<String, Object>> results = jdbcTemplate.query(sql.toString(), new Object[] {roomId}, (ResultSet rs, int rowNum)-> {
			Map<String, Object> data = new HashMap<String, Object>();
			data.put("day", rs.getDate("DAY").toString());
			data.put("reserveId", rs.getInt("ID"));
			data.put("status", rs.getString("STATUS"));
			return data;
		});
				
		return results;
	}

	public List<ReviewVO> selectAllReview(int roomId) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT guest.username, reviews.created, reviews.review as context, reviews.value as rating ");
		sql.append("FROM users_user guest, reviews ");
		sql.append("WHERE guest.id = reviews.user_id ");
		sql.append("AND reviews.room_id = ?");
		return jdbcTemplate.query(sql.toString(), new Object[] {roomId}, new BeanPropertyRowMapper<ReviewVO>(ReviewVO.class));
	}

	public Map<String, Object> selectReviewCount(int roomId) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT count(*) as count, avg(value) as avg FROM reviews WHERE room_id = ?");
		return jdbcTemplate.queryForObject(sql.toString(), new Object[] {roomId}, (ResultSet rs, int rowNum)-> {
			Map<String, Object> data = new HashMap<String, Object>();
			data.put("count", rs.getInt("count"));
			data.put("avg", rs.getDouble("avg"));
			return data;
		});
	}
	
	
}
