//EXERCISE 1

var numChild = 5;
var partner = "Gary";
var loc = "NYC";
var job = "designer";

console.log("You will be a " + job + " in " + loc + ", and married to " + partner + " with " + numChild + " kids.");


//EXERCISE 2

var yr = 2014;
var bd = 1987;
var age = yr-bd;

console.log("They are either " + (age-1) + " or " + age);


//EXERCISE 3

var yr = 27;
var mxAge = 99;
var num = 25;

console.log("You will need " + (num*365*(mxAge-yr)) + " to last you until the ripe old age of " + mxAge);


//EXERCISE 4

var radius = 12;
var dia = 2*radius;

console.log("The circumference is " + (Math.PI*(dia)));
console.log("The area is " + Math.PI*(Math.pow(radius,2)));


//EXERCISE 5

var celsius = 12;
var convert = (celsius*9)/5+32;

console.log(celsius + "C is " + convert + "F");

var faren = 100;
var convert2 = (faren-32)*5/9;

console.log(faren + "F is " + convert2 + "C");



// functions

function sayMyName(){
	console.log("Hi, Katie!");
}

sayMyName();

// functions with arguments

function sayMyName(name){
	console.log("Hi, " + name);
}

sayMyName("Katie");
sayMyName("Peter");

function addNumbers(num1, num2){
	console.log(num1+num2);
}

//with output
/*
function addNumbers(num1, num2){
	return num1+num2;
}


function addNumbers(num1, num2){
	var result = num1+num2;
	return result;
}

var future = addNumbers(2014,6);
addNumbers(5,3);

var year=2014;

addNumbers(year,4);

var num = addnumbers(10,2);

console.log(addNumbers(future, num));

*/
// variables defined in a function remain within that function - local scope
// global scope variables (not defined as var =) can be used everywhere





//function exercise


//EXERCISE 1

function tellFortune(job, loc, partner, numChild){
	var future = ("You will be a " + job + " in " + loc + ", and married to " + partner + " with " + numChild + " kids.");
	console.log(future);
}

tellFortune("painter", "nyc", "jill", 3);
tellFortune("banker", "nyc", "jill", 6666);
tellFortune("hobo", "nyc", "jill", 66);
tellFortune("real estate agent", "nyc", "brad", 66);


//EXERCISE 2

function calculateSupply(age, num){
	var mxAge = 99;
	var total = num*365*(mxAge-age);
	var consumed = ("You will need " + Math.round(total) + " to last you until the ripe old age of " + mxAge);
	console.log(consumed);
}

calculateSupply(12, 300);
calculateSupply(4, 2);

//EXERCISE 3

function calcCircumference(radius){
	var dia = 2*radius;
	var circ = Math.PI*(dia);
	console.log("The circumference is " + circ)
}

function calcArea(radius){
	var dia = 2*radius;
	var area = Math.PI*(Math.pow(radius,2));
	console.log("The area is " + area)
}

calcCircumference(25);

calcArea(30);





