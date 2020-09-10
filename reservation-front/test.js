const today = new Date();
const getCalendarHTML = (year, month) => {
	const setDate = new Date(year, month - 1, 1);
	const firstDayName = setDate.getDay(); //  0~6
	const lastDay = new Date(
		today.getFullYear(),
		today.getMonth() + 1,
		0
	).getDate();

	let startDayCount = 1;
	let calHtml = `<div class="calendar_month">${month}월 ${year}</div>`;
	for (let i = 0; i < 6; i++) {
		calHtml += "<div class='row'>";
		for (let j = 0; j < 7; j++) {
			//  이번 달 시작 요일 이전일 때
			if (i == 0 && j < firstDayName) {
				calHtml += `<div><span></span></div>`;
			}
			//  이번 달 시작 요일 이후일 때
			else if (startDayCount <= lastDay) {
				calHtml += `<div><span>${startDayCount}</span><span id="${year}-${month}-${setFixDayCount(
					startDayCount++
				)}"></span></div>`;
			}
		}
		calHtml += "</div>";
	}
	return calHtml;
};
const setFixDayCount = (number) => (number < 10 ? "0" + number : number);

const setMonthCount = (number) =>
	number + 1 < 10 ? "0" + (number + 1) : number + 1;

document
	.querySelector("#calendar1")
	.insertAdjacentHTML(
		"beforeend",
		getCalendarHTML(today.getFullYear(), setMonthCount(today.getMonth()))
	);
document
	.querySelector("#calendar2")
	.insertAdjacentHTML(
		"beforeend",
		getCalendarHTML(
			today.getFullYear(),
			setMonthCount(today.getMonth() + 1)
		)
	);

const onClickNextMonthBtn = () => {
	console.log("next month");
};

const onClickPrevMonthBtn = () => {
	console.log("previous month");
};
