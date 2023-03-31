var map = new kakao.maps.Map(document.getElementById("map"), {
  center: new kakao.maps.LatLng(37.54699, 127.09598),
  level: 5,
});

var addressInput = document.getElementById("address-input");
var geocoder = new kakao.maps.services.Geocoder();

// 주소 검색 폼 제출 시
document
  .getElementById("search-form")
  .addEventListener("submitCoords", function (event) {
    event.preventDefault();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(addressInput.value, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 좌표를 변수에 저장합니다
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        alert("입력한 주소의 좌표는 " + coords.toString() + " 입니다.");

        // 검색된 좌표로 지도 중심을 이동시킵니다
        map.setCenter(coords);
      } else {
        // 검색 실패 시 예시 좌표로 이동합니다
        var exampleCoords = new kakao.maps.LatLng(37.54699, 127.09598);
        alert(
          "검색 실패! 예시 좌표 " + exampleCoords.toString() + " 로 이동합니다."
        );
        map.setCenter(exampleCoords);
      }
    });
  });
