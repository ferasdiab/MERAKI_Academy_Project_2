
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
    rinderaction()



});

$("#type3b").on("click", () => {
    $(".typeOfMovie").hide()
    $(".Comedy").show()
    rinderComedy()
    


});

const ActionMovieName = ["Nobody", "The Equalizer","The Dark Knight","John Wick"]
const ActionMovieBref = [ "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lrd.", " A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters." ,"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him."]
const ActionMovieImj = ["https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg"]
const ActionMovieYear = [ "26 March 2021","26 September 2014", "18 July 2008","24 October 2014"]
const ActionMovieRating = ["5","9","8","7"]
const ActionMovieCast = [{Director:" Ilya Naishuller" ,Writer :"Derek Kolstad", Stars:"Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen" },
{Director:"Antoine Fuqua" ,Writer :"Richard Wenk, Michael Sloan", Stars:"Denzel Washington, Marton Csokas, Chloë Grace Moretz"},
{Director:"Christopher Nolan" ,Writer :" Jonathan Nolan (screenplay), Christopher Nolan (screenplay)", Stars:"Christian Bale, Heath Ledger, Aaron Eckhart "},
{Director:"Chad Stahelski, David Leitch ",Writer:" Derek Kolstad",Stars:"Keanu Reeves, Michael Nyqvist, Alfie Allen"}]

const rinderaction = ()=>{
    $(".Action").show()
    $(".Action").html("")
for (let i=0; i<ActionMovieName.length;i++){
    $(".Action").append(`<div class=movieDiv id='ActionMovie${i}' ></div>`)

    $("#ActionMovie"+i).append(`<div class=movieDivCH1 ><img src='${ActionMovieImj[i]}' alt='${ActionMovieName[i]} photo'></div>`)
    $("#ActionMovie"+i).append(`<div class=movieDivCH2 id='actionCH${i}' ></div>`)
    $("#actionCH"+i).append(`<h1>${ActionMovieName[i]}</h1>`)
    $("#actionCH"+i).append(`<h2>${ActionMovieYear[i]}</h2>`)

    localStorage.setItem(ActionMovieName[i],ActionMovieRating[i])
    $("#actionCH"+i).append(`<h4>Rating : ${localStorage.getItem(ActionMovieName[i])} From 10</h4>`)
    $("#actionCH"+i).append(`<div class='rating'><button id='actionRating${i}'>click to rate</button></div>`)


    $("#actionCH"+i).append(`<p id='breafAction${i}'>${ActionMovieBref[i]}</p>`)
    $("#actionCH"+i).append(`<div class='moreInfo'><button id='actionmore${i}'>More Info ...</button></div>`)
    


    $("#actionmore"+i).on("click", () => {
        $("#actionCH"+i).append(`<div ><p> Director: ${ActionMovieCast[i].Director} </p></div>`)
        $("#actionCH"+i).append(`<div ><p> Writer: ${ActionMovieCast[i].Writer} </p></div>`)
        $("#actionCH"+i).append(`<div ><p> Stars: ${ActionMovieCast[i].Stars} </p></div>`)


    
    
    
    });

    $("#actionRating"+i).on("click", () => {
        $("#actionRating"+i).remove()
        $("#breafAction"+i).hide()
        $("#actionmore"+i).hide()
        $("#actionCH"+i).append(`<input id='rateThis${i}' type='text' placeholder='your Rate'><br>`)
        $("#actionCH"+i).append(`<button onclick='fun1(${i})' id='addRate${i}'>Add your Rate</button>`)
        

    });
    /*$("#zzzzzzz").on("click", () => {
        console.log("hi")
        $("#addRate"+i).remove()
        localStorage.setItem(ActionMovieName[i],$(`#rateThis${i}`).val())
        rinderaction()

    });
    */
}
}

const fun1 = (i)=>{
    $("#addRate"+i).remove()
    localStorage.setItem(ActionMovieName[i],$(`#rateThis${i}`).val())
    ActionMovieRating[i] = $(`#rateThis${i}`).val()
    rinderaction()

}

