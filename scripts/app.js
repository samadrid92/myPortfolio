console.log("App.js Working");
var windowHref;
var currentArray;
var currentHref;
//gets current href of user
windowHref = window.location.href;
currentArray = windowHref.split("/")
currentHref = currentArray[currentArray.length-1];

//statement that will run function only on index.html
if ($('a.my-logo').attr('href') === currentHref){
  // playDescriptions();
}

function playDescriptions(){
  var i = 0;
  var $homeDiv = $("#me-div");
  var descriptions = ["Web Developer", "Web Designer", "Dog Lover", "Ikea Master-Builder", "L.A. Dodgers Fan", "Foodie", "Undefeated Boxer",
                      "CIF Champ", "Happy Drunk", "L.A. Kings Fan", "World Traveler", "L.A. Rams Fan", "L.A. Lakers Fan", "1st Gen American"];
  setInterval(function(){
    $homeDiv.empty();
    if (i >= descriptions.length ){
      i = 0;
    }
    for (i;;){
      var count = i;
      $homeDiv.append("<h1>" + descriptions[count] + "</h1>");
      break;
    }
    i++;
  }, 650);
}



//gets current href of user
var windowHref = window.location.href;
var currentArray = windowHref.split("/")
var currentHref = currentArray[currentArray.length-1];
console.log(currentHref);



//statement that will run function only on index.html
function playQualities() {
  if ($('a.my-logo').attr('href') === currentHref){
    alert("It's running on index.html!");
  }
}
