$(".TopWatch").hide();
$(".Action").hide();
$(".Comedy").hide();
$(".addToAction").hide();

$("#type1b").on("click", () => {
  $(".typeOfMovie").hide();
  $(".Action").hide();
  $(".Comedy").hide();
  $("#addToAction").hide();
  $(".Favorites").show();
  rinderFavorites();
});

$("#type2b").on("click", () => {
  $(".typeOfMovie").hide();
  $(".Action").show();
  $(".addToAction").show();
  rinderaction();
});

$("#type3b").on("click", () => {
  $(".typeOfMovie").hide();
  $(".Comedy").show();
  rinderComedy();
});

const ActionMovieName = [
  "Nobody",
  "The Equalizer",
  "The Dark Knight",
  "John Wick",
  "Zack Snyder's Justice League",
  "Mission: Impossible - Fallout",
  "Extraction ",
];
const ActionMovieBref = [
  "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lrd.",
  " A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
  "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
  "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
  "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
  "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
];
const ActionMovieImj = [
  "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
];
const ActionMovieYear = [
  "26 March 2021",
  "26 September 2014",
  "18 July 2008",
  "24 October 2014",
  "18 March 2021",
  "27 July 2018",
  "24 April 2020",
];
const ActionMovieRating = [
  { rating: 4.7999, userNum: 1 },
  { rating: 4, userNum: 50 },
  { rating: 4.8, userNum: 750 },
  { rating: 4.2, userNum: 200 },
  { rating: 4.3, userNum: 15 },
  { rating: 3.2, userNum: 180 },
  { rating: 4, userNum: 25 },
];
const ActionMovieCast = [
  {
    Director: " Ilya Naishuller",
    Writer: "Derek Kolstad",
    Stars: "Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen",
  },
  {
    Director: "Antoine Fuqua",
    Writer: "Richard Wenk, Michael Sloan",
    Stars: "Denzel Washington, Marton Csokas, Chloë Grace Moretz",
  },
  {
    Director: "Christopher Nolan",
    Writer: " Jonathan Nolan (screenplay), Christopher Nolan (screenplay)",
    Stars: "Christian Bale, Heath Ledger, Aaron Eckhart ",
  },
  {
    Director: "Chad Stahelski, David Leitch ",
    Writer: " Derek Kolstad",
    Stars: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
  },
  {
    Director: "Zack Snyder",
    Writer: "Jerry Siegel, Joe Shuster ",
    Stars: "Henry Cavill, Ben Affleck, Gal Gadot ",
  },
  {
    Director: "Christopher McQuarrie",
    Writer: "Bruce Geller",
    Stars: "Tom Cruise, Henry Cavill, Ving Rhames",
  },
  {
    Director: "Sam Hargrave",
    Writer: " Joe Russo (screenplay), Ande Parks",
    Stars: " Chris Hemsworth, Bryon Lerum, Ryder Lerum",
  },
];

