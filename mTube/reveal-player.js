$(document).ready(function() {
    $('#start-course').on('click', function() {

        $('#first-section').css("padding", "85px 0 10px 0"); 
        $('#video-player').show(); 

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
          $('html,body').animate({
              scrollTop: target.offset().top
          }, "slow");
          return false;
        };        
    });
});