$(document).ready(function() {
  playBackground();
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $('.hadouken').hide();
        $('.hadouken').css('left', '620px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    //ryu goes back to his ready position
  });
  $(document).keydown(function(x) {
    if (x.which === 88) {
      $('.ryu-ready').hide();
      $('.ryu-cool').show();

    }
  })
  .keyup(function() {
    $('.ryu-cool').hide();
    $('.ryu-ready').show();

  });
  $('#musicOn').click(function(){
    $('#background-music')[0].play();
  });
  $('#musicOff').click(function(){
    $('#background-music')[0].pause();
  });
});
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
function playBackground() {
  $('#background-music')[0].volume = 0.35;
  $('#background-music')[0].load();
  $('#background-music')[0].play();
}
