window.addEventListener("resize", function () {
  location.reload();
});

var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(36.35, 127.3771),
  level: 3,
};
var map = new kakao.maps.Map(container, options);
// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(36.35, 127.3771);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