const rinderaction = () => {
  for (let i = 0; i < ActionMovieName.length; i++) {
    if (!localStorage.getItem(`rate${i}`)) {
      localStorage.setItem(`rate${i}`, ActionMovieRating[i].rating);
    }
    if (!localStorage.getItem(`num${i}`)) {
      localStorage.setItem(`num${i}`, ActionMovieRating[i].userNum);
    }
  }
  let movRate = 0;
  let movRateNum = 0;
  $("#addToAction").show();
  $(".Action").show();
  $(".Action").html("");
  for (let i = 0; i < ActionMovieName.length; i++) {
    $(".Action").append(`<div class=movieDiv id='ActionMovie${i}' ></div>`);
    $("#ActionMovie" + i).append(
      `<div class=movieDivCH1 ><img src='${ActionMovieImj[i]}' alt='${ActionMovieName[i]} photo'></div>`
    );
    $("#ActionMovie" + i).append(
      `<div class=movieDivCH2 id='actionCH${i}' ></div>`
    );
    $("#actionCH" + i).append(`<h1>${ActionMovieName[i]}</h1>`);
    $("#actionCH" + i).append(`<h2>${ActionMovieYear[i]}</h2>`);
    movRate = localStorage.getItem(`rate${i}`);
    movRateNum = localStorage.getItem(`num${i}`);

    $("#actionCH" + i).append(
      `<h4 id ='rateText${i}'>Rating : ${
        Math.round(movRate * 10) / 10
      } / 5 From ${movRateNum} Rate</h4>`
    );
    $("#actionCH" + i).append(
      `<div class='rating'><button class='RButt' id='actionRating${i}'><i class='fas fa-star' style='font-size:15px;color:#021F32'></i> Rate</button></div>`
    );
    $("#actionCH" + i).append(
      `<p id='breafAction${i}'>${ActionMovieBref[i]}</p>`
    );
    $("#actionCH" + i).append(
      `<div class='moreInfo'><button class='moreBUtt' id='actionmore${i}'>More Info ...</button></div>`
    );

    $("#actionmore" + i).on("click", () => {
      $("#actionmore" + i).hide();
      $("#actionCH" + i).append(
        `<div class='staff${i}' ><p> Director: ${ActionMovieCast[i].Director} </p></div>`
      );
      $("#actionCH" + i).append(
        `<div class='staff${i}' ><p> Writer: ${ActionMovieCast[i].Writer} </p></div>`
      );
      $("#actionCH" + i).append(
        `<div class='staff${i}' ><p> Stars: ${ActionMovieCast[i].Stars} </p></div>`
      );
      $("#actionCH" + i).append(
        `<button onclick='addToFav1(${i})' class='moreBUtt' id='addFav${i}'><i class='fas fa-star' style='font-size:17px;color:yellow;'></i> Add To Favorites </button>`
      );
    });

    $("#actionRating" + i).on("click", () => {
      $("#actionRating" + i).remove();
      $("#breafAction" + i).hide();
      $("#actionmore" + i).hide();
      $(".staff" + i).hide();
      $("#addFav" + i).hide();
      $("#actionCH" + i).append(
        `<div id='actionRateTH${i}' class='star-widget'></div>`
      );
      $("#actionRateTH" + i).append(
        `<input type='radio' onclick='fun1(${i})' name='rate' id='rate-5${i}'>`
      );
      $("#actionRateTH" + i).append(
        `<label for='rate-5${i}' class='fas fa-star'></label>`
      );
      $("#actionRateTH" + i).append(
        `<input type='radio' onclick='fun1(${i})' name='rate' id='rate-4${i}'>`
      );
      $("#actionRateTH" + i).append(
        `<label for='rate-4${i}' class='fas fa-star'></label>`
      );
      $("#actionRateTH" + i).append(
        `<input type='radio' onclick='fun1(${i})' name='rate' id='rate-3${i}'>`
      );
      $("#actionRateTH" + i).append(
        `<label for='rate-3${i}' class='fas fa-star'></label>`
      );
      $("#actionRateTH" + i).append(
        `<input type='radio' onclick='fun1(${i})' name='rate' id='rate-2${i}'>`
      );
      $("#actionRateTH" + i).append(
        `<label for='rate-2${i}' class='fas fa-star'></label>`
      );
      $("#actionRateTH" + i).append(
        `<input type='radio' onclick='fun1(${i})' name='rate' id='rate-1${i}'>`
      );
      $("#actionRateTH" + i).append(
        `<label for='rate-1${i}' class='fas fa-star'></label>`
      );
    });
  }
};

