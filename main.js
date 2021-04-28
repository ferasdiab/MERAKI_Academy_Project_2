
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

const ActionMovieName = ["Nobody", "The Equalizer","The Dark Knight","John Wick","Zack Snyder's Justice League","Mission: Impossible - Fallout"]
const ActionMovieBref = [ "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lrd.", " A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters." ,"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.","Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.","Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong."]
const ActionMovieImj = ["https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX182_CR0,0,182,268_AL_.jpg"]
const ActionMovieYear = [ "26 March 2021","26 September 2014", "18 July 2008","24 October 2014","18 March 2021","27 July 2018"]
const ActionMovieRating = [{rating :10 ,userNum:1},{rating :6 ,userNum:50},{rating :7 ,userNum:50},{rating :8 ,userNum:500},{rating :8.1 ,userNum:15},{rating :7.7 ,userNum:180}]
const ActionMovieCast = [{Director:" Ilya Naishuller" ,Writer :"Derek Kolstad", Stars:"Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen" },
{Director:"Antoine Fuqua" ,Writer :"Richard Wenk, Michael Sloan", Stars:"Denzel Washington, Marton Csokas, Chloë Grace Moretz"},
{Director:"Christopher Nolan" ,Writer :" Jonathan Nolan (screenplay), Christopher Nolan (screenplay)", Stars:"Christian Bale, Heath Ledger, Aaron Eckhart "},
{Director:"Chad Stahelski, David Leitch ",Writer:" Derek Kolstad",Stars:"Keanu Reeves, Michael Nyqvist, Alfie Allen"},
{Director:"Zack Snyder",Writer:"Jerry Siegel, Joe Shuster ",Stars:"Henry Cavill, Ben Affleck, Gal Gadot "},
{Director:"Christopher McQuarrie",Writer:"Bruce Geller",Stars:"Tom Cruise, Henry Cavill, Ving Rhames"}]

