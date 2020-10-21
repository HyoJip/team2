package com.team2.airbnb.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.User;
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
	
	public User selectHost(int roomId) {
		String sql = "SELECT member.* FROM users_user member, rooms_room room WHERE member.id = room.host_id AND room.id = ?";
		return (User) jdbcTemplate.queryForObject(sql, new Object[] {roomId}, new BeanPropertyRowMapper<User>(User.class));
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
		sql.append("SELECT guest.username, reviews.created, reviews.review as context, reviews.value as rating, guest.photo ");
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

	public int insertRoom(RoomVO room) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		StringBuffer sql = new StringBuffer();
		sql.append("INSERT INTO rooms_room(host_id, name, created, description, city, price, address, beds, bedrooms, baths, check_in, check_out, guests) ");
		sql.append("VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
		int isSuccess = jdbcTemplate.update((Connection con) -> {
				PreparedStatement pstmt = con.prepareStatement(sql.toString(), new String[] {"id"});
				pstmt.setInt(1, room.getHostId());
				pstmt.setString(2, room.getName());
				pstmt.setDate(3, Date.valueOf(room.getCreated()));
				pstmt.setString(4, room.getDescription());
				pstmt.setString(5, room.getCity());
				pstmt.setInt(6, room.getPrice());
				pstmt.setString(7, room.getAddress());
				pstmt.setInt(8, room.getBeds());
				pstmt.setInt(9, room.getBedRooms());
				pstmt.setInt(10, room.getBaths());
				pstmt.setString(11, room.getCheckIn());
				pstmt.setString(12, room.getCheckOut());
				pstmt.setInt(13, room.getGuests());				
				return pstmt;
			}, keyHolder);
		int keyValue = keyHolder.getKey().intValue();
		room.setId(keyValue);
		return isSuccess;
	}

	public List<RoomVO> selectAllRoom() {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT room.id, room.host_id as hostId, room.name, room.updated, room.created, room.description, room.city, room.price, room.address, room.beds, room.bedrooms, room.baths, room.check_in as checkIn, room.check_out as checkOut, room.guests, count(*) as reviewCount, NVL(avg(reviews.value), 0) as reviewAvg ");
		sql.append("FROM rooms_room room, reviews(+) ");
		sql.append("WHERE room.id = reviews.room_id ");
		sql.append("GROUP BY room.id, room.host_id, room.name, room.updated, room.created, room.description, room.city, room.price, room.address, room.beds, room.bedrooms, room.baths, room.check_in, room.check_out, room.guests ");
		sql.append("ORDER BY created DESC");
		return jdbcTemplate.query(sql.toString(), new BeanPropertyRowMapper<RoomVO>(RoomVO.class));
	}

	public List<RoomVO> selectRoomsByAddrOrName(String keyword) {
		StringBuffer sql = new StringBuffer();
		keyword = "%" + keyword + "%";
		sql.append("SELECT room.id, room.host_id as hostId, room.name, room.updated, room.created, room.description, room.city, room.price, room.address, room.beds, room.bedrooms, room.baths, room.check_in as checkIn, room.check_out as checkOut, room.guests, count(*) as reviewCount, NVL(avg(reviews.value), 0) as reviewAvg ");
		sql.append("FROM rooms_room room, reviews ");
		sql.append("WHERE room.id = reviews.room_id(+) ");
		sql.append("AND (address LIKE ? OR name LIKE ?) ");
		sql.append("GROUP BY room.id, room.host_id, room.name, room.updated, room.created, room.description, room.city, room.price, room.address, room.beds, room.bedrooms, room.baths, room.check_in, room.check_out, room.guests ");
		sql.append("ORDER BY created DESC");
		return jdbcTemplate.query(sql.toString(), new Object[] {keyword, keyword}, new BeanPropertyRowMapper<RoomVO>(RoomVO.class));
	}
	
	
}
