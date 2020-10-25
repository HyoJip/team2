package com.team2.airbnb.model.search;

import com.team2.airbnb.dao.RoomDao;

public class AllSearching implements SearchOption {

	@Override
	public int getResultCount(RoomDao roomDao) {
		return roomDao.selectCountAll();
	}
}
