$(document).ready(function() {
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            blurVal = 'blur(' + (s/80) + 'px)';

        $('h1').css('filter', blurVal);
    });
});



$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 370) {
    $('h1').show();
  } else {
    $('h1').hide();
  }
});



$(document).ready(function(){
    $(".facebook").hover(function(){
        $(this).css("background-color", "#3B5998");
        }, function(){
        $(this).css("background-color", "rgba(0,0,0,0)");
    });
    $(".linkedin").hover(function(){
        $(this).css("background-color", "#0077B5");
        }, function(){
        $(this).css("background-color", "rgba(0,0,0,0)");
    });
    $(".github").hover(function(){
        $(this).css("background-color", "#2BB74B");
        }, function(){
        $(this).css("background-color", "rgba(0,0,0,0)");
    });
    $(".email").hover(function(){
        $(this).css("background-color", "#EA4335");
        }, function(){
        $(this).css("background-color", "rgba(0,0,0,0)");
    });
});






