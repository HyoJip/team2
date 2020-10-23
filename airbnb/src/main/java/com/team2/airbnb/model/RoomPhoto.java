package com.team2.airbnb.model;

import java.time.LocalDate;

public class RoomPhoto {
	public static final int PHOTO_MAX = 6;
	
	private int id;
	private int roomId;
	private LocalDate created;
	private LocalDate updated;
	private String[] files;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRoomId() {
		return roomId;
	}
	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}
	public LocalDate getCreated() {
		return created;
	}
	public void setCreated(LocalDate created) {
		this.created = created;
	}
	public LocalDate getUpdated() {
		return updated;
	}
	public void setUpdated(LocalDate updated) {
		this.updated = updated;
	}
	public String[] getFiles() {
		return files;
	}
	public void setFiles(String[] files) {
		this.files = files;
	}
}
