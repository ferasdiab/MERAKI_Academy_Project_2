
$(".TopWatch").hide()
$(".Action").hide()
$(".Comedy").hide()
$(".addToAction").hide()


$("#type1b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".TopWatch").show()

});

$("#type2b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".Action").show()
    $(".addToAction").show()
    rinder()



});

$("#type3b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".Comedy").show()

});


const ActionMovieName = ["Nobody", "The Equalizer","The Dark Knight"]
const ActionMovieBref = [ "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lrd.", " A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters." ,"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."]
const ActionMovieImj = ["https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
const ActionMovieYear = [ "26 March 2021","26 September 2014", "18 July 2008"]
const ActionMovieCast = [{Director:" Ilya Naishuller" ,Writer :"Derek Kolstad", Stars:"Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen" },
{Director:"Antoine Fuqua" ,Writer :"Richard Wenk, Michael Sloan", Stars:"Denzel Washington, Marton Csokas, Chloë Grace Moretz"},
{Director:"Christopher Nolan" ,Writer :" Jonathan Nolan (screenplay), Christopher Nolan (screenplay)", Stars:"Christian Bale, Heath Ledger, Aaron Eckhart "}]

const rinder = ()=>{
    $(".Action").show()
    $(".Action").html("")
for (let i=0; i<ActionMovieName.length;i++){
    $(".Action").append(`<div class=movieDiv id='ActionMovie${i}' ></div>`)

    $("#ActionMovie"+i).append(`<div class=movieDivCH1 ><img src='${ActionMovieImj[i]}' alt='${ActionMovieName[i]} photo'></div>`)
    $("#ActionMovie"+i).append(`<div class=movieDivCH2 id='actionCH${i}' ></div>`)
    $("#actionCH"+i).append(`<h1>${ActionMovieName[i]}</h1>`)
    $("#actionCH"+i).append(`<h2>${ActionMovieYear[i]}</h2>`)
    $("#actionCH"+i).append(`<p>${ActionMovieBref[i]}</p>`)
    $("#actionCH"+i).append(`<div class='moreInfo'><button id='actionmore${i}'>More Info ...</button></div>`)



    $("#actionmore"+i).on("click", () => {
        $("#actionCH"+i).append(`<div ><p> Director: ${ActionMovieCast[i].Director} </p></div>`)
        $("#actionCH"+i).append(`<div ><p> Writer: ${ActionMovieCast[i].Writer} </p></div>`)
        $("#actionCH"+i).append(`<div ><p> Stars: ${ActionMovieCast[i].Stars} </p></div>`)


        $("#actionmore"+i).remove()
    
    
    });
}
}

$("#addToAction").on("click", () => {
    $(".Action").hide()
    $("#addToAction").remove()
    $(".addToAction").append(`<div id='newMovie' ></div>`)
    $("#newMovie").append("<input id='actionInput1' type='text' placeholder='Movie Name'><br>")
    $("#newMovie").append("<input id='actionInput2' type='text' placeholder='Movie Bref'><br>")
    $("#newMovie").append("<input id='actionInput3' type='text' placeholder='link for imj'><br>")
    $("#newMovie").append("<input id='actionInput4' type='text' placeholder='Movie date'><br>")
    $("#newMovie").append("<input id='actionInput5' type='text' placeholder='Movie Director'><br>")
    $("#newMovie").append("<input id='actionInput6' type='text' placeholder='Movie Writer'><br>")
    $("#newMovie").append("<input id='actionInput7' type='text' placeholder='Movie Stars'><br>")
    $("#newMovie").append("<button id='addActionNow'>add now </button>")

    $("#addActionNow").on("click", function() {
        $("#addActionNow").remove()
        
        ActionMovieName.push($("#actionInput1").val())
        ActionMovieBref.push($("#actionInput2").val())
        ActionMovieImj.push($("#actionInput3").val())
        ActionMovieYear.push($("#actionInput4").val())
        const obj = {}
        obj.Director = $("#actionInput5").val()
        obj.Writer = $("#actionInput6").val()
        obj.Stars = $("#actionInput7").val()
        ActionMovieCast.push(obj)
        rinder()
        $("input").remove()

    });

});

