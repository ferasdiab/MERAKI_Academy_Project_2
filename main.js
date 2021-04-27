
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


const ActionMovieName = ["Nobody", "The Equalizer","The Dark Knight"]
const ActionMovieBref = [ "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.", "An enigmatic figure who uses her extensive skills to help those with nowhere else to turn." ,"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."]
const ActionMovieImj = ["https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg", ,]


/*
for (let i=0; i<ActionMovieName.length;i++){
    $(".Action").append(`<div class=movieDiv id='ActionMovie${i}' ><h1>${ActionMovieName[i]}</h1></div>`)
    $("#ActionMovie"+i).append(`<p>${ActionMovieBref[i]}</p>`)
    $("#ActionMovie"+i).append(`<img src='${ActionMovieImj[i]}' alt='${ActionMovieName[i]} photo'>`)

}
*/

for (let i=0; i<ActionMovieName.length;i++){
    $(".Action").append(`<div class=movieDiv id='ActionMovie${i}' ></div>`)

    $("#ActionMovie"+i).append(`<div class=movieDivCH1 ><img src='${ActionMovieImj[i]}' alt='${ActionMovieName[i]} photo'></div>`)
    $("#ActionMovie"+i).append(`<div class=movieDivCH2 id='actionCH${i}' ></div>`)
    $("#actionCH"+i).append(`<h1>${ActionMovieName[i]}</h1>`)
    $("#actionCH"+i).append(`<p>${ActionMovieBref[i]}</p>`)

}

