/* class 6 */

/* 

var x = 5

if (1 == "1"){
	
} double -- number = string
 
1 === 1 ----> equal to


1 !== 2 ----> not equal to


*/

var x = 1;

if (x !== 5) {
     console.log("true")
}

else {
    console.log("false")
}


//combining statements

//AND

var x = 1;

if (x !== 5 && x==1) {
     console.log("true")
}

else {
    console.log("false")
}

//OR

var x = 1;

if (x !== 5 || x==1) {
     console.log("true")
}

else {
    console.log("false")
}

//OR

var x = 1;

if ((x !== 5 && 1 !== 2) || x == 1) {
     console.log("true")
}

else {
    console.log("false")
}


//truthy vs falsy

// strings are true as long as they aren't empty

//falsy 

var name = '';
if (name) {
  console.log('Hello, ' + name);
}
var points = 0;
if (points) {
  console.log('You have ' + points + ' points');
}
var firstName;
if (firstName) {
  console.log('Your name is ' + firstName);
}


//if, else if, else

var age = 20;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}



//if, else if, else


// exercise 1

function greaterNum(num1, num2){
	if (num1 > num2){ 
		return(num1);
	}
	else {
		return(num2);
	}
}

console.log(greaterNum(5,10));


// exercise 2

function helloWorld(lang){
	if (lang === 'es'){ 
		return("Hola, Mundo");
	}
	else if (lang === 'de'){
		return("Hi, World");
	}
	else {
		return("Hello, World");
	}
}

console.log(helloWorld('en'));
console.log(helloWorld('de'));
console.log(helloWorld('es'));




// exercise 3

function assignGrade(score){
	if (score >= 90){ 
		return("A");
	}
	else if (score >= 80){ 
		return("B");
	}
	else if (score >= 70){ 
		return("C");
	}
	else if (score >= 60){ 
		return("D");
	}
	else {
		return("F");
	}
}

console.log(assignGrade(75));
console.log(assignGrade(62));
console.log(assignGrade(12));
console.log(assignGrade(95));


// exercise 4

function pluralize(noun, num){
	if (num !== 1){ 
		return(num + " " + noun);
	}
	else { 
		return(num + " " + noun + "s");
	}
}

console.log("there are " + pluralize("cat", 6));





// While statement
// will keep looping until it isn't true anymore

var x = 0;
while (x < 5) {
  console.log(x);
  x = x + 1;
}

// For Statement
// more specialized than while

for (var i = 0; i < 5; i = i + 1) {
  console.log(i);
}

// Break
// to break the loop prematurely

for (var current = 100; current < 200; current++) {
  console.log('Testing ' + current);
  if (current % 7 == 0) {
    console.log('Found it! ' + current);
    break;
  }
}

// Exercise 1
for (var x = 0; x <= 20; x++){
	if (x % 2 === 0){
		console.log(x + " is even");
	}
	else{
		console.log(x + " is odd");
	}
}


// Exercise 2
var mult = 9;
for (var x = 0; x <= 10; x++){
	var result = x * mult;
	console.log(x + " * " + mult + " = " + result);
}


for (var score = 60; score <= 100; score++){

	if (score >= 90){ 
		console.log("For " + score + ", you got an A");
	}
	else if (score >= 80){ 
		console.log("For " + score + ", you got an B");
	}
	else if (score >= 70){ 
		console.log("For " + score + ", you got an C");
	}
	else { 
		console.log("For " + score + ", you got an D");
	}

}



// Arrays

var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var raceWinners = [33, 72, 64];
var myFavoriteThings = ['Broccoli', 60481, 'Love Actually'];

//size of an array
console.log(rainbowColors.length);


// you can isolate something in the array with brackets -- numbering starts at 0

var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var firstColor = rainbowColors[0];
var lastColor = rainbowColors[6];


//overwriting an item in an array
var myFavoriteThings = ['Broccoli', 60481, 'Love Actually'];
myFavoriteThings[0] = 'Celery Root';

//adding to an array
rainbowColors[4] = 'Playgrounds';

//push in array
rainbowColors.push('Dancing');

//iterate through an arrayvar rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
for (var i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);
}



//exercise

var myColor = ['yellow', 'blue', 'red', 'orange'];


for (var x = 0; x < myColor.length; x++){
	if (x === 0){
		console.log("My " + (x+1) + "st choice is " + myColor[x])
	}
	else if (x === 1){
		console.log("My " + (x+1) + "nd choice is " + myColor[x])
	}
	else if (x === 3){
		console.log("My " + (x+1) + "rd choice is " + myColor[x])
	}
	else{
		console.log("My " + (x+1) + "th choice is " + myColor[x])
	}

}



// JQUERY

//JQUERY OBJECT == $("")

/*

$(".box".css('background', 'pink'));
$(".box".width(200px));

$(".box").click(
	function() /*doesnt need a name because it is self contained
	{
	event handler
	}
)

$(".box").click(function()
	$(this).css('background', 'pink'));
)

OR

$(".box").click(clickHandler); ----> if there is no function defined


$(this) ----> is only what you click

*/

// data types
/*
var myString = "This is a string!";
var myInteger = 1;
var myBoolean = true;
var myArray = ["string", 1, myVar, true];
var myObject = {
        name: "Pamela",
        adjective: "Cool",
        roles: ["hacker", "teacher", "coder"]
}

// navigating the dom

document.getElementById('presentation');
document.getElementsByClassName('slide');
document.getElementsByTagName('body');
*/

//exercise

var link = document.getElementsByTagName('a');

for (var x = 0; x < link.length; x++){
	var href = link[x].getAttribute('href');
	var vid_th = youtube.generateThumbnailUrl(href);
	var img = document.createElement('img');
	img.setAttribute('src', href);
	link[x].appendChild(img);
}


// the basics 

/* what i will need to replace a class

<p>Welcome to jQuery!</p>
$('p').addClass('special');

=

<p class="special">Welcome to jQuery!</p>









