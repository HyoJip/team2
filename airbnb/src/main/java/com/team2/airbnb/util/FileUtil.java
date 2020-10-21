package com.team2.airbnb.util;

import java.io.File;
import java.io.IOException;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

public class FileUtil {
	
	private static final String UPLOAD_PATH = "C:\\Users\\admin\\Desktop\\team2\\airbnb\\src\\main\\webapp\\resources\\media\\";
	
	public static String saveFileAndGetName(MultipartFile file) throws IOException {
		if (file.isEmpty())
			return null;
		File folder = new File(UPLOAD_PATH);
		if(folder.exists() == false)
			folder.mkdirs();

		String originFilename = file.getOriginalFilename();
		String extName = originFilename.substring(originFilename.lastIndexOf("."), originFilename.length());
		// 서버에서 저장 할 파일 이름
		String saveFileName = ImageUtil.getRandomString() + extName;
		File target = new File(UPLOAD_PATH, saveFileName);
		FileCopyUtils.copy(file.getBytes(), target);
		
		return saveFileName;
	}
}
