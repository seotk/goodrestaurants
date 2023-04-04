$(".delete").click(function () {
  $(".deleteModalCon").addClass("on");
});
$(".cancel").click(function (e) {
  location.reload();
});
$(".arrow").click(function (e) {
  $.ajax({
    success: function (response) {
      // 성공적으로 응답을 받았을 때 이전 페이지로 이동
      history.back();
    },
    error: function (xhr, status, error) {
      // 오류 발생 시 처리할 코드
    },
  });
});

$(".deleteOk").click(function (e) {
  let number = e.target.dataset.id;
  console.log(number);
  $.ajax({
    method: "DELETE",
    url: "/delete",
    data: { _id: number },
  })
    .done(function (result) {
      console.log("complete");
      location.href = "/";
    })
    .fail(function (err) {
      console.log("err");
    });
});

$(".detailGood").click(function (e) {
  $(this).addClass("on");
  console.log(e.target.dataset);
  let num = e.target.dataset.id;
  let num2 = parseInt(e.target.dataset.good) + 1;

  $.ajax({
    method: "PUT",
    url: "/good",
    data: { _id: num, postGood: num2 },
  })
    .done(function (result) {
      console.log(num);
      console.log(num2);
      setTimeout(() => {
        location.reload();
      }, 200);
    })
    .fail(function (err) {
      console.log("err");
    });
});
// $(".submitBtn").click(function (e) {
//   $.ajax({
//     method: "PUT",
//     url: "/edit",
//     data: {
//       /* 수정할 데이터 */
//     },
//   })
//     .done(function (data) {
//       location.href = "/detail.ejs";
//     })
//     .fail(function (xhr, status, error) {
//     });
// });
