$(document).ready(function () {
  // 폼 전송 시 실행되는 함수
  $(".form").submit(function (event) {
    // 입력값이 있는지 체크
    if (
      $.trim($("#food-select").val()) === "" ||
      $.trim($("#name").val()) === "" ||
      $.trim($("#star").val()) === "" ||
      $.trim($("#adress").val()) === "" ||
      $.trim($("#img").val()) === "" ||
      $.trim($("#time").val()) === "" ||
      $.trim($("#tel").val()) === "" ||
      $.trim($("#detail").val()) === ""
    ) {
      // 입력값이 없으면 경고창 띄우기
      alert("입력값이 비어 있습니다.");
      // 폼 전송 중지
      event.preventDefault();
    } else if (!isValidUrl($.trim($("#img").val()))) {
      // img가 유효한 URL 형식이 아니면 경고창 띄우기
      alert("올바른 이미지 URL을 입력하세요.");
      event.preventDefault();
    } else if (!isNumeric($.trim($("#tel").val()).replace(/-/g, ""))) {
      // tel이 숫자와 특수기호를 제외한 다른 문자를 포함하면 경고창 띄우기
      alert("전화번호는 숫자와 하이픈(-)만 입력하세요.");
      event.preventDefault();
    }
    // else if (!isStar($.trim($("#star").val()).replace(/./g, ""))) {
    //   // star가 숫자가 아니면 경고창 띄우기
    //   alert("별점은 숫자와 점(.)만 입력하세요.");
    //   event.preventDefault();
    // }
  });

  // 유효한 URL인지 검사하는 함수
  function isValidUrl(url) {
    // 참고: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    const urlRegex =
      /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9]+(?:[\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(?::[0-9]{1,5})?(?:\/.*)?$/i;
    return urlRegex.test(url);
  }

  // 숫자와 하이픈만 있는지 검사하는 함수
  function isNumeric(str) {
    return /^[\d-]+$/.test(str);
  }
  // 숫자와 점만 있는지 검사하는 함수
  function isStar(str) {
    return /^[\d.]+$/.test(str);
  }
});
