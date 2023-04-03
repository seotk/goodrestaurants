$(document).ready(function () {
  $(".listBtn[data-name='전체']").addClass("on");
  $(".list").show();
});

$(".listBtn").click(function () {
  $(".listBtn").removeClass("on");
  $(this).addClass("on");
  var btnName = $(this).data("name");
  if (btnName == "전체") {
    $(".list").show();
  } else {
    $(".list").hide();
    $(".list").each(function () {
      if ($(this).find("p:hidden:eq(1)").text().split(": ")[1] == btnName) {
        $(this).show();
      }
    });
  }
});

// $(".listBtn").click(function () {
//   $(".listBtn").removeClass("on");
//   $(this).addClass("on");
//   var btnName = $(this).data("name");
//   if (btnName == "전체") {
//     $(".list").show();
//   } else {
//     $(".list").hide();
//     $(".list").each(function () {
//       if ($(this).find("p:hidden:eq(1)").text().split(": ")[1] == btnName) {
//         $(this).show();
//       }
//     });
//   }
// });

// const $postList = document.querySelector(".list");
// const $btn = document.querySelectorAll(".listBtn");

// $btn.forEach((btn, i) => {
//   btn.addEventListener("click", (e) => {
//     let btnName = e.target.dataset.name;
//     // console.log(btnName);
//     $postList.forEach((item2) => {
//       if (btnName == item2.dataset.cate || btnName == "전체")
//         item2.classList.add("on");
//     });
//   });
// });
