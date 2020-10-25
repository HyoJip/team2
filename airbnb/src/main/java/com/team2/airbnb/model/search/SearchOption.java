package com.team2.airbnb.model.search;

import com.team2.airbnb.dao.RoomDao;

public interface SearchOption {
	int getResultCount(RoomDao roomDao);
}
