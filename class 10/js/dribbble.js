/*$.ajax(
	{url: "https://api.dribbble.com/players/simplebits/shots", dataType: "jsonp"}).done(
		function(data) {
			for(var i = 0; i < data.shots.length; i++){
				console.log(data.shots[i]);
				$("#shots").append("<img src='"+data.shots[i].image_400_url+"'>")
				console.log(data.shots[i].image_url);
			}
		}
);		


//$(".shot_count").html(data.likes_count);


*/



$.ajax(
	{url: "https://api.dribbble.com/shots/popular", dataType: "jsonp"}).done(
		function(data) {
			for(var i = 0; i < data.shots.length; i++){
				console.log(data.shots[i]);
				$("#shots").append("<img src='"+data.shots[i].image_url+"'>").append("<div id='comments'> Comments: "+data.shots[i].comments_count+"</div>").append("<div id='name'> Name: "+data.shots[i].player.name+"</div>");
			}
		}
);	