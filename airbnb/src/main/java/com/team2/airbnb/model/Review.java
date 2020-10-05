package com.team2.airbnb.model;

import java.time.LocalDate;

public class Review {
	private LocalDate created;
	private String content;
	private int rating;
	private int userId;
	private int roomId;

	public LocalDate getCreated() {
		return created;
	}

	public void setCreated(LocalDate created) {
		this.created = created;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getValue() {
		return rating;
	}

	public void setValue(int value) {
		this.rating = value;
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

}
