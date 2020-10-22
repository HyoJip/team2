import "../scss/roomList.scss";

const onClickItem = (event) => {
	const item = event.target.closest(".room_item");
	if (item == null) return;
	const roomId = item.dataset.roomid;
	location.href = `/room/${roomId}`;
	
}

document.querySelector("#roomList").addEventListener("click", onClickItem);


/////////////////// 카카오 지도 API
const data = {
	address: [],
	name: [],
	photo: [],
	roomId: [],
};
data.address = document.querySelectorAll(".room_address");
data.name = document.querySelectorAll(".room_name");
data.photo = document.querySelectorAll(".room_photo");
data.roomId = document.querySelectorAll(".room_item");

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	level: 8 //지도의 레벨(확대, 축소 정도)
};
	
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다

for (let i = 0; i < data.address.length; i++) {
	const address = data.address[i].textContent;
	const name = data.name[i].textContent;
	const photo = data.photo[i].src;
	const roomId = data.roomId[i].dataset.roomid;
	
	geocoder.addressSearch(address, function(result, status) {

	    // 정상적으로 검색이 완료됐으면 
	    if (status === kakao.maps.services.Status.OK) {
	
	        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
	
	        // 결과값으로 받은 위치를 마커로 표시합니다
	        var marker = new kakao.maps.Marker({
	            map: map,
	            position: coords,
				clickable: true
	        });
	
			const content = `<div style="width:200px;text-align:center;">
			<a href="/room/${roomId}">
			<img src="${photo}" style="width:100%; height:200px;">
			<p>${name}</p>
			</a>
			</div>`
	
			// 인포윈도우로 장소에 대한 설명을 표시합니다
			var infowindow = new kakao.maps.InfoWindow({
			    content: content,
				removable: true
			});
			
			// 마커에 클릭이벤트를 등록합니다
			kakao.maps.event.addListener(marker, 'click', function() {
			      // 마커 위에 인포윈도우를 표시합니다
			      infowindow.open(map, marker);  
			});
			if (i === 0) {
		        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
		        map.setCenter(coords);			
			}
		} 
	});
}
