import "../scss/style.scss";

const today = new Date();
const getCalendarHTML = (year, month) => {
	const setDate = new Date(year, month - 1, 1);
	const firstDayName = setDate.getDay(); //  0~6
	const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

	let startDayCount = 1;
	let calHtml = `<div class="calendar_month">${month}월 ${year}</div>`;
	calHtml += "<div class='calendar_row'>";
	calHtml += "<div class='calendar_day dayname'><span>일</span></div>";
	calHtml += "<div class='calendar_day dayname'><span>월</span></div>";
	calHtml += "<div class='calendar_day dayname'><span>화</span></div>";
	calHtml += "<div class='calendar_day dayname'><span>수</span></div>";
	calHtml += "<div class='calendar_day dayname'><span>목</span></div>";
	calHtml += "<div class='calendar_day dayname'><span>금</span></div>";
	calHtml += "<div class='calendar_day dayname'><span>토</span></div>";
	calHtml += "</div class='calendar_row'>";
	for (let i = 0; i < 6; i++) {
		calHtml += "<div class='calendar_row'>";
		for (let j = 0; j < 7; j++) {
			//  이번 달 시작 요일 이전일 때
			if (i == 0 && j < firstDayName) {
				calHtml += `<div class="calendar_day"><span></span></div>`;
			}
			//  이번 달 시작 요일 이후일 때
			else if (startDayCount <= lastDay) {
				calHtml += `<div class="calendar_day"><span id="${year}-${month}-${setFixDayCount(
					startDayCount++
				)}">${startDayCount}</span></div>`;
			}
		}
		calHtml += "</div>";
	}
	return calHtml;
};
const setFixDayCount = number => (number < 10 ? "0" + number : number);

const setMonthCount = number => (number + 1 < 10 ? "0" + (number + 1) : number + 1);

document
	.querySelector("#curCalendar")
	.insertAdjacentHTML(
		"beforeend",
		getCalendarHTML(today.getFullYear(), setMonthCount(today.getMonth()))
	);
document
	.querySelector("#nextCalendar")
	.insertAdjacentHTML(
		"beforeend",
		getCalendarHTML(today.getFullYear(), setMonthCount(today.getMonth() + 1))
	);

const onClickNextMonthBtn = () => {
	console.log("next month");
};

const onClickPrevMonthBtn = () => {
	console.log("previous month");
};

const onClickFormExitBtn = event => {
	event.preventDefault();
	const form = document.querySelector("#reservationForm");
	form.style.display = "none";
};

const openReservationForm = event => {
	if (
		event.target.closest("#reservationBox") !== null ||
		event.target.closest("#reservationBtn") !== null
	) {
		const form = document.querySelector("#reservationForm");
		form.style.display = "block";
	}
};

document.querySelector("#formExitBtn").addEventListener("click", onClickFormExitBtn);
document.querySelector(".reservation_wrap").addEventListener("click", openReservationForm);
