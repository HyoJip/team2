package com.team2.airbnb.dao;

import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.Room;
import com.team2.airbnb.model.RoomReserve;

@Repository
public class RoomDao {

	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public RoomDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public Room selectObject(int roomId) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT id, host_id as hostId, name, updated, created, description, city, price, address, beds, bedrooms, baths, check_in as checkIn, check_out as checkOut, instant_book as instantBook, guests ");
		sql.append("FROM rooms_room ");
		sql.append("WHERE id=?");
		return (Room) jdbcTemplate.queryForObject(sql.toString(), new Object[] {roomId}, new BeanPropertyRowMapper<Room>(Room.class));
	}

	public List<Map<String, Object>> selectAllReservedDate(int roomId) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT day, reserve.status FROM reservations_bookedday day, reservations_reservation reserve ");
		sql.append("WHERE reserve.room_id =? ");
		sql.append("AND day.reservation_id = reserve.id ");
		sql.append("AND reserve.status in ('PENDING', 'ACCEPTED') ");
		
		List<Map<String, Object>> results = jdbcTemplate.query(sql.toString(), new Object[] {roomId}, (ResultSet rs, int rowNum)-> {
			Map<String, Object> data = new HashMap<String, Object>();
			data.put("day", rs.getDate("DAY").toString());
			data.put("status", rs.getString("STATUS"));
			return data;
		});
				
		return results;
	}
	
	
}
