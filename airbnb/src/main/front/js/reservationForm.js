import "../scss/reservationForm.scss";

document.querySelector("#backIcon").addEventListener("click", () => location.href = location.pathname.match(/.*room\/[\d]+/)[0]);