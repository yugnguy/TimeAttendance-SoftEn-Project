$("#hamberg-menu").hide();
$('.nav-icon').on('click',function(){
    $(this).toggleClass("change");
    if($("#hamberg-menu").is(':visible')){
        $("#hamberg-menu").fadeToggle(function(){
            $("#current-time-details").fadeToggle();
            $('#already-in-responsive').fadeIn();
        });
    }else{
        $("#current-time-details").fadeToggle("fast",function(){
            $('#already-in-responsive').hide();
            $("#hamberg-menu").fadeToggle();
        });
    }
});