//...
 
obj.dd.on('click', function(event){
    $(this).toggleClass('active');
    return false;
});
 
//...
 
$(function() {
 
    var dd = new DropDown( $('#dd') );
 
    $(document).click(function() {
        // all dropdowns
        $('.wrapper-drop-1').removeClass('active');
    });
 
});