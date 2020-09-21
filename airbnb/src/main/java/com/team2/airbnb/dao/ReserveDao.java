package com.team2.airbnb.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDate;
import java.util.List;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.Reservation;
import com.team2.airbnb.model.ReserveList;
import com.team2.airbnb.model.ReserveStatus;
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

	public List<ReserveList> selectAll(int id) {
		List<ReserveList> results = jdbcTemplate.query((Connection con)-> {
			StringBuffer sql = new StringBuffer();
			sql.append("SELECT reserve.status, room.name, room.address, reserve.check_in, reserve.check_out, reserve.created, reserve.guests, room.price ");
			sql.append("FROM reservations_reservation reserve, rooms_room room ");
			sql.append("WHERE reserve.guest_id=? ");
			sql.append("AND reserve.room_id = room.id");
			PreparedStatement pstmt = con.prepareStatement(sql.toString());
			// 세션에서 유저 아이디 GET
			pstmt.setInt(1, id);
			return pstmt;
		}, (ResultSet rs, int rowNum) -> {
			ReserveList reserveList = new ReserveList(
					ReserveStatus.valueOf(rs.getString("STATUS")),
					rs.getString("NAME"),
					rs.getString("ADDRESS"),
					rs.getDate("CHECK_IN").toLocalDate(),
					rs.getDate("CHECK_OUT").toLocalDate(),
					rs.getDate("CREATED").toLocalDate(),
					rs.getInt("GUESTS"),
					rs.getInt("PRICE")
					);
			return reserveList;
		});
		return results;
	}

}