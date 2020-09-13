import "/src/scss/style.scss";
import * as util from "/src/js/util";

/*
 ************************** Global State
 */
let state = {
	curDate: new Date(),
	today: new Date(),
	checkInId: "",
	checkOutId: "",
};

/*
 ************************** Model
 */
const DataController = (() => {
	return {
		getReservedDays: () => {
			const mockup = ["2020-09-20", "2020-09-21", "2020-09-22", "2020-09-30", "2020-10-01"];
			return mockup;
		},
		getReservePayload: () => {
			// 1. GET DB로부터 숙소 하루당 가격
			const roomPrice = 100000;

			// 2. 계산
			const roomNight =
				(new Date(state.checkOutId) - new Date(state.checkInId)) / (1000 * 60 * 60 * 24);
			const totalPrice = roomNight * roomPrice;
			return {
				roomPrice,
				roomNight,
				totalPrice,
			};
		},
		getMaxPerson: () => {
			return 4;
		},
	};
})();

/*
 ************************** View
 */

const UIController = (() => {
	const DOMString = {
		curCalendar: "#curCalendar",
		nextCalendar: "#nextCalendar",
		exitBtn: "#formExitBtn",
		reserveContainer: "#reservationWrap",
		reservePopupContainer: "#reservationForm",
		reserveCheckBox: "#reservationBox",
		reserveRenderBtn: "#reservationBtn",
		MonthYear: ".calendar_month",
		nextPage: "#nextPage",
		prevPage: "#prevPage",
		calendarBox: ".calendar_box",
		calendarContainer: "#calendarWrap",
		checkInInput: "#checkInInput",
		checkOutInput: "#checkOutInput",
		validDay: ".valid_day",
		checkInDisplay: "#checkInDisplay",
		checkOutDisplay: "#checkOutDisplay",
		guestCounterBox: "#guestCounterBox",
		guestCount: "#guestCount",
		resetInput: "#resetInput",
		guestPlusBtn: "#guestPlusBtn",
		guestMinusBtn: "#guestMinusBtn",
		reservePriceContainer: "#reservePriceContainer",
		roomPrice: "#roomPrice",
		roomNight: "#roomNight",
		priceValue: "#priceValue",
		totalPrice: "#totalPrice",
		reserveHelpText: "#reserveHelpText",
	};

	const displayMonth = (year, month) => {
		const [curMonth, nextMonth] = document.querySelectorAll(DOMString.MonthYear);
		curMonth.textContent = `${month}월 ${year}`;
		nextMonth.textContent = month === 12 ? `1월 ${year + 1}` : `${month + 1}월 ${year}`;
	};

	const setButtonStyle = (year, month) => {
		const prevBtnNode = document.querySelector(DOMString.prevPage);
		const CL_DISABLED = "BtnDisabled";
		if (year === state.today.getFullYear() && month === state.today.getMonth() + 1) {
			prevBtnNode.disabled = true;
			prevBtnNode.classList.add(CL_DISABLED);
		} else {
			prevBtnNode.disabled = false;
			prevBtnNode.classList.remove(CL_DISABLED);
		}
	};

	const createDayHTML = (year, month, day) => {
		const { today } = state;
		let CL_DAY = "valid_day";
		if (month === today.getMonth() + 1) {
			if (day < today.getDate()) CL_DAY = "invalid_day";
		}
		return `
		<div class="calendar_day">
			<span class="${CL_DAY}" id="${year}-${util.setMonthCount(month)}-${util.setFixDayCount(day)}">
				${day}
			</span>
		</div>`;
	};

	const createCalendarHTML = (year, month) => {
		const firstDay = new Date(year, month - 1, 1);
		const lastDay = new Date(year, month, 0).getDate();
		const firstDayName = firstDay.getDay(); //  0~6

		let startDayCount = 1;
		let markup = "<div class='calendar_box'>";
		for (let i = 0; i < 6; i++) {
			markup += "<div class='calendar_row'>";
			for (let j = 0; j < 7; j++) {
				//  이번 달 시작 요일 이전일 때
				if (i == 0 && j < firstDayName) {
					markup += `<div class="calendar_day"><span></span></div>`;
				}
				//  이번 달 시작 요일 이후일 때
				else if (startDayCount <= lastDay) {
					markup += createDayHTML(year, month, startDayCount++);
				}
			}
			markup += "</div>";
		}
		markup += "</div>";
		return markup;
	};

	const addInvalidDayClass = cleanedDays => {
		const CL_VALID_DAY = "valid_day";
		const CL_INVALID_DAY = "invalid_day";

		cleanedDays.forEach(el => {
			el.classList.add(CL_INVALID_DAY);
			el.classList.remove(CL_VALID_DAY);
		});
	};

	return {
		getDOMString: () => DOMString,
		closePopup: event => {
			if (event) event.preventDefault();
			document.querySelector(DOMString.reservePopupContainer).style.display = "none";
		},

		openPopup: () =>
			(document.querySelector(DOMString.reservePopupContainer).style.display = "block"),

		isClickedCheckInAndOut: event => event.target.matches(`${DOMString.reserveCheckBox} *`),

		isClickedRenderBtn: event => event.target.matches(DOMString.reserveRenderBtn),

		renderCalendar: (year, month) => {
			displayMonth(year, month);
			setButtonStyle(year, month);

			document
				.querySelector(DOMString.curCalendar)
				.insertAdjacentHTML("beforeend", createCalendarHTML(year, month));
			document
				.querySelector(DOMString.nextCalendar)
				.insertAdjacentHTML("beforeend", createCalendarHTML(year, month + 1));
		},

		clearCalendar: () => {
			const [curCalendar, nextCalendar] = document.querySelectorAll(DOMString.calendarBox);
			curCalendar.parentNode.removeChild(curCalendar);
			nextCalendar.parentNode.removeChild(nextCalendar);
		},

		beExceptReservedDay: reservedDays => {
			const calendarWrap = document.querySelector(DOMString.calendarContainer);
			const renderedDays = Array.from(calendarWrap.querySelectorAll("span"));
			const cleanedDays = renderedDays.filter(day => reservedDays.includes(day.id));
			addInvalidDayClass(cleanedDays);
		},

		renderInvalidDay: (clickedId, reservedDays = null) => {
			const calendarWrap = document.querySelector(DOMString.calendarContainer);
			const days = Array.from(calendarWrap.querySelectorAll("span"));
			let cleanedDays;

			if (state.checkInId === "") {
				// 1. GET 클릭된 날짜 이후의 예약된 제일 빠른 날짜
				const latestDay = reservedDays.filter(daystr => clickedId < daystr).sort()[0];
				// 2. 체크아웃 불가능한 날짜 마크
				cleanedDays = days.filter(day => day.id < clickedId || latestDay < day.id);
			} else {
				cleanedDays = days.filter(day => day.id > clickedId);
			}
			addInvalidDayClass(cleanedDays);
		},

		setCheckInInput: id =>
			(document.querySelector(DOMString.checkInInput).value = util.formatDashToDot(id)),
		setCheckOutInput: id =>
			(document.querySelector(DOMString.checkOutInput).value = util.formatDashToDot(id)),

		renderDayBackground: id => {
			const days = Array.from(
				document
					.querySelector(DOMString.calendarContainer)
					.querySelectorAll(DOMString.validDay)
			);
			const CL_AVAIL_DAY = "available_day";
			days.map(el => {
				el.parentNode.classList.remove(CL_AVAIL_DAY);
				return el;
			})
				.filter(el => state.checkInId <= el.id && el.id <= id)
				.forEach(el => {
					el.parentNode.classList.add(CL_AVAIL_DAY);
				});
		},

		clearCheckDisplay: () => {
			document.querySelector(DOMString.checkInDisplay).textContent = "날짜선택";
			document.querySelector(DOMString.checkOutDisplay).textContent = "날짜선택";
		},

		renderCheckInDisplay: id =>
			(document.querySelector(DOMString.checkInDisplay).textContent = util.formatDashToDot(
				id
			)),
		renderCheckOutDisplay: id =>
			(document.querySelector(DOMString.checkOutDisplay).textContent = util.formatDashToDot(
				id
			)),
		renderGuestCount: (event, maxPerson, minPerson = 1) => {
			const guestValueNode = document.querySelector(DOMString.guestCount);
			const plusBtn = document.querySelector(DOMString.guestPlusBtn);
			const minusBtn = document.querySelector(DOMString.guestMinusBtn);
			const CL_DISABLED = "BtnDisabled";
			if (event.target.matches(DOMString.guestPlusBtn)) {
				if (guestValueNode.textContent < maxPerson) {
					guestValueNode.textContent = ++guestValueNode.textContent;
					minusBtn.classList.remove(CL_DISABLED);
				}
				if (guestValueNode.textContent == maxPerson) {
					plusBtn.classList.add(CL_DISABLED);
				}
			} else if (event.target.matches(DOMString.guestMinusBtn)) {
				if (guestValueNode.textContent > minPerson) {
					guestValueNode.textContent = --guestValueNode.textContent;
					plusBtn.classList.remove(CL_DISABLED);
				}
				if (guestValueNode.textContent == minPerson) {
					minusBtn.classList.add(CL_DISABLED);
				}
			}
		},

		getGuestCount: () => document.querySelector(DOMString.guestCount).textContent,

		renderPrice: payload => {
			const { roomPrice, roomNight, totalPrice } = payload;
			document.querySelector(DOMString.reservePriceContainer).style.display = "block";
			document.querySelector(DOMString.reserveRenderBtn).textContent = "예약하기";
			document.querySelector(DOMString.roomNight).textContent = roomNight + "박";
			document.querySelector(DOMString.roomPrice).textContent = util.formatWon(roomPrice);
			document.querySelector(DOMString.priceValue).textContent = util.formatWon(totalPrice);
			document.querySelector(DOMString.totalPrice).textContent = util.formatWon(
				totalPrice + 5000
			);
			document.querySelector(DOMString.reserveHelpText).innerHTML = `${util.formatWon(
				roomPrice
			)}<small>/박</small>`;
		},

		clearPriceContainer: () => {
			document.querySelector(DOMString.reservePriceContainer).style.display = "none";
			document.querySelector(DOMString.reserveHelpText).textContent =
				"요금을 확인하려면 날짜를 입력하세요.";
		},
	};
})();

