package com.team2.airbnb.model.vo;

import java.time.LocalDate;

import com.team2.airbnb.model.ReserveStatus;

public class ReserveVO {
	private int id;
	private ReserveStatus status;
	private String userName;
	private LocalDate checkIn;
	private LocalDate checkOut;
	private LocalDate created;
	private int guests;
	private int price;
	private String email;
	private String name;
	private String city;
	private String address;
	private int roomId;
	private String roomCheckIn;
	private String roomCheckOut;
	private int beds;
	private int baths;
	private int bedrooms;
	private int roomMaxGuests;
	private String file1;

	public int getBeds() {
		return beds;
	}

	public void setBeds(int beds) {
		this.beds = beds;
	}

	public int getBaths() {
		return baths;
	}

	public void setBaths(int baths) {
		this.baths = baths;
	}

	public int getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(int bedrooms) {
		this.bedrooms = bedrooms;
	}

	public String getRoomCheckIn() {
		return roomCheckIn;
	}

	public void setRoomCheckIn(String roomCheckIn) {
		this.roomCheckIn = roomCheckIn;
	}

	public String getRoomCheckOut() {
		return roomCheckOut;
	}

	public void setRoomCheckOut(String roomCheckOut) {
		this.roomCheckOut = roomCheckOut;
	}

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public ReserveStatus getStatus() {
		return status;
	}

	public void setStatus(ReserveStatus status) {
		this.status = status;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public LocalDate getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(LocalDate checkIn) {
		this.checkIn = checkIn;
	}

	public LocalDate getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(LocalDate checkOut) {
		this.checkOut = checkOut;
	}

	public LocalDate getCreated() {
		return created;
	}

	public void setCreated(LocalDate created) {
		this.created = created;
	}

	public int getGuests() {
		return guests;
	}

	public void setGuests(int guests) {
		this.guests = guests;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getRoomMaxGuests() {
		return roomMaxGuests;
	}

	public void setRoomMaxGuests(int roomMaxGuests) {
		this.roomMaxGuests = roomMaxGuests;
	}

	public String getFile1() {
		return file1;
	}

	public void setFile1(String file1) {
		this.file1 = file1;
	}

}