const fun1 = (i) => {
  if (
    document.getElementsByName("rate")[0].checked ||
    document.getElementsByName("rate")[1].checked ||
    document.getElementsByName("rate")[2].checked ||
    document.getElementsByName("rate")[3].checked ||
    document.getElementsByName("rate")[4].checked
  ) {
    $("#addRate" + i).remove();
    let userRate = 0;
    if (document.getElementsByName("rate")[0].checked) {
      userRate = 5;
    }
    if (document.getElementsByName("rate")[1].checked) {
      userRate = 4;
    }
    if (document.getElementsByName("rate")[2].checked) {
      userRate = 3;
    }
    if (document.getElementsByName("rate")[3].checked) {
      userRate = 2;
    }
    if (document.getElementsByName("rate")[4].checked) {
      userRate = 1;
    }
    let movRate = localStorage.getItem(`rate${i}`);
    let movRateNum = localStorage.getItem(`num${i}`);
    let rate = movRate * movRateNum;
    ++movRateNum;
    let newRate = (rate + userRate) / movRateNum;
    localStorage.setItem(`rate${i}`, newRate);
    localStorage.setItem(`num${i}`, movRateNum);
    rinderaction();
  }
};

const addToFav1 = (i) => {
  $("#addFav" + i).remove();
  let arr = []
  let obj  = {
    Mname : ActionMovieName[i],
    breaf : ActionMovieBref[i],
    imj   : ActionMovieImj[i],
    year  : ActionMovieYear[i],
    rate  : localStorage.getItem(`rate${i}`),
    numRat: localStorage.getItem(`num${i}`),
    dir   : ActionMovieCast[i].Director,
    wir   : ActionMovieCast[i].Writer,
    star  : ActionMovieCast[i].Stars,
  };
  if (localStorage.getItem("favLIST")){
   arr = JSON.parse( localStorage.getItem("favLIST"))
  }
  arr.push(obj)
  localStorage.setItem("favLIST", JSON.stringify(arr));
};

$("#addToAction").on("click", () => {
  $(".Action").hide();
  $("#addToAction").hide();
  $(".addToAction").append(`<div id='newMovie' ></div>`);
  $("#newMovie").append(
    "<input class='addInput' id='actionInput1' type='text' placeholder='Movie Name'>"
  );
  $("#newMovie").append(
    "<input class='addInput' id='actionInput2' type='text' placeholder='Movie Breaf'>"
  );
  $("#newMovie").append(
    "<input class='addInput' id='actionInput3' type='text' placeholder='link for imj'>"
  );
  $("#newMovie").append(
    "<input class='addInput' id='actionInput4' type='text' placeholder='Movie date'>"
  );
  $("#newMovie").append(
    "<input class='addInput' id='actionInput5' type='text' placeholder='Movie Director'>"
  );
  $("#newMovie").append(
    "<input class='addInput' id='actionInput6' type='text' placeholder='Movie Writer'>"
  );
  $("#newMovie").append(
    "<input class='addInput' id='actionInput7' type='text' placeholder='Movie Stars'>"
  );
  $("#newMovie").append(
    "<button onclick ='addAction()' id='addActionNow'>Add This Movie</button>"
  );
});

const addAction = () => {
  $("#addActionNow").remove();

  ActionMovieName.push($("#actionInput1").val());
  ActionMovieBref.push($("#actionInput2").val());
  ActionMovieImj.push($("#actionInput3").val());
  ActionMovieYear.push($("#actionInput4").val());
  const obj = {};
  obj.Director = $("#actionInput5").val();
  obj.Writer = $("#actionInput6").val();
  obj.Stars = $("#actionInput7").val();
  ActionMovieCast.push(obj);
  ActionMovieRating.push({ rating: 0, userNum: 0 });
  rinderaction();
  $("input").remove();
};

////////////////////comedy  list //////////////////

