package com.team2.airbnb.model.vo;

import java.time.LocalDate;

public class ReviewVO {
	private LocalDate created;
	private String context;
	private int rating;
	private int userId;
	private int roomId;
	private String username;

	public LocalDate getCreated() {
		return created;
	}

	public void setCreated(LocalDate created) {
		this.created = created;
	}

	public String getContext() {
		return context;
	}

	public void setContext(String context) {
		this.context = context;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
