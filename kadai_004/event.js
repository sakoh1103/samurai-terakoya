$(function(){
  console.log('loadイベントが発生しました');});

  $(window).on('load scroll', (e) =>{
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });