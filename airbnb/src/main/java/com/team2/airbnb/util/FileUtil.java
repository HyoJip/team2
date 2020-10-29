package com.team2.airbnb.util;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.team2.airbnb.model.RoomPhoto;

public class FileUtil {
	
	private static final String UPLOAD_PATH = "/var/lib/tomcat8/webapps/upload/";
	
	public static String saveFileAndGetName(MultipartFile file) throws IOException {
		if (file.isEmpty())
			return null;
		
		checkFolder();		
		String saveFileName = getCleanedFileName(file);
		saveFile(file, saveFileName);
		return saveFileName;
	}
	
	private static void checkFolder() {
		File folder = new File(UPLOAD_PATH);
		if(folder.exists() == false)
			folder.mkdirs();
	}
	
	private static String getCleanedFileName(MultipartFile file) {
		String originFilename = file.getOriginalFilename();
		String extName = originFilename.substring(originFilename.lastIndexOf("."), originFilename.length());
		return ImageUtil.getRandomString() + extName;
	}
	
	private static void saveFile(MultipartFile file, String saveFileName) throws IOException {
		File target = new File(UPLOAD_PATH, saveFileName);
		FileCopyUtils.copy(file.getBytes(), target);
	}
	
	public static Map<String, Object> saveFiles(MultipartFile[] files) throws IOException {
		Map map = new HashMap<String, Object>();
		String[] fileNames = new String[RoomPhoto.PHOTO_MAX];
		String msg = ""; 
		if (files.length > RoomPhoto.PHOTO_MAX) {
			msg = "사진은 최대 5개까지 업로드 할 수 있습니다.";
			map.put("msg", msg);
			return map;
		}
		
		for (int i = 0; i < files.length; i++) {
			MultipartFile file = files[i];
		    if (!file.getOriginalFilename().isEmpty()) {
		    	String saveFileName = getCleanedFileName(file);
		    	saveFile(file, saveFileName);
		    	fileNames[i] = saveFileName;
		    } else {
		    	msg = "적어도 하나 이상의 사진이 필요합니다.";
		    }
		}
		msg = "숙소 사진이 정상적으로 등록되었습니다.";
		map.put("msg", msg);
		map.put("fileNames", fileNames);
		return map;
	}
}