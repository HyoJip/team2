package com.team2.airbnb.model;

import java.time.LocalDate;

import com.team2.airbnb.model.vo.RoomVO;

public class RoomPhoto {
	public static final int PHOTO_MAX = 5;
	
	private int id;
	private int roomId;
	private LocalDate created;
	private LocalDate updated;
	private String[] files;
	
	public String[] setFilesFromRoom(RoomVO room) {
		String[] files =  {room.getFile1(), room.getFile2(), room.getFile3(),
		   				   room.getFile4(), room.getFile5()};
		setFiles(files);
		return files;
	}
	
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
