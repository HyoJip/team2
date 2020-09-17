package reservation;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import util.DateUtil;

enum ReservationStatus {
	PENDDING("예약 대기 중"),
	ACCEPTED("예약 승낙"),
	REFUSED("예약 거절"),
	CANCLED("예약 취소"), 
	COMPLETED("숙박 완료");

	private String name;
	
	private ReservationStatus(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

}

public class Reservation {
	Date created;
	Date updated;
	String checkIn;
	String checkOut;
	ReservationStatus status;
	List<Date> days = new ArrayList<>();

	public Reservation(String checkIn, String checkOut) {
		this.created = new Date();
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.status = ReservationStatus.PENDDING;
		try {
			this.days = DateUtil.getDaysBetween(checkIn, checkOut);
		} catch (ParseException e) {
			e.printStackTrace();
		}

	}

	public void showConservationInfo() {
		System.out.println("예약생성일자: " + this.created);
		System.out.println("체크인: " + this.checkIn);
		System.out.println("예약상태: " + this.status.getName());
		System.out.println("체크아웃: " + this.checkOut);

		System.out.println("숙박 이용하는 날짜들: ");
		for (Date date : this.days) {
			System.out.println(date.toString() + "\n");
		}
	}

}