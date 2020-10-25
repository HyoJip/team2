package com.team2.airbnb.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExpUtil {
	
	public static String extractCity(String address) {
		return address.split(" ")[0];
	}
	
	public static String[] getSplitedAddr(String address) {
		String[] strArr = new String[3];
		strArr[0] = getAddress(address);
		strArr[1] = getDetailAddress(address);
		strArr[2] = getCustomAddress(address);
		return strArr;
	}
	
	private static String getAddress(String value) {
		Pattern pattern = Pattern.compile("^.*(?=\\()");
		Matcher matcher = pattern.matcher(value);
		if (matcher.find()) {
			return matcher.group().strip();			
		} else {
			return "value";
		}
	}
	
	private static String getDetailAddress(String value) {
		Pattern pattern = Pattern.compile("\\(.*\\)");
		Matcher matcher = pattern.matcher(value);
		if (matcher.find()) {
			return matcher.group().strip();			
		} else {
			return "";
		}
	}
	
	private static String getCustomAddress(String value) {
		Pattern pattern = Pattern.compile("(?<=\\)).*$");
		Matcher matcher = pattern.matcher(value);
		if (matcher.find()) {
			return matcher.group().strip();			
		} else {
			return "";
		}
	}
}
