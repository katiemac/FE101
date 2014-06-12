/* class 8 -- JQuery */

$(document).ready(function(){ //makes sure that the html is loaded before running the function
	$('div').parent(); //selects the parent of the element defined
	$('div').css('width','200px'); //changes the css of an element
})

//all jQuery chains

$('div').parent();.css('width','200px');


//has othr selectors

$('.box:eq(0)').parent;
$('.box:first').parent;

// div:eq(1) ---> is nth-of-type but shorter
// div:first ---> first-of-type but shorter
// .parent(), .siblings(), .next(), .children(), .prev(),

//animations

$(".box").fadeOut()



//jQuery Events

// Event Listener - waits for the event and is bound to something
// Event Handler - function for the event

//javascript way

document.addEventListener ("click", function(){
	alert: ("hi");
});

//JQuery Way

$(document).click(function()){
	alert: ("hi");
)};



//DEBUGGING
// if nothing seems to happen, paste just the selector into the console and see if anything is actually coming up. 


$(".box").on("hover", function(){
	$(this).css("background-color", "black");
});



$("li").html("<b>Lorem Ipsum</b>");





