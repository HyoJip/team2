export const setFixDayCount = number => (number < 10 ? "0" + number : number);
export const setMonthCount = number => (number < 10 ? "0" + number : number);
export const formatDashToDot = str => str.replace(/-/g, ".");
export const formatWon = num =>
	new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(num);
