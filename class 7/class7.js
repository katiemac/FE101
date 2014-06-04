/* class 7 */
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

	//counter 	//condition				//update
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
	else if (x === 2){
		console.log("My " + (x+1) + "rd choice is " + myColor[x])
	}
	else{
		console.log("My " + (x+1) + "th choice is " + myColor[x])
	}

}


for (var x = 0; x < myColor.length; x++){
	var suffix;
	if (x+1 === 1){
		suffix = "st";
	}
	else if (x+1 === 2){
		suffix = "nd";
	}
	else if (x+1 === 3){
		suffix = "rd";
	}
	else{
		suffix = "th";
	}
	console.log("My " + (x+1) + suffix + " choice is " + myColor[x])
}




//OBJECTS

/*
var objectName = { 
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};
*/
var lizzieTheCat = {
  age: 18,
  furColor: "grey",
  likes: ["catnip", "milk"],
  birthday: {"month": 7, "day": 17, year: 1994}
};


// can access properties in an object through dot notation
var aboutMe = {
  hometown: "Pasadena, CA",
  hair: "brown"
}; 

var myHometown = aboutMe.hometown;

//or in brackets, like an array
var myHair = aboutMe["hair"];

//can change properties
aboutMe.hair = "blue";

//can add properties
aboutMe.gender = "female";

//can delete properties
delete aboutMe.gender;



// arrays can hold objects

var myCats = [
  {name: "Lizzie", 
   age: 18},
  {name: "Daemon",
   age: 1}
];

for (var i = 0; i < myCats.length; i++) {
  var myCat = myCats[i];
  console.log(myCat.name + ' is ' + myCat.age + ' years old.');
}

//and can be passed into functions

var lizzieTheCat = {
  age: 18,
  furColor: "grey",
  likes: ["catnip", "milk"],
  birthday: {"month": 7, "day": 17, year: 1994}
}

function describeCat(cat) {
  console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
}

describeCat(lizzieTheCat);


//exercise - recipe card

var recipe = {
	title: "Mole",
	servings: 2,
	ingredients: ["cinnamon", "cumin", "cocoa"],
}

console.log(recipe.title);
console.log("Servings: " + recipe.servings);
console.log("Ingredients: ");
for (var x = 0; x < recipe.ingredients.length; x++){
	console.log(recipe.ingredients[x]);
}

//exercise - the reading list

var books = [
	{title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true},
	{title: "A Yankee in King Arthur's Court", author: "Mark Twain", alreadyRead: false},
	{title: "The Bible", author: "Jesus", alreadyRead: false}
]

for (var x = 0; x < books.length; x++){
	var book = books[x]; //need to set up the loop to run through all of them. 

	if (book.alreadyRead){
		console.log("You already read \"" + book.title + "\" by " + book.author);
	}
	else{
		console.log("You still need to read \"" + book.title + "\" by " + book.author);
	}
}

//exercise - the movie database

var movie = {
	title: "Puff the Magic Dragon",
	duration: 30, 
	stars: ["Puff", "Jackie", "Living Sneezes"]
};

function movieInfo(movie){
	console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars)
}

movieInfo(movie);



//Object Oriented Javascript

//constructor

/*
functon person(name, age){
	this.name = name;
	this.age = age;
}

var nicole = new person ("Nicole", 87);
console.log(nicole);

var katie = new person ("Katie", 27);
console.log(katie);

var jenni = new person ("Jenni", 2);
console.log(jenni);
*/




function Person(name, gender){
	this.name = name;
	this.gender = gender;
}

var nicole = new Person ("Nicole", "female");

var people = [
	new Person("jenni", "female"),
	new Person("shimon", "male"),
	new Person("nicole", "female"),
	new Person("ka qui", "male"),
	new Person("katie", "female"),
]


console.log(people[3]);



/******************************************
					JQUERY
********************************************/

$('#target').css('background', '#000');


