package com.team2.airbnb.service;

import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.ReviewDao;

@Service
public class ReviewService {
	private final ReviewDao reviewDao;
	
	public ReviewService(ReviewDao reviewDao) {
		this.reviewDao = reviewDao;
	}
}
