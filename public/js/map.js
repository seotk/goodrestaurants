// window.addEventListener("resize", function () {
//   setTimeout(function () {
//     location.reload();
//   }, 3000); // 3초(3000ms) 후에 리로드
// });

// var container = document.getElementById("map");

// var coords = "<%= data.postAcoords%>".split(","); // 쉼표로 구분된 문자열을 배열로 변환
// var options = {
//   center: new kakao.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1])),
//   level: 3,
// };

// var map = new kakao.maps.Map(container, options);
// // 마커가 표시될 위치입니다
// var markerPosition = new kakao.maps.LatLng(
//   parseFloat(coords[0]),
//   parseFloat(coords[1])
// );

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//   position: markerPosition,
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);
