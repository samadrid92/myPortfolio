//statement that will run function only on index.html
if ($('a.my-logo').attr('href') === getCurrentHref()){
  playDescriptions();
}

function getCurrentHref (){
  var windowHref;
  var currentArray;
  var currentHref;
  //gets current href of user
  windowHref = window.location.href;
  currentArray = windowHref.split("/")
  currentHref = currentArray[currentArray.length-1];
  return currentHref;
}

function playDescriptions(){
  var i = 0;
  var $homeDiv = $("#me-div");
  var descriptions = ["Web Developer", "Web Designer", "Dog Lover", "Ikea Master-Builder", "L.A. Dodgers Fan", "Foodie", "Undefeated Boxer", "Brunch Enthusiast",
                      "CIF Champ", "Happy Drunk", "L.A. Kings Fan", "World Traveler", "L.A. Rams Fan", "L.A. Lakers Fan", "1st Gen American", "Real Madrid Fan"];
  $homeDiv.empty();
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
  }, 570);
}

console.log($(document).height());
console.log($(window).height());
console.log($("header").height());
console.log($(".about-content").height());
console.log($(".me-photo").height());
