
$(".TopWatch").hide()
$(".Action").hide()
$(".Comedy").hide()


$("#type1b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".TopWatch").show()

  });

$("#type2b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".Action").show()

  });

$("#type3b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".Comedy").show()

  });