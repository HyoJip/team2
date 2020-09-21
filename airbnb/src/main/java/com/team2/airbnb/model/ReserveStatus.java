package com.team2.airbnb.model;

public enum ReserveStatus {
	PENDING("예약대기중");

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
