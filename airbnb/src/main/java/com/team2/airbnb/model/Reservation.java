package com.team2.airbnb.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Reservation {
	public static final int COMMISION = 5000;
	
	private int id;
	private LocalDate created;
	private LocalDate updated;
	private ReserveStatus status;
	private LocalDate checkIn;
	private LocalDate checkOut;
	private int guestId;
	private int roomId;
	private int numOfGuest;

	public int getNumOfGuest() {
		return numOfGuest;
	}

	public void setNumOfGuest(int numOfGuest) {
		this.numOfGuest = numOfGuest;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public ReserveStatus getStatus() {
		return status;
	}

	public void setStatus(ReserveStatus status) {
		this.status = status;
	}

	public LocalDate getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(String checkIn) {
		this.checkIn = LocalDate.parse(checkIn, DateTimeFormatter.ISO_DATE);
	}

	public LocalDate getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(String checkOut) {
		this.checkOut = LocalDate.parse(checkOut, DateTimeFormatter.ISO_DATE);
	}

	public int getGuestId() {
		return guestId;
	}

	public void setGuestId(int guestId) {
		this.guestId = guestId;
	}

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

}
