package com.team2.airbnb.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class DateUtil {
	private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

	public static SimpleDateFormat getDateFormat() {
		return dateFormat;
	}
	
	public static List<LocalDate> getDatesBetween(LocalDate startDay, LocalDate endDay){

		final int days = (int) startDay.until(endDay, ChronoUnit.DAYS);

		return Stream.iterate(startDay, date -> date.plusDays(1)).limit(days)
		  .collect(Collectors.toList());
	}

	public static int getDateDiff(String startDay, String endDay) throws ParseException {
		Date date1 = dateFormat.parse(startDay);
		Date date2 = dateFormat.parse(endDay);
		long diff = date2.getTime() - date1.getTime();
		return (int) TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
	}
	
	public static String formatKor(LocalDate date) {
		return date.getYear()+"년 "+date.getMonthValue()+"월 "+date.getDayOfMonth()+"일";
	}

}