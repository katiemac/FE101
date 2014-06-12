$(document).ready(function(){

	var playerXsTurn = true;


	//clicking a square should alternately add an X or an O

	$("td").on("click", function(){
		if ($(this).hasClass("X-marker") || $(this).hasClass("O-marker")){
			return;
		}

		else if (playerXsTurn){
			$(this).addClass("X-marker");
			playerXsTurn = false;
			$("#X").removeClass("current-player");
			$("#O").addClass("current-player");
		}
		else{
			$(this).addClass("O-marker");
			playerXsTurn = true;
		}
	});

	// New Game button Clears the Board

	$("input").on('click', function(){
		$("td").removeClass("X-marker O-marker");
		playerXsTurn = true;
		$("#X").addClass("current-player");
		$("#O").removeClass("current-player");
	});
});