/*
 ************************** Controller
 */

const Controller = ((DataCtrl, UICtrl) => {
	const DOM = UICtrl.getDOMString();
	const setEventListeners = () => {
		// 폼 닫기 클릭
		document.querySelector(DOM.exitBtn).addEventListener("click", onClickFormExitBtn);
		// 폼 열기 클릭
		document
			.querySelector(DOM.reserveContainer)
			.addEventListener("click", onClickReserveContainer);
		// 달력 넘기기 클릭
		document.querySelector(DOM.prevPage).addEventListener("click", onClickPageBtn);
		document.querySelector(DOM.nextPage).addEventListener("click", onClickPageBtn);
		// 달력 날짜 클릭
		document
			.querySelector(DOM.calendarContainer)
			.addEventListener("click", onClickCalContainer);
		// 체크아웃 날짜 고를 때 마우스 오버
		document
			.querySelector(DOM.calendarContainer)
			.addEventListener("mouseover", onMouseoverCalContainer);
		// 게스트 카운터
		document
			.querySelector(DOM.guestCounterBox)
			.addEventListener("click", onClickGuestCounterBox);
		// 날짜 폼 리셋 클릭
		document.querySelector(DOM.resetInput).addEventListener("click", onClickResetBtn);
	};

	const clearState = () => {
		state = { ...state, checkInId: "", checkOutId: "" };
	};

	const onClickResetBtn = () => {
		// 1. staate 초기화
		clearState();
		// 2. UI 초기화 및 동기화
		UICtrl.clearCalendar();
		UICtrl.clearCheckDisplay();

		// 3. 날짜 폼 초기화
		setInitailCalendar();

		// 4. 예약하기 폼 닫기
		UICtrl.clearPriceContainer();
	};

	const onClickGuestCounterBox = event => UICtrl.renderGuestCount(event, DataCtrl.getMaxPerson());

	const onMouseoverCalContainer = event => {
		if (state.checkInId !== "" && state.checkOutId == "") {
			if (event.target.matches(DOM.validDay)) {
				const id = event.target.id;
				UICtrl.renderDayBackground(id);
			}
		}
	};

	const onClickCalContainer = event => {
		if (state.checkOutId !== "") return;
		const clickedDay = event.target.closest(".calendar_day span.valid_day");
		//	체크아웃 클릭
		if (clickedDay !== null) {
			const id = clickedDay.id;
			clickedDay.parentNode.classList.add("clicked");
			if (state.checkInId !== "") {
				// 1. 클릭된 노드 id 이후 날짜 invalid
				UICtrl.renderInvalidDay(id);
				// 2. 체크아웃 인풋에 날짜 동기화
				UICtrl.setCheckOutInput(id);
				// 3. 체크아웃 디스플레이 렌더링
				UICtrl.renderCheckOutDisplay(id);
				// 4. 폼 닫기
				UICtrl.closePopup();
				state.checkOutId = id;
				// 5. 금액 계산
				const payload = DataCtrl.getReservePayload();
				// 6. 금액 렌더링
				UICtrl.renderPrice(payload);
			}
			//	체크인 클릭
			else if (state.checkInId === "") {
				const reservedDays = DataCtrl.getReservedDays();
				// 1. 불가능한 날짜 마크 표시
				UICtrl.renderInvalidDay(id, reservedDays);
				// 2. 체크인 인풋에 날짜 동기화
				UICtrl.setCheckInInput(id);
				// 3. 체크인 디스플레이 렌더링
				UICtrl.renderCheckInDisplay(id);
				state.checkInId = id;
			}
		}
	};

	const onClickPageBtn = event => {
		event.preventDefault();
		UICtrl.clearCalendar();

		const isPrevBtn = event.target.matches(DOM.prevPage);

		// prevBtn, nextBtn 분기 -> 달력 월 증감
		if (isPrevBtn) {
			state.curDate.setMonth(state.curDate.getMonth() - 1);
		} else {
			state.curDate.setMonth(state.curDate.getMonth() + 1);
		}
		UICtrl.renderCalendar(state.curDate.getFullYear(), state.curDate.getMonth() + 1);
	};

	const setInitailCalendar = () => {
		UICtrl.renderCalendar(state.curDate.getFullYear(), state.curDate.getMonth() + 1);
		UICtrl.beExceptReservedDay(DataCtrl.getReservedDays());
	};

	const onClickFormExitBtn = () => UICtrl.closePopup(event);

	const onClickReserveContainer = event => {
		// 1-1. 체크인, 체크아웃 버튼 클릭시
		if (UICtrl.isClickedCheckInAndOut(event)) UICtrl.openPopup();
		// 1-2. 예약 버튼 클릭시
		else if (UICtrl.isClickedRenderBtn(event)) {
			if (state.checkInId !== "" && state.checkOutId !== "") {
				// TODO: 예약 페이지로 이동;
			} else UICtrl.openPopup();
		}
	};

	return {
		init: () => {
			setEventListeners();
			setInitailCalendar();
		},
	};
})(DataController, UIController);
Controller.init();
