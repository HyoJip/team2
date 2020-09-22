package com.team2.airbnb.model;

public enum ReserveStatus {
	PENDING("예약대기중"),
	ACCEPTED("예약 승낙"),
	REFUSED("예약 거절"),
	CANCLED("예약 취소"), 
	COMPLETED("숙박 완료");

	private String name;

	private ReserveStatus(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
