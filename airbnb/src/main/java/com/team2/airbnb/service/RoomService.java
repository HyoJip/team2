package com.team2.airbnb.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.team2.airbnb.dao.RoomDao;
import com.team2.airbnb.model.RoomPhoto;
import com.team2.airbnb.model.User;
import com.team2.airbnb.model.search.AllSearching;
import com.team2.airbnb.model.search.KeywordSearching;
import com.team2.airbnb.model.search.SearchOption;
import com.team2.airbnb.model.vo.ReviewVO;
import com.team2.airbnb.model.vo.RoomVO;
import com.team2.airbnb.util.FileUtil;
import com.team2.airbnb.util.Pagination;
import com.team2.airbnb.util.RegExpUtil;

@Service
public class RoomService {

	private final RoomDao roomDao;

	@Autowired
	public RoomService(RoomDao roomDao) {
		this.roomDao = roomDao;
	}

	public Map<String, Object> getRoomById(int roomId) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		User host = roomDao.selectHost(roomId);
		RoomVO room = roomDao.selectObject(roomId);
		
		RoomPhoto roomPhoto = new RoomPhoto();		
		roomPhoto.setFilesFromRoom(room);
		
		map.put("host", host);
		map.put("room", room);
		map.put("files", roomPhoto.getFiles());
		return map;
	}
	
	public Map<String, Object> getAllPagedRoom(int page, int range) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		SearchOption option = new AllSearching();
		Pagination pagination = getPagination(page, range, option);
		List<RoomVO> rooms = roomDao.selectAllRoom(pagination);
		RoomPhoto[] roomPhotos = getRoomPhotoArray(rooms);
		
		map.put("pagination", pagination);
		map.put("rooms", rooms);
		map.put("roomPhotos", roomPhotos);
		return map;
	}
	
	public Map<String, Object> getAllPagedRoomByKeyword(int page, int range, String keyword) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		SearchOption option = new KeywordSearching(keyword);
		Pagination pagination = getPagination(page, range, option);
		List<RoomVO> rooms = roomDao.selectRoomsByAddrOrName(pagination, keyword);
		RoomPhoto[] roomPhotos = getRoomPhotoArray(rooms);
		
		map.put("pagination", pagination);
		map.put("rooms", rooms);
		map.put("roomPhotos", roomPhotos);
		return map;
	}
	
	private Pagination getPagination(int page, int range, SearchOption option) {
		int listCnt = option.getResultCount(roomDao);
		Pagination pagination = new Pagination();
		pagination.pageInfo(page, range, listCnt);
		return pagination;
	}
	
	private RoomPhoto[] getRoomPhotoArray(List<RoomVO> rooms) {
		RoomPhoto[] roomPhotos = new RoomPhoto[rooms.size()];
		
		for (int i = 0; i < rooms.size(); i++) {
			RoomVO room = rooms.get(i);
			RoomPhoto roomPhoto = new RoomPhoto();
			roomPhoto.setFilesFromRoom(room);
			roomPhotos[i] = roomPhoto;
		}
		return roomPhotos;
	}
	
	public RoomVO getRoomByUserId(int hostId) {
		return roomDao.selectRoomByHostId(hostId);
	}

	public List<Map<String, Object>> getReservedDatesById(int roomId) {
		return roomDao.selectAllReservedDate(roomId);
	}
	
	public List<ReviewVO> getReviews(int roomId) {
		return roomDao.selectAllReview(roomId);
	}

	public Map<String, Object> getReviewCount(int roomId) {
		return roomDao.selectReviewCount(roomId);
	}

	public int roomCreate(RoomVO room) {
		return roomDao.insertRoom(room);
	}

	public Map<String, Object> createPhoto(int roomId, MultipartFile[] files) throws IOException {
		Map<String, Object> map = FileUtil.saveFiles(files);
		int isValid = 0;
		if (!map.containsKey("fileNames")) {
			map.put("isValid", isValid);
			return map;
		}
		
		String[] fileNames = (String[]) map.get("fileNames");
		
		RoomPhoto roomPhoto = new RoomPhoto();
		roomPhoto.setRoomId(roomId);
		roomPhoto.setFiles(fileNames);
		roomPhoto.setCreated(LocalDate.now());
		
		isValid = roomDao.insertRoomPhoto(roomPhoto);
		map.put("isValid", isValid);
		return map;	
	}

	public int updateRoom(RoomVO room, HttpServletRequest request) {
		setRoomAutoInfo(room, request);
		return roomDao.updateRoom(room);
	}
	
	private void setRoomAutoInfo(RoomVO room, HttpServletRequest request) {
		room.setCity(RegExpUtil.extractCity(request.getParameter("address1")));
		room.setUpdated(LocalDate.now());
		room.setFullAddress(request);
	}

	public Map<String, Object> deleteRoom(int id) {
		Map<String, Object> map = new HashMap<String, Object>();
		String message = "";
		int isValid = 0;
		
		try {
			isValid = roomDao.deleteRoom(id);			
			if (isValid == 1) {
				message = "정상적으로 삭제되었습니다.";
				
			} else {
				message = "숙소 삭제 실패했습니다.";
			}
			
		} catch (Exception e) {
			message = "숙소 삭제 실패했습니다. 아직 숙박완료되지 않은 예약이 있다면 삭제할 수 없습니다.";			
		} finally {
			map.put("msg", message);
			map.put("isValid", isValid);
		}
		return map;			
	}
}
