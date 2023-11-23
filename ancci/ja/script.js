

$(function (){
  $('#rogo').hide().fadeIn(4500);
  $('#hpLink').fadeIn(1000);
});


  var scroll;
  var winH = $(window).height();
  var message = $('#message').offset().top;
  var infomation = $('#infomation').offset().top;


  $(window).on('scroll', function(){
    scroll = $(window).scrollTop();
    if(scroll >= message - winH){
    $('#message01').fadeIn(2000);
    $('#message02').fadeIn(3500);
  };
});

$(window).on('scroll', function(){
  scroll = $(window).scrollTop();
  if(scroll >= infomation- winH){
  $('#infomation1').fadeIn(1000);
  $('#info03').fadeIn(3500);
  $('#place').fadeIn(5000);
};
});