$("#addToAction").on("click", () => {
    $(".Action").hide()
    $("#addToAction").hide()
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
        $("#addActionNow").hide()
        
        ActionMovieName.push($("#actionInput1").val())
        ActionMovieBref.push($("#actionInput2").val())
        ActionMovieImj.push($("#actionInput3").val())
        ActionMovieYear.push($("#actionInput4").val())
        const obj = {}
        obj.Director = $("#actionInput5").val()
        obj.Writer = $("#actionInput6").val()
        obj.Stars = $("#actionInput7").val()
        ActionMovieCast.push(obj)
        rinderaction()
        $("input").hide()

    });

});

////////////////////comedy  list //////////////////



const comedyMovieName =["The Hitman's Bodyguard ","Step Brothers","Deadpool"]
const comedyMovieBref = ["The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.","Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.","A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."]
const comedyMovieImj =["https://m.media-amazon.com/images/M/MV5BMjQ5NjA2NDg1MV5BMl5BanBnXkFtZTgwMDAzNDc4MjI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"]
const comedyMovieYear = ["18 August 2017"," 25 July 2008"," 12 February 2016"]
const comedyMovieRating = ["5","9","8","7"]
const comedyMovieCast =[{Director:"Patrick Hughes",Writer:"Tom O'Connor",Stars:" Ryan Reynolds, Samuel L. Jackson, Gary Oldman "},
    {Director:"Adam McKay",Writer:" Will Ferrell, Adam McKay",Stars:"Will Ferrell, John C. Reilly, Mary Steenburgen "},
    {Director:"Tim Miller",Writer:"Rhett Reese, Paul Wernick",Stars:" Ryan Reynolds, Morena Baccarin, T.J. Miller "}]


const rinderComedy = ()=>{
    $(".Comedy").show()
    $(".Comedy").html("")

    for (let i=0; i<comedyMovieName.length;i++){
        $(".Comedy").append(`<div class=movieDiv id='ComedyMovie${i}' ></div>`)
    
        $("#ComedyMovie"+i).append(`<div class=movieDivCH1 ><img src='${comedyMovieImj[i]}' alt='${comedyMovieName[i]} photo'></div>`)
        $("#ComedyMovie"+i).append(`<div class=movieDivCH2 id='ComedyCH${i}' ></div>`)
        $("#ComedyCH"+i).append(`<h1>${comedyMovieName[i]}</h1>`)
        $("#ComedyCH"+i).append(`<h2>${comedyMovieYear[i]}</h2>`)

        localStorage.setItem(comedyMovieName[i],comedyMovieRating[i])
        $("#ComedyCH"+i).append(`<h4>Rating : ${localStorage.getItem(comedyMovieName[i])} From 10</h4>`)
        $("#ComedyCH"+i).append(`<div class='rating'><button id='comedyRating${i}'>click to rate</button></div>`)

        $("#ComedyCH"+i).append(`<p id='breafcomedy${i}'>${comedyMovieBref[i]}</p>`)
        $("#ComedyCH"+i).append(`<div class='moreInfo'><button id='Comedymore${i}'>More Info ...</button></div>`)
    
    
    
        $("#Comedymore"+i).on("click", () => {
            $("#ComedyCH"+i).append(`<div ><p> Director: ${comedyMovieCast[i].Director} </p></div>`)
            $("#ComedyCH"+i).append(`<div ><p> Writer: ${comedyMovieCast[i].Writer} </p></div>`)
            $("#ComedyCH"+i).append(`<div ><p> Stars: ${comedyMovieCast[i].Stars} </p></div>`)
    
    
            $("#Comedymore"+i).remove()
        
        
        });

        $("#comedyRating"+i).on("click", () => {
            $("#comedyRating"+i).remove()
            $("#breafcomedy"+i).remove()
            $("#Comedymore"+i).remove()
            $("#ComedyCH"+i).append(`<input id='rateThisA${i}' type='text' placeholder='your Rate'><br>`)
            $("#ComedyCH"+i).append(`<button onclick='fun1A(${i})' id='addRateA${i}'>Add your Rate</button>`)
            
    
        });


    
    }

    }

    const fun1A = (i)=>{
        $("#addRateA"+i).remove()
        localStorage.setItem(comedyMovieName[i],$(`#rateThisA${i}`).val())
        comedyMovieRating[i] = $(`#rateThisA${i}`).val()
        rinderComedy()
    
    }
