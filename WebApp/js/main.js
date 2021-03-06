function eventWindowLoaded() {

/*------------------------------------------------------------------------------
					DROPDOWNS
------------------------------------------------------------------------------*/

	function DropDown(el) {
		this.dd = el;
		this.initEvents();
	}

	DropDown.prototype = {
		initEvents : function() {
			var obj = this;

			obj.dd.on('click', function(event){
				$(this).toggleClass('active');
				event.stopPropagation();
			});	
		}
	};

	$(function() {

		var dd = new DropDown( $('.dd') );

		$(document).click(function() {
			// all dropdowns
			$(dd).removeClass('active');
		});

	});


/*------------------------------------------------------------------------------
					SET UP CANVAS
------------------------------------------------------------------------------*/

function canvasApp(){
	// get a reference to the canvas element, and its context
	var cnv1 = document.getElementById('canvas');
	var ctx1 = cnv1.getContext('2d');

/*------------------------------------------------------------------------------
					CLEAR CANVAS
------------------------------------------------------------------------------*/

	// function to clear the canvas
	// cnv = the object with the canvas element
	function clearCanvas(cnv1) {
		var ctx = cnv1.getContext('2d');     // gets reference to canvas context
		ctx.beginPath();    // clear existing drawing paths
		ctx.save();         // store the current transformation matrix

		  // Use the identity matrix while clearing the canvas
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, cnv1.width, cnv1.height);

		ctx.restore();        // restore the transform
	}

/*------------------------------------------------------------------------------
					CAMAN FILTERS
------------------------------------------------------------------------------*/
	
	function imageBase(){

		Caman("#canvas", "../images/ryan_gosling.jpg", function () {
			//resize the image to fit the screen and crop
			this.resize({
				width: 600,
			});

			this.crop(600, 600);

			// You still have to call render!
			this.render();

		});

	}

	imageBase(); //repaints the image that was uploaded
	

	function imageBW(){

		Caman("#canvas", "../images/ryan_gosling.jpg", function () {
			//in here will need if/else for the dropdown styles
			// manipulate image here -- change this function to b within the selction dropdown stuff
			this.revert(false);

			this.resize({
				width: 600,
			});

			this.crop(600, 600);

			this.greyscale();
			this.sepia(10);
			this.exposure(10);
			this.contrast(15);
			this.vignette("60%",35);

			// You still have to call render!
			this.render();
		});
	}

	function imageBright(){
		Caman("#canvas", "../images/ryan_gosling.jpg", function () {
			//in here will need if/else for the dropdown styles
			// manipulate image here -- change this function to b within the selction dropdown stuff
			this.revert(false);
			
			this.resize({
				width: 600,
			});

			this.crop(600, 600);

			this.brightness(7);
			this.exposure(5);
			this.contrast(16);
			this.vibrance(7);

			// You still have to call render!
			this.render();
		});
	}

	$(" #bw ").click(function(){
			//clearCanvas(cnv1); //need to find out why clear isn't working
			imageBW();
	});

	$(" #bright ").click(function(){
			//clearCanvas(cnv1); //need to find out why clear isn't working
			imageBright();
	});


	//close modal --- need to add saving out the canvas and adding to the other canvas
	$(" #done ").click(function(){
			$("#imageEdit").hide();
	});



//trying to figure out how to save it the image. can then pull that into the canvas for text manipulation
/*	function imageSave(){
			this.render(function () {
		    this.save("../images/ryan_gosling_2.png");
		  });
		}

		$("#done").click(function(){
			imageSave();
		});*/

/*------------------------------------------------------------------------------
				to add text from input on to the canvas 
------------------------------------------------------------------------------*/
	// adds the text in canvas, on multiple lines
	// ctx = reference to canvas context
	// text = the text to add
	// x = horizontal position where to start adding the text
	// y = vertical position where to start adding the text
	// maxWidth = the maximum width of the text line
	// lineHeight = the height of the line

	// sets maximum line width, line height, and x /y coords for text
	var maxWidth = cnv1.width - 10;
	var lineHeight = 23;
	var x_pos = (cnv1.width - maxWidth) / 2;
	var y_pos = 15;

	function  addTextCnv(ctx, text, x, y, maxWidth, lineHeight) {
	
	if (!text){
		return;
	} //exits the function if there is no text

	// splits the text in words to can wrap it on new lie if exceds maxWidth
		var words = text.split(' ');
		var nr_w = words.length;
		var addtxt = '';

	  // sets to add the text and rows
		for(var n = 0; n < nr_w; n++) {
			var txtLine = addtxt + words[n] + ' ';
			var metrics = ctx.measureText(txtLine);
			var txtWidth = metrics.width;
			if (txtWidth > maxWidth && n > 0) {
				ctx.fillText(addtxt, x, y);
				addtxt = words[n] + ' ';
				y += lineHeight;
			}
			else {addtxt = txtLine;}
		  }

		// adds the text in canvas (sets text color, font type and size)
		ctx.fillStyle = '#2ac498';
		ctx.font = 'bold 17px sans-serif';
		ctx.fillText(addtxt, x, y);
	}


/*------------------------------------------------------------------------------
					UPDATE THE CANVAS 
------------------------------------------------------------------------------*/

	function update(){
		//clearCanvas(cnv1); // clears the canvas
		//add the styles based on the dropdown
		addTextCnv(ctx1, this.value, x_pos, y_pos, maxWidth, lineHeight); // adds the text
		//Caman.reloadCanvasData();
	}
	
	update();
	// register onkeyup event for #text_cnv text field to repaint the canvas
	document.getElementById('text_cnv').onkeyup = update;
	//on upload image, update
	//on dropdown select, update
}

canvasApp();

}

window.addEventListener('load', eventWindowLoaded, false);



// context.save() will use this to save the canvas



	
