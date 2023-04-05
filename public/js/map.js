// // 주소 검색 폼 제출 시
// document
//   .getElementById("search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     // 주소로 좌표를 검색합니다
//     geocoder.addressSearch(addressInput.value, function (result, status) {
//       if (status === kakao.maps.services.Status.OK) {
//         myCoords = new kakao.maps.LatLng(result[0].y, result[0].x);
//         fetch('/sendCoords', {
//           method: 'POST',
//           body: JSON.stringify({coords: myCoords.toString()}),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         })
//         .then(response => response.json())
//         .then(data => {
//           document.getElementById("result-text").value = myCoords.toString();
//           console.log(data);
//           // 클립보드로 복사합니다.
//           navigator.clipboard.writeText(myCoords.toString());
//         })
//         .catch(error => {
//           console.error(error);
//         });
//         alert("입력한 주소의 좌표는 " + myCoords.toString() + " 입니다.");
//         map.setCenter(myCoords);
//       } else {
//         var exampleCoords = new kakao.maps.LatLng(37.54699, 127.09598);
//         alert(
//           "검색 실패! 예시 좌표 " +
//             exampleCoords.toString() +
//             " 로 이동합니다."
//         );
//         map.setCenter(exampleCoords);
//       }
//     });
//   });
