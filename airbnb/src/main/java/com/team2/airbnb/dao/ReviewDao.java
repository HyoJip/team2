package com.team2.airbnb.dao;

import java.sql.Date;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.Review;

@Repository
public class ReviewDao {

	private final JdbcTemplate jdbcTemplate;

	public ReviewDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public int insertObject(Review reviewReq) {
		StringBuffer sql = new StringBuffer();
		sql.append("INSERT INTO reviews (user_id, room_id, created, review, value) ");
		sql.append("VALUES (?,?,?,?,?)");
		return jdbcTemplate.update(sql.toString(), new Object[] {reviewReq.getUserId(),
															reviewReq.getRoomId(),
															Date.valueOf(reviewReq.getCreated()),
															reviewReq.getContext(),
															reviewReq.getValue()});
	}

}
