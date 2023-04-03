$(".delete").click(function () {
  $(".deleteModalCon").addClass("on");
});
$(".cancel").click(function (e) {
  location.reload();
});

// $(".deleteOk").click(function (e) {
//   let number = e.target.dataset.id;
//   console.log(number);
//   $.ajax({
//     method: "DELETE",
//     url: "/delete",
//     data: { _id: number },
//   })
//     .done(function (result) {
//       console.log("complete");
//       // setTimeout(() => {
//       //   location.reload();
//       // }, 200);
//     })
//     .fail(function (err) {
//       console.log("err");
//     });
// });

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
