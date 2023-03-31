$(".listBtn").click(function () {
  $(".listBtn").removeClass("on");
  $(this).addClass("on");
  var btnName = $(this).data("name");
  if (btnName == "전체") {
    $(".list").show();
  } else {
    $(".list").hide();
    $(".list").each(function () {
      if ($(this).find("p:hidden:eq(0)").text().split(": ")[1] == btnName) {
        $(this).show();
      }
    });
  }
});
