package com.team2.airbnb.dao;

import java.sql.Date;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.team2.airbnb.model.User;

@Repository
public class UserDao {
	
	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public UserDao(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	public int insertUser(User user) {
		String sql = "INSERT INTO users_user(email, password, username, birthDay, is_host, is_superuser) values (?,?,?,?,?,?)";
		return jdbcTemplate.update(sql, new Object[] {user.getEmail(), user.getPassword(), user.getUsername(), Date.valueOf(user.getBirthDay()), user.getIsHost(), user.getIsSuperuser()});
	}
	
	public User getUserByEmail(String email) {
		String sql = "SELECT * FROM users_user WHERE email=?";
		try {
			return jdbcTemplate.queryForObject(sql, new Object[] { email }, new BeanPropertyRowMapper<User>(User.class));
		} catch (Exception e) {
			return null;
		}
	}

	public int updateUser(User user) {
		String sql = "UPDATE users_user SET password=? WHERE email=?";
		return jdbcTemplate.update(sql, new Object[] {user.getPassword(), user.getEmail()});
		
	}
}