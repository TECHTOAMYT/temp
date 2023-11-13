

// $('.cardBottom').mouseleave(function(){   
//     $('.card').addClass('restore');
// });
function obj_hover_rotate($hover_obj, $wrap_obj, $move_obj){
  $($hover_obj).mousemove(function(ev){
    // var clientHeight = $(window).height;
    // var clientWidth = $(window).width;
    // $('.card').removeClass('restore')
    var oEvent = ev || event;

    var cardWidth = parseInt($($wrap_obj).css('width'));
    var cardHeight = parseInt($($wrap_obj).css('height'));

    var cardLeft = parseInt($($wrap_obj).css('left'));
    var cardTop = parseInt($($wrap_obj).css('top'));

    var centerDisX = oEvent.clientX - cardLeft; 
    var centerDisY = oEvent.clientY - cardTop;
    console.log(centerDisX)

    //$('.txt').val(centerDisX + ", "+ centerDisY);
    var degX = (Math.abs(centerDisY) / (cardHeight/2)) * 10;
    var degY = (Math.abs(centerDisX) / (cardWidth/2)) * 10;
    //$('.txt').val(degX + ", "+ degY);

    if(centerDisY < 0 && centerDisX < 0){
       $($move_obj).css({'transform' : 'translate(-50%, -50%) rotateX('+degX+'deg) rotateY(-'+degY+'deg)'});
    }
     if(centerDisY < 0 && centerDisX > 0){
       $($move_obj).css({'transform' : 'translate(-50%, -50%) rotateX('+degX+'deg) rotateY('+degY+'deg)'});
    }
     if(centerDisY > 0 && centerDisX < 0){
       $($move_obj).css({'transform' : 'translate(-50%, -50%) rotateX(-'+degX+'deg) rotateY(-'+degY+'deg)'});
    }
     if(centerDisY > 0 && centerDisX > 0){
       $($move_obj).css({'transform' : 'translate(-50%, -50%) rotateX(-'+degX+'deg) rotateY('+degY+'deg)'});
    }
  });
}



obj_hover_rotate("body", ".cardBottom", ".card");
