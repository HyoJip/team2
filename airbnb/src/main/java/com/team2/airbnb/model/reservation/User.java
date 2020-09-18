package com.team2.airbnb.model.reservation;

public class User {
	private int id;
	private String email;
	private String password;
	private String username;
	private String birthDay;
	private int isHost;
	private int isSuperuser;

	public User(String email, String password, String username, String birthDay) {
		this.email = email;
		this.password = password;
		this.username = username;
		this.birthDay = birthDay;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(String birthDay) {
		this.birthDay = birthDay;
	}

	public int getIsHost() {
		return isHost;
	}

	public void setIsHost(int isHost) {
		this.isHost = isHost;
	}

	public int getIsSuperuser() {
		return isSuperuser;
	}

	public void setIsSuperuser(int isSuperuser) {
		this.isSuperuser = isSuperuser;
	}

}