const comedyMovieName = [
  "The Hitman's Bodyguard ",
  "Step Brothers",
  "Deadpool",
  "We're the Millers",
  "The Hangover",
  "Due Date",
  "Spenser Confidential",
];
const comedyMovieBref = [
  "The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.",
  "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
  "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
  "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
  "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
  "High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time.",
  "When two Boston police officers are murdered, ex-cop Spenser teams up with his no-nonsense roommate, Hawk, to take down criminals.",
];
const comedyMovieImj = [
  "https://m.media-amazon.com/images/M/MV5BMjQ5NjA2NDg1MV5BMl5BanBnXkFtZTgwMDAzNDc4MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTU5MTgxODM3Nl5BMl5BanBnXkFtZTcwMjMxNDEwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
];
const comedyMovieYear = [
  "18 August 2017",
  "25 July 2008",
  "12 February 2016",
  "7 August 2013",
  "5 June 2009",
  "5 November 2010",
  "6 March 2020 ",
];
const comedyMovieRating = [
  { rating: 5, userNum: 1 },
  { rating: 3.7, userNum: 50 },
  { rating: 3.9, userNum: 50 },
  { rating: 3.4, userNum: 250 },
  { rating: 4.2, userNum: 550 },
  { rating: 3.6, userNum: 320 },
  { rating: 4.1, userNum: 130 },
];
const comedyMovieCast = [
  {
    Director: "Patrick Hughes",
    Writer: "Tom O'Connor",
    Stars: " Ryan Reynolds, Samuel L. Jackson, Gary Oldman ",
  },
  {
    Director: "Adam McKay",
    Writer: " Will Ferrell, Adam McKay",
    Stars: "Will Ferrell, John C. Reilly, Mary Steenburgen ",
  },
  {
    Director: "Tim Miller",
    Writer: "Rhett Reese, Paul Wernick",
    Stars: "Ryan Reynolds, Morena Baccarin, T.J. Miller ",
  },
  {
    Director: "Rawson Marshall Thurber",
    Writer: "Bob Fisher ",
    Stars: "Jason Sudeikis, Jennifer Aniston, Emma Roberts",
  },
  {
    Director: "Todd Phillips",
    Writer: "Jon Lucas, Scott Moore",
    Stars: "Zach Galifianakis, Bradley Cooper, Justin Bartha",
  },
  {
    Director: "Todd Phillips",
    Writer: "Alan R. Cohen, Alan Freedland",
    Stars: "Robert Downey Jr., Zach Galifianakis, Michelle Monaghan",
  },
  {
    Director: "Peter Berg",
    Writer: "Sean O'Keefe (screenplay by), Brian Helgeland ",
    Stars: "Mark Wahlberg, Winston Duke, Alan Arkin",
  },
];

