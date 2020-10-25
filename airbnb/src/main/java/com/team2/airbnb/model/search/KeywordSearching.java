package com.team2.airbnb.model.search;

import com.team2.airbnb.dao.RoomDao;

public class KeywordSearching implements SearchOption{

	private String keyword;
	
	public KeywordSearching(String keyword) {
		this.keyword = keyword;
	}
	
	@Override
	public int getResultCount(RoomDao roomDao) {
		return roomDao.selectCount(keyword);
		
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
}
