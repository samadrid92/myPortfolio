console.log("sanity check");

var i;
var $spot = $("#me-section");
var counter = 0;
var nums = ["one","two","three","four","five","six"];


// for (i=0; i < nums.length; i++){
//   var oneItem = nums[i];
//   $spot.append(oneItem);
//
//   // console.log();
// }

// $.each(nums, function (i, v) {
//   var array = v;
//   console.log(array);
// })



// function boo(array){
//   for (i=0; i < nums.length; i++){
//       $spot.replaceWith(nums[i] + "<br>");
//   }
//
// }

var i = 0;
var $spot = $("#me-section");
var nums = ["Web Developer","Web Designer","L.A. Rams Fan","L.A. Dodgers Fan","L.A. Kings Fan",
            "L.A. Lakers Fan", "1st Gen American", "Foodie", "Dog Lover", "Wanderlust"];

// setInterval(function(){
//   $spot.empty();
//   for (i;;){
//     var count = i;
//     console.log("count:" + count);
//     $spot.append("<h1>" + nums[count] + "</h1>");
//     break;
//   }
//   i++;
// }, 1000);



// function boom(){
//   alert("boom!");
// }
//
// setTimeout(boom, 2000);







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

// function getRandom(arr){
//   var rand = Math.random();
//   return arr[Math.floor(rand *arr.length)];
// }


// var words = "developer"
// $("#me-section").html(words);
