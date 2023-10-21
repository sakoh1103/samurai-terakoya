$(function() {

  // 色を変える
  $('#change-color').on('click', function() {
    $('#target').css('color','red');
  });

  //文字を変更する
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });

  // ボタンを押すとフェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // ボタンを押すとフェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});