const rinderComedy = () => {
  $(".Comedy").show();
  $(".Comedy").html("");
/// to crater rating in local storage for first time only 
for (let i = 0; i < ActionMovieName.length; i++) {
  if (!(localStorage.getItem(`rate1${i}`))){
    localStorage.setItem(`rate1${i}`, ActionMovieRating[i].rating )
  }
  if (!(localStorage.getItem(`num1${i}`))){
    localStorage.setItem(`num1${i}`, ActionMovieRating[i].userNum )
  }
}
let movRate = 0
let movRateNum = 0
  for (let i = 0; i < comedyMovieName.length; i++) {
    $(".Comedy").append(`<div class=movieDiv id='ComedyMovie${i}' ></div>`);

    $("#ComedyMovie" + i).append(
      `<div class=movieDivCH1 ><img src='${comedyMovieImj[i]}' alt='${comedyMovieName[i]} photo'></div>`
    );
    $("#ComedyMovie" + i).append(
      `<div class=movieDivCH2 id='ComedyCH${i}' ></div>`
    );
    $("#ComedyCH" + i).append(`<h1>${comedyMovieName[i]}</h1>`);
    $("#ComedyCH" + i).append(`<h2>${comedyMovieYear[i]}</h2>`);
    movRate = localStorage.getItem(`rate1${i}`)
    movRateNum = localStorage.getItem(`num1${i}`)
    $("#ComedyCH" + i).append(
      `<h4>Rating : ${
        Math.round(movRate * 10) / 10
      } / 5 From ${movRateNum} Rate </h4>`
    );
    $("#ComedyCH" + i).append(
      `<div class='rating'><button class='RButt' id='comedyRating${i}'><i class='fas fa-star' style='font-size:15px;color:#021F32'></i> Rate </button></div>`
    );
    $("#ComedyCH" + i).append(
      `<p id='breafcomedy${i}'>${comedyMovieBref[i]}</p>`
    );
    $("#ComedyCH" + i).append(
      `<div class='moreInfo'><button class='moreBUtt' id='Comedymore${i}'>More Info ...</button></div>`
    );

    $("#Comedymore" + i).on("click", () => {
      $("#ComedyCH" + i).append(
        `<div class='staffB${i}' ><p> Director: ${comedyMovieCast[i].Director} </p></div>`
      );
      $("#ComedyCH" + i).append(
        `<div class='staffB${i}' ><p> Writer: ${comedyMovieCast[i].Writer} </p></div>`
      );
      $("#ComedyCH" + i).append(
        `<div class='staffB${i}' ><p> Stars: ${comedyMovieCast[i].Stars} </p></div>`
      );
      $("#ComedyCH" + i).append(
        `<button onclick='addToFav2(${i})' class='moreBUtt' id='addFav2${i}'><i class='fas fa-star' style='font-size:17px;color:yellow;'></i> Add To Favorites </button>`
      );
      $("#Comedymore" + i).remove();
    });

    $("#comedyRating" + i).on("click", () => {
      $("#comedyRating" + i).remove();
      $("#breafcomedy" + i).remove();
      $("#Comedymore" + i).remove();
      $(".staffB" + i).hide();
      $("#addFav2" + i).hide();
      $("#ComedyCH" + i).append(
        `<div id='ComedyRateTH${i}' class='star-widget'></div>`
      );

      $("#ComedyRateTH" + i).append(
        `<input type='radio' onclick='fun1A(${i})' name='rate' id='rate-5'>`
      );
      $("#ComedyRateTH" + i).append(
        `<label for='rate-5'  class='fas fa-star'></label>`
      );
      $("#ComedyRateTH" + i).append(
        `<input type='radio' onclick='fun1A(${i})' name='rate' id='rate-4'>`
      );
      $("#ComedyRateTH" + i).append(
        `<label for='rate-4'  class='fas fa-star'></label>`
      );
      $("#ComedyRateTH" + i).append(
        `<input type='radio' onclick='fun1A(${i})' name='rate' id='rate-3'>`
      );
      $("#ComedyRateTH" + i).append(
        `<label for='rate-3'  class='fas fa-star'></label>`
      );
      $("#ComedyRateTH" + i).append(
        `<input type='radio' onclick='fun1A(${i})' name='rate' id='rate-2'>`
      );
      $("#ComedyRateTH" + i).append(
        `<label for='rate-2'  class='fas fa-star'></label>`
      );
      $("#ComedyRateTH" + i).append(
        `<input type='radio' onclick='fun1A(${i})' name='rate' id='rate-1'>`
      );
      $("#ComedyRateTH" + i).append(
        `<label for='rate-1'  class='fas fa-star'></label>`
      );
    });
  }
};

const fun1A = (i) => {
  if (
    document.getElementsByName("rate")[0].checked ||
    document.getElementsByName("rate")[1].checked ||
    document.getElementsByName("rate")[2].checked ||
    document.getElementsByName("rate")[3].checked ||
    document.getElementsByName("rate")[4].checked
  ) {
    let userRate = 0;
    if (document.getElementsByName("rate")[0].checked) {
      userRate = 5;
    }
    if (document.getElementsByName("rate")[1].checked) {
      userRate = 4;
    }
    if (document.getElementsByName("rate")[2].checked) {
      userRate = 3;
    }
    if (document.getElementsByName("rate")[3].checked) {
      userRate = 2;
    }
    if (document.getElementsByName("rate")[4].checked) {
      userRate = 1;
    }
    $("#addRateA" + i).remove();
    let movRate = localStorage.getItem(`rate1${i}`)
    let movRateNum =  localStorage.getItem(`num1${i}`)

    let rate = movRate * movRateNum
    ++movRateNum
    let newRate = (rate + userRate) / movRateNum
    localStorage.setItem(`rate1${i}`, newRate )
    localStorage.setItem(`num1${i}`, movRateNum)

    rinderComedy();
  }
};

