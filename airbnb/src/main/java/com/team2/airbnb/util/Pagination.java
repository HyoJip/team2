package com.team2.airbnb.util;

public class Pagination {
	private int listSize = 2; // 초기값으로 목록개수를 10으로 셋팅
	private int rangeSize = 2; // 초기값으로 페이지범위를 10으로 셋팅
	private int page;
	private int range;
	private int listCnt;
	private int pageCnt;
	private int startPage;
	private int startList;
	private int endPage;
	private boolean prev;
	private boolean next;

	public int getRangeSize() {
		return rangeSize;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getRange() {
		return range;
	}

	public void setRange(int range) {
		this.range = range;
	}
	
	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public boolean isPrev() {
		return prev;
	}

	public void setPrev(boolean prev) {
		this.prev = prev;
	}

	public boolean isNext() {
		return next;
	}

	public void setNext(boolean next) {
		this.next = next;
	}
	
	public int getListSize() {
		return listSize;
	}

	public void setListSize(int listSize) {
		this.listSize = listSize;
	}

	public int getListCnt() {
		return listCnt;
	}

	public void setListCnt(int listCnt) {
		this.listCnt = listCnt;
	}

	public int getStartList() {
		return startList;
	}
	

	public int getPageCnt() {
		return pageCnt;
	}

	public void setPageCnt(int pageCnt) {
		this.pageCnt = pageCnt;
	}

	public void setRangeSize(int rangeSize) {
		this.rangeSize = rangeSize;
	}

	public void setStartList(int startList) {
		this.startList = startList;
	}
	
	public void pageInfo(int page, int range, int listCnt) {
		this.page = page;
		this.range = range;
		this.listCnt = listCnt;

		// 전체 페이지수
		this.pageCnt = listCnt%listSize == 0 ? listCnt/listSize : (listCnt/listSize) + 1;
		// 시작 페이지
		this.startPage = (range - 1) * rangeSize + 1;
		// 끝 페이지
		this.endPage = range * rangeSize;
		// 게시판 시작번호
		this.startList = (page - 1) * listSize + 1;
		// 이전 버튼 상태
		this.prev = range == 1 ? false : true;
		// 다음 버튼 상태
		if (this.endPage >= this.pageCnt) {
			this.endPage = this.pageCnt;
			this.next = false;
		} else {
			this.next = true;
		}
	}
	
	public String getPrevUrl(int page, int range) {
		int prevPage = ((range - 2) * rangeSize) +1;
		int prevRange = range - 1;
		
		String url = "/room?page=" + prevPage + "&range=" + prevRange;
		return url;
	}
	
	public String getNextUrl(int page, int range) {
		int nextPage = (range * rangeSize) +1;
		int nextRange = range + 1;
		
		String url = "/room?page=" + nextPage + "&range=" + nextRange;
		return url;
	}
}
