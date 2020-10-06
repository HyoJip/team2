package com.team2.airbnb.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.team2.airbnb.dao.ReviewDao;
import com.team2.airbnb.model.Review;

@Service
public class ReviewService {
	private final ReviewDao reviewDao;
	
	public ReviewService(ReviewDao reviewDao) {
		this.reviewDao = reviewDao;
	}

	public int createReview(Review reviewReq) {
		reviewReq.setCreated(LocalDate.now());
		int isValid = reviewDao.insertObject(reviewReq);
		return isValid;
	}
}
