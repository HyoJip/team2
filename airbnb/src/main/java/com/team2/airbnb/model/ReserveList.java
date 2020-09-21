package com.team2.airbnb.model;

import java.time.LocalDate;

public class ReserveList {
	private ReserveStatus reserveStatus;
	private String roomName;
	private String roomAddress;
	private LocalDate reserveCheckIn;
	private LocalDate reserveCheckOut;
	private LocalDate reserveCreated;
	private int reserveguests;
	private int roomPrice;

	public ReserveList(ReserveStatus reserveStatus, String roomName, String roomAddress, LocalDate reserveCheckIn,
			LocalDate reserveCheckOut, LocalDate reserveCreated, int reserveguests, int roomPrice) {
		super();
		this.reserveStatus = reserveStatus;
		this.roomName = roomName;
		this.roomAddress = roomAddress;
		this.reserveCheckIn = reserveCheckIn;
		this.reserveCheckOut = reserveCheckOut;
		this.reserveCreated = reserveCreated;
		this.reserveguests = reserveguests;
		this.roomPrice = roomPrice;
	}

	public ReserveStatus getReserveStatus() {
		return reserveStatus;
	}

	public void setReserveStatus(ReserveStatus reserveStatus) {
		this.reserveStatus = reserveStatus;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public String getRoomAddress() {
		return roomAddress;
	}

	public void setRoomAddress(String roomAddress) {
		this.roomAddress = roomAddress;
	}

	public LocalDate getReserveCheckIn() {
		return reserveCheckIn;
	}

	public void setReserveCheckIn(LocalDate reserveCheckIn) {
		this.reserveCheckIn = reserveCheckIn;
	}

	public LocalDate getReserveCheckOut() {
		return reserveCheckOut;
	}

	public void setReserveCheckOut(LocalDate reserveCheckOut) {
		this.reserveCheckOut = reserveCheckOut;
	}

	public LocalDate getReserveCreated() {
		return reserveCreated;
	}

	public void setReserveCreated(LocalDate reserveCreated) {
		this.reserveCreated = reserveCreated;
	}

	public int getReserveguests() {
		return reserveguests;
	}

	public void setReserveguests(int reserveguests) {
		this.reserveguests = reserveguests;
	}

	public int getRoomPrice() {
		return roomPrice;
	}

	public void setRoomPrice(int roomPrice) {
		this.roomPrice = roomPrice;
	}

}
