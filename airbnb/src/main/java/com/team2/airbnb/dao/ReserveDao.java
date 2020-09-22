package com.team2.airbnb.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.time.LocalDate;
import java.util.List;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.Reservation;
import com.team2.airbnb.model.RoomReserve;
import com.team2.airbnb.util.DateUtil;

@Repository
public class ReserveDao {
	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public ReserveDao(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	private void insertBetweenDate(int reserveId, LocalDate checkIn, LocalDate checkOut) {
		
		List<LocalDate> dateList = DateUtil.getDatesBetween(checkIn, checkOut);
		for (LocalDate date: dateList) {
			jdbcTemplate.update((Connection con)-> {
				String sql =
						"INSERT INTO reservations_bookedday(reservation_id, created , day) "
								+ "VALUES (?,?,?)";
				PreparedStatement pstmt = con.prepareStatement(sql);
				pstmt.setInt(1, reserveId);
				pstmt.setDate(2, Date.valueOf(LocalDate.now()));
				pstmt.setDate(3, Date.valueOf(date));
				return pstmt;
			});
			
		}
	}

	public void insert(Reservation reservation) {
		// 1. reservations_reservation 테이블에 INSERT
		KeyHolder keyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update((Connection con)-> {
			String sql =
					"INSERT INTO reservations_reservation(created, status, check_in, check_out, guest_id, room_id, guests)"
					+ "VALUES (?,?,?,?,?,?,?)";
			PreparedStatement pstmt = con.prepareStatement(sql, new String[] {"id"});
			pstmt.setDate(1, Date.valueOf(reservation.getCreated()));
			pstmt.setString(2, reservation.getStatus().toString());
			pstmt.setDate(3, Date.valueOf(reservation.getCheckIn()));
			pstmt.setDate(4, Date.valueOf(reservation.getCheckOut()));
			pstmt.setInt(5, reservation.getGuestId());
			pstmt.setInt(6, reservation.getRoomId());
			pstmt.setInt(7, reservation.getNumOfGuest());
			return pstmt;
		}, keyHolder);
		Number keyValue = keyHolder.getKey();
		reservation.setId(keyValue.intValue());
		// 2. reservations_bookedday 테이블에 INSERT
		insertBetweenDate(reservation.getId(), reservation.getCheckIn(), reservation.getCheckOut());
	}

	@SuppressWarnings("unchecked")
	public List<RoomReserve> selectAll(int id) {
		List<RoomReserve> results = jdbcTemplate.query((Connection con)-> {
			StringBuffer sql = new StringBuffer();
			sql.append("SELECT reserve.status, guest.username, reserve.check_in, reserve.check_out, reserve.created, reserve.guests, room.price, guest.email, reserve.id ");
			sql.append("FROM reservations_reservation reserve, rooms_room room, users_user guest ");
			sql.append("WHERE reserve.room_id=? ");
			sql.append("AND reserve.room_id = room.id ");
			sql.append("AND guest.id = reserve.guest_id ");
			sql.append("ORDER BY reserve.check_in");
			PreparedStatement pstmt = con.prepareStatement(sql.toString());
			pstmt.setInt(1, id);
			return pstmt;
		}, new BeanPropertyRowMapper(RoomReserve.class));
		return results;
	}

	public int updateStatus(int id, String status) {
		int isSuccessed = jdbcTemplate.update((Connection con)-> {
			String sql = "UPDATE reservations_reservation SET status = '?' WHERE id=?";
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, status);
			pstmt.setInt(2, id);
			return pstmt;
		});
		return isSuccessed;
	}

}