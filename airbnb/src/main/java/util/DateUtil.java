package util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class DateUtil {
	public static List<Date> getDaysBetween (String startDay, String endDay) throws ParseException {
		List<Date> days = new ArrayList<Date>();
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date checkInDate = dateFormat.parse(startDay);
		Date checkOutDate = dateFormat.parse(endDay);
		
		Date curDate = checkInDate;
		Calendar cal = Calendar.getInstance();
		// 체크인 날짜가 체크아웃 날짜랑 같아질 때까지
		while (curDate.compareTo(checkOutDate) <= 0) {
			// dates 리스트에 추가
			dateFormat.format(curDate);
			days.add(curDate);
			
			// 날짜 +1
			cal.setTime(curDate);
			cal.add(Calendar.DATE, 1);
			
			curDate = new Date(cal.getTimeInMillis());
		}
		
		return days;
	}
}