const addToFav2 = (i) => {
  $("#addFav2" + i).remove();
  let arr = []
  let obj  = {
    Mname : comedyMovieName[i],
    breaf : comedyMovieBref[i],
    imj   : comedyMovieImj[i],
    year  : comedyMovieYear[i],
    rate  : localStorage.getItem(`rate1${i}`),
    numRat: localStorage.getItem(`num1${i}`),
    dir   :comedyMovieCast[i].Director,
    wir   :comedyMovieCast[i].Writer,
    star  :comedyMovieCast[i].Stars,
  };
  if (localStorage.getItem("favLIST")){
   arr = JSON.parse( localStorage.getItem("favLIST"))
  }
  arr.push(obj)
  localStorage.setItem("favLIST", JSON.stringify(arr));
};

//////////////////////////////////////////////Favorites list //////////////

const rinderFavorites = () => {
  $(".removeFav").remove();
  $(".Favorites").show();
  $(".Favorites").html("");
  if (localStorage.getItem("favLIST")) {
  let favArr  = JSON.parse( localStorage.getItem("favLIST"));
  for (let i=0 ; i < favArr.length ; i++  ) {
      
      $(".Favorites").append(
        `<div class=movieDiv id='FavoritesMovie${i}' ></div>`
      );
      $("#FavoritesMovie" + i).append(
        `<div class=movieDivCH1 ><img src='${favArr[i].imj}' alt='${favArr[i].Mname} photo'></div>`
      );
      $("#FavoritesMovie" + i).append(
        `<div class=movieDivCH2 id='FavoritesCH${i}' ></div>`
      );
      $("#FavoritesCH" + i).append(`<h1>${favArr[i].Mname}</h1>`);
      $("#FavoritesCH" + i).append(`<h2>${favArr[i].year}</h2>`);
      $("#FavoritesCH" + i).append(
        `<h4>Rating : ${Math.round(favArr[i].rate* 10) / 10} / 5 From ${
          favArr[i].numRat
        } Rate</h1>`
      );
      $("#FavoritesCH" + i).append(`<p id='breafFavorites${i}'>${favArr[i].breaf}</p>`);
      $("#FavoritesCH" + i).append(
        `<div class='moreInfoFav${i}' ><p> Director: ${favArr[i].dir} </p></div>`
      );
      $("#FavoritesCH" + i).append(
        `<div class='moreInfoFav${i}' ><p> Writer: ${favArr[i].wir} </p></div>`
      );
      $("#FavoritesCH" + i).append(
        `<div class='moreInfoFav${i}' ><p> Stars: ${favArr[i].star} </p></div>`
      );
      $("#FavoritesCH" + i).append(
        `<button onclick='removeMov(${i})' class='removeMov' id='removeMov${i}'>Remove From Favorites</button>`
      );


      $("#removeMov"+ i).on("click", () => {
        favArr.splice(i,1)
        localStorage.setItem("favLIST", JSON.stringify(favArr))
        rinderFavorites()

      });
    
  }
  $(".continar").append(
    `<div class='removeFav'><button onclick='removeFav()' id='removeFav'>Clear This List</button></div>`
    )
 }
  

};


const removeFav = ()=> {
  $("#removeFav").hide();
  localStorage.removeItem("favLIST")
  rinderFavorites()
}

/*
const removeMov = ()=> {

}
*/