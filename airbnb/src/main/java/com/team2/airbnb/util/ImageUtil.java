package com.team2.airbnb.util;

import java.util.UUID;

public class ImageUtil {
	public static String getRandomString(){
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
}