const rinderaction = ()=>{
    $("#addToAction").show()
    $(".Action").show()
    $(".Action").html("")
    for (let i=0; i<ActionMovieName.length;i++){
    $(".Action").append(`<div class=movieDiv id='ActionMovie${i}' ></div>`)
    $("#ActionMovie"+i).append(`<div class=movieDivCH1 ><img src='${ActionMovieImj[i]}' alt='${ActionMovieName[i]} photo'></div>`)
    $("#ActionMovie"+i).append(`<div class=movieDivCH2 id='actionCH${i}' ></div>`)
    $("#actionCH"+i).append(`<h1>${ActionMovieName[i]}</h1>`)
    $("#actionCH"+i).append(`<h2>${ActionMovieYear[i]}</h2>`)
    localStorage.setItem(ActionMovieName[i],ActionMovieRating[i].rating)
    $("#actionCH"+i).append(`<h4>Rating : ${Math.round(ActionMovieRating[i].rating*10)/10} From ${ActionMovieRating[i].userNum}`)
    $("#actionCH"+i).append(`<div class='rating'><button id='actionRating${i}'>Rate This Movie</button></div>`)
    $("#actionCH"+i).append(`<p id='breafAction${i}'>${ActionMovieBref[i]}</p>`)
    $("#actionCH"+i).append(`<div class='moreInfo'><button id='actionmore${i}'>More Info ...</button></div>`)
    


    $("#actionmore"+i).on("click", () => {
        $("#actionmore"+i).hide()
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
    $(".movieDiv").on("mouseover",function(){
        $(this).css("width", "42%");
        })
        $(".movieDiv").on("mouseout",function(){
            $(this).css("width", "40%");
            }) 

    }
}



const fun1 = (i)=>{
    if ( parseInt($(`#rateThis${i}`).val())  <=10  ){
    $("#addRate"+i).remove()
    let rate = ActionMovieRating[i].rating*ActionMovieRating[i].userNum
    ActionMovieRating[i].userNum += 1
    let newRate = (rate + parseInt($(`#rateThis${i}`).val())) / ActionMovieRating[i].userNum
    ActionMovieRating[i].rating = newRate 
    ActionMovieRating[i].userNum = ActionMovieRating[i].userNum

    rinderaction()
    }

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
    $("#newMovie").append("<button onclick ='addAction()' id='addActionNow'>add now </button>")

    /*
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
        ActionMovieRating.push({rating :0 ,userNum:0})
        rinderaction()
        $("input").hide()

    });
*/
});
const addAction = ()=>{
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
        ActionMovieRating.push({rating :0 ,userNum:0})
        rinderaction()
        $("input").remove()
}

////////////////////comedy  list //////////////////

const comedyMovieName =["The Hitman's Bodyguard ","Step Brothers","Deadpool","We're the Millers","The Hangover","Due Date"]
const comedyMovieBref = ["The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.","Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.","A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.","A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.","Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.","High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time."]
const comedyMovieImj =["https://m.media-amazon.com/images/M/MV5BMjQ5NjA2NDg1MV5BMl5BanBnXkFtZTgwMDAzNDc4MjI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTU5MTgxODM3Nl5BMl5BanBnXkFtZTcwMjMxNDEwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
const comedyMovieYear = ["18 August 2017","25 July 2008","12 February 2016","7 August 2013","5 June 2009","5 November 2010"]
const comedyMovieRating = [{rating :10 ,userNum:1},{rating :6 ,userNum:50},{rating :7 ,userNum:50},{rating :7 ,userNum:250},{rating :7.7 ,userNum:550},{rating :6.5 ,userNum:320}]
const comedyMovieCast =[{Director:"Patrick Hughes",Writer:"Tom O'Connor",Stars:" Ryan Reynolds, Samuel L. Jackson, Gary Oldman "},
    {Director:"Adam McKay",Writer:" Will Ferrell, Adam McKay",Stars:"Will Ferrell, John C. Reilly, Mary Steenburgen "},
    {Director:"Tim Miller",Writer:"Rhett Reese, Paul Wernick",Stars:"Ryan Reynolds, Morena Baccarin, T.J. Miller "},
    {Director:"Rawson Marshall Thurber",Writer:"Bob Fisher ",Stars:"Jason Sudeikis, Jennifer Aniston, Emma Roberts"},
    {Director:"Todd Phillips",Writer:"Jon Lucas, Scott Moore",Stars:"Zach Galifianakis, Bradley Cooper, Justin Bartha"},
    {Director:"Todd Phillips",Writer:"Alan R. Cohen, Alan Freedland",Stars:"Robert Downey Jr., Zach Galifianakis, Michelle Monaghan"}]


const rinderComedy = ()=>{
    $(".Comedy").show()
    $(".Comedy").html("")

    for (let i=0; i<comedyMovieName.length;i++){
        $(".Comedy").append(`<div class=movieDiv id='ComedyMovie${i}' ></div>`)
    
        $("#ComedyMovie"+i).append(`<div class=movieDivCH1 ><img src='${comedyMovieImj[i]}' alt='${comedyMovieName[i]} photo'></div>`)
        $("#ComedyMovie"+i).append(`<div class=movieDivCH2 id='ComedyCH${i}' ></div>`)
        $("#ComedyCH"+i).append(`<h1>${comedyMovieName[i]}</h1>`)
        $("#ComedyCH"+i).append(`<h2>${comedyMovieYear[i]}</h2>`)

        localStorage.setItem(comedyMovieName[i],comedyMovieRating[i].rating)
        $("#ComedyCH"+i).append(`<h4>Rating : ${Math.round(localStorage.getItem(comedyMovieName[i])*10)/10}/10 From ${comedyMovieRating[i].userNum} Rate </h4>`)
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
            $("#ComedyCH"+i).append(`<input id='rateThisA${i}' type='number' placeholder='your Rate(from 0 to 10)'><br>`)
            $("#ComedyCH"+i).append(`<button onclick='fun1A(${i})' id='addRateA${i}'>Add your Rate</button>`)
            
    
        });


    
    }

    }

    const fun1A = (i)=>{
        if ( parseInt($(`#rateThisA${i}`).val())  <=10  ){
        $("#addRateA"+i).remove()
        let rate = comedyMovieRating[i].rating*comedyMovieRating[i].userNum
        comedyMovieRating[i].userNum += 1
        let newRate = (rate + parseInt($(`#rateThisA${i}`).val())) / comedyMovieRating[i].userNum
        comedyMovieRating[i].rating = newRate 
        comedyMovieRating[i].userNum = comedyMovieRating[i].userNum

        rinderComedy()
        }
    
    }
