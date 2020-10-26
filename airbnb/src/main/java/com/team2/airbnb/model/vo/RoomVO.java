package com.team2.airbnb.model.vo;

import java.time.LocalDate;

import javax.servlet.http.HttpServletRequest;

public class RoomVO {
	private int id;
	private int hostId;
	private String name;
	private LocalDate updated;
	private LocalDate created;
	private String description;
	private String city;
	private int price;
	private String address;
	private int beds;
	private int bedRooms;
	private int baths;
	private String checkIn;
	private String checkOut;
	private int instantBook;
	private int guests;
	private String email;
	private String username;
	private String birthDay;
	private int reviewCount;
	private double reviewAvg;
	private String file1;
	private String file2;
	private String file3;
	private String file4;
	private String file5;
	
	public void setFullAddress(HttpServletRequest request) {
		StringBuffer addrBuffer = new StringBuffer();
		addrBuffer.append(request.getParameter("address1"));
		addrBuffer.append(request.getParameter("address2"));
		addrBuffer.append(" ");
		addrBuffer.append(request.getParameter("address3"));
		
		setAddress(addrBuffer.toString());
	}
	
	public String getLineDescription() {
		return getDescription().replace("\r\n", "<br>");
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getHostId() {
		return hostId;
	}
	public void setHostId(int hostId) {
		this.hostId = hostId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getUpdated() {
		return updated;
	}
	public void setUpdated(LocalDate updated) {
		this.updated = updated;
	}
	public LocalDate getCreated() {
		return created;
	}
	public void setCreated(LocalDate created) {
		this.created = created;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getBeds() {
		return beds;
	}
	public void setBeds(int beds) {
		this.beds = beds;
	}
	public int getBedRooms() {
		return bedRooms;
	}
	public void setBedRooms(int bedRooms) {
		this.bedRooms = bedRooms;
	}
	public int getBaths() {
		return baths;
	}
	public void setBaths(int baths) {
		this.baths = baths;
	}
	public String getCheckIn() {
		return checkIn;
	}
	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}
	public String getCheckOut() {
		return checkOut;
	}
	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}
	public int getInstantBook() {
		return instantBook;
	}
	public void setInstantBook(int instantBook) {
		this.instantBook = instantBook;
	}
	public int getGuests() {
		return guests;
	}
	public void setGuests(int guests) {
		this.guests = guests;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public int getReviewCount() {
		return reviewCount;
	}
	public void setReviewCount(int reviewCount) {
		this.reviewCount = reviewCount;
	}
	public double getReviewAvg() {
		return reviewAvg;
	}
	public void setReviewAvg(double reviewAvg) {
		this.reviewAvg = reviewAvg;
	}
	public String getFile1() {
		return file1;
	}
	public void setFile1(String file1) {
		this.file1 = file1;
	}
	public String getFile2() {
		return file2;
	}
	public void setFile2(String file2) {
		this.file2 = file2;
	}
	public String getFile3() {
		return file3;
	}
	public void setFile3(String file3) {
		this.file3 = file3;
	}
	public String getFile4() {
		return file4;
	}
	public void setFile4(String file4) {
		this.file4 = file4;
	}
	public String getFile5() {
		return file5;
	}
	public void setFile5(String file5) {
		this.file5 = file5;
	}
}
