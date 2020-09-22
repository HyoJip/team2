import "../scss/roomReserveList.scss";

const DOMString = {
	Form: ".aside_form",
	detailBtn: ".detailBtn",
	approveBtn: ".approveBtn",
	emailBtn: ".emailBtn",
	detailPopup: ".detailPopup",
	detailContainer: ".detail",
	approveBtn: ".approveBtn",
}

const onClickDetailBtn = (event) => {
	const popup = event.target.closest(DOMString.detailContainer).querySelector(DOMString.detailPopup);
	popup.style.display = "block";
}

const onClickBody = (event) => {
	if (!event.target.matches(DOMString.detailBtn)) {
		const detailBtns = document.querySelectorAll(DOMString.detailPopup);
		detailBtns.forEach(btn => btn.style.display = "none");
	}
}

const onClickApproveBtn = (event) => {
	event.preventDefault();
	const form = event.target.closest(DOMString.Form);
	// 1. STATUS input 생성
}


const init = () => {
	// 1. 세부정보 버튼 클릭시
	document.querySelectorAll(DOMString.detailBtn).forEach(btn => btn.addEventListener("click", onClickDetailBtn));
	// 2. 세부정보 버튼 클릭 취소
	document.addEventListener("click", onClickBody);
	// 2. 예약 승인 버튼 클릭시
	document.querySelectorAll(DOMString.approveBtn).forEach(btn => btn.addEventListener("click"), onClickApproveBtn)
};

init();