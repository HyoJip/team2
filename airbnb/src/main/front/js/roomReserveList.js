import "../scss/roomReserveList.scss";
import axios from "axios";

const DOMString = {
	Form: ".aside_form",
	detailBtn: ".detailBtn",
	approveBtn: ".approveBtn",
	emailBtn: ".emailBtn",
	detailPopup: ".detailPopup",
	detailContainer: ".detail",
	approveBtn: ".approveBtn",
	refuseBtn: ".rejectBtn",
	emailBtn: ".emailBtn",
	statusDisplay: ".status",
	btn: ".aside_btn",
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

const updateStatusDisplay = (data, form, event) => {
	const reserveStatus = form.closest("tr").querySelector(DOMString.statusDisplay);
		// 1. 예약 상태명 변경
		reserveStatus.textContent = data.statusName;
		// 2. 예약 상태명 CSS 추가
		reserveStatus.className = `${DOMString.statusDisplay.slice(1)} ${data.status}`;
		form.querySelectorAll(DOMString.btn).forEach(btn=> btn.disabled = false);
		event.target.disabled = true;
}

const onClickApproveBtn = async (event) => {
	const form = event.target.closest(DOMString.Form);
	const reserveId = form.dataset.id;
	
	// 1. 승낙확정된 다른 예약이랑 겹치는지 확인
	const roomId = document.getElementById("roomId").value;
	const {data: datelist} = await axios.get(`/api/room/${roomId}`);
	if (
		datelist
			.filter(el=> el.status=="ACCEPTED")
			.map(el=>el.day)
			.includes(form.dataset.checkin)) {
				alert("이미 승인된 예약과 날짜가 겹칩니다.")
				return;
		}
	
	const {status, data} = await axios.patch(`http://localhost:8080/api/reserve/${reserveId}`, {status: "ACCEPTED"});
	if (status === 200) {
		updateStatusDisplay(data, form, event);
	} else {
		alert("예약 승낙 실패");
	}
}

const onClickRefuseBtn = async (event) => {
	const form = event.target.closest(DOMString.Form);
	const reserveId = form.dataset.id;
	
	const {status, data} = await axios.patch(`http://localhost:8080/api/reserve/${reserveId}`, {status: "REFUSED"});
	if (status === 200) {
		updateStatusDisplay(data, form, event);
	} else {
		alert("예약 거절 실패");
	}
}

const init = () => {
	// 1. 세부정보 버튼 클릭시
	document.querySelectorAll(DOMString.detailBtn).forEach(btn => btn.addEventListener("click", onClickDetailBtn));
	// 2. 세부정보 버튼 클릭 취소
	document.addEventListener("click", onClickBody);
	// 3. 예약 승인 버튼 클릭시
	document.querySelectorAll(DOMString.approveBtn).forEach(btn => btn.addEventListener("click", onClickApproveBtn))
	// 4. 예약 취소 버튼 클릭시
	document.querySelectorAll(DOMString.refuseBtn).forEach(btn => btn.addEventListener("click", onClickRefuseBtn))
};

init();