package com.team2.airbnb.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.reservation.User;

@Repository
public class ReservationDao {
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public ReservationDao(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public List<User> selectAll() {
		List<User> results = jdbcTemplate.query("SELECT * FROM USERS_USER", new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
				User user = new User(rs.getString("EMAIL"),
						rs.getString("PASSWORD"),
						rs.getString("USERNAME"),
						rs.getString("BIRTHDAY"));
				user.setId(rs.getInt("ID"));
				user.setIsHost(rs.getInt("IS_HOST"));
				user.setIsSuperuser(rs.getInt("IS_SUPERUSER"));
				return user;
			}
		});
		return results;
	}

}