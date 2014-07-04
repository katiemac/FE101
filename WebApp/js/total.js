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
         CAMAN
------------------------------------------------------------------------------*/

// these are where i put my filters 

Caman.Filter.register("blackAndWhite", function(grey) {

      this.greyscale();
      this.sepia(10);
      this.exposure(10);
      this.contrast(15);
      return this.vignette("60%",35);
  });

Caman.Filter.register("bright", function(grey) {

      this.brightness(7);
      this.exposure(5);
      this.contrast(16);
      return this.vibrance(7);
  });


// Generated by CoffeeScript 1.6.3
(function() {
  var presetBusy, presetCaman, render, renderPreset,
  presetCaman = null;

 
  presetBusy = false;

  renderPreset = function(preset) {
    var $filter, name;
    if (presetBusy) {
      return;
    }
    $("#PresetFilters a").removeClass('Active');
    $filter = $("#PresetFilters a[data-preset='" + preset + "']");
    name = $filter.html();
    $filter.addClass('Active').html('Rendering...');
    presetBusy = true;
    presetCaman.revert(false);
    presetCaman[preset]();
    return presetCaman.render(function() {
      $filter.html(name);
      return presetBusy = false;
    });
  };

  $(document).ready(function() {
    presetCaman = Caman('#preset-example');
    //close modal --- need to add saving out the canvas and adding to the other canvas
    $(" #done ").click(function(){ 
        //grab the context from your destination canvas
        var destCtx = document.getElementById('canvas').getContext('2d');
        destCtx.drawImage(document.getElementById('preset-example'), 0, 0);    
        $("#imageEdit").hide();
    });
    return $('#PresetFilters').on('click', 'a', function() {
      return renderPreset($(this).data('preset'));
    });
  });

}).call(this);


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
  var cnv1 = document.getElementById('canvas');
  var ctx1 = cnv1.getContext('2d');
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


