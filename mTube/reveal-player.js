$(document).ready(function() {
    $('#start-course').on('click', function() {
        $('#video-player').show(200);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
          $('html,body').animate({
              scrollTop: target.offset().top
          }, 800);
          return false;
        };
    });
  });