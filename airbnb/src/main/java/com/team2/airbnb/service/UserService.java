package com.team2.airbnb.service;

import java.util.HashMap;
import java.util.Map;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.UserDao;
import com.team2.airbnb.model.User;

@Service
public class UserService {
	
	private final UserDao userDao;

	@Autowired
	public UserService(UserDao userDao) {
		this.userDao = userDao;
	}

	public int joinUser(User user) {
		user.setIsHost(0);
		user.setIsSuperuser(0);
		return userDao.insertUser(user);
	}
	
	public int EmailIsDuplicated(String email) {
		User user = userDao.getUserByEmail(email);
		System.out.println(user);
		if (user == null) {
			return 0;
		}
		return 1;
	}
	
	public Map<String, Object> login(String email, String password) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		int isValid = 0;
		// 입력하지 않은 경우
		if (email.equals("") || password.equals("")) {
			map.put("error", "이메일과 비밀번호를 입력해주세요.");
		}
		// 입력한 경우
		else {	
			User user = userDao.getUserByEmail(email);
			if(user != null) {	// 입력된 아이디에 해당 비밀번호가 있는 경우
				String dbPW = user.getPassword();
				isValid = BCrypt.checkpw(password, dbPW)? 1: 0; //비밀번호가 일치 할 경우 인증 성공
				map.put("user", user);
			}			
		}
		
		map.put("isValid", isValid);
		return map;
	}

	public int updateInfo(User user) {
		return userDao.updateUser(user);
	}
}
