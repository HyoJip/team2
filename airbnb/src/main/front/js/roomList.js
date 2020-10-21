import "../scss/roomList.scss";

const onClickItem = (event) => {
	const item = event.target.closest(".room_item");
	if (item == null) return;
	const roomId = item.dataset.roomid;
	location.href = `/room/${roomId}`;
	
}

document.querySelector("#roomList").addEventListener("click", onClickItem);