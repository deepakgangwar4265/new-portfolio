$("#work1").mouseenter(function() {
    $('#work-img1').css('visibility', 'visible');
});
$("#work1").mouseleave(function() {
    $('#work-img1').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work2").mouseenter(function() {
    $('#work-img2').css('visibility', 'visible');
});
$("#work2").mouseleave(function() {
    $('#work-img2').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work3").mouseenter(function() {
    $('#work-img3').css('visibility', 'visible');
});
$("#work3").mouseleave(function() {
    $('#work-img3').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work4").mouseenter(function() {
    $('#work-img4').css('visibility', 'visible');
});
$("#work4").mouseleave(function() {
    $('#work-img4').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work5").mouseenter(function() {
    $('#work-img5').css('visibility', 'visible');
});
$("#work5").mouseleave(function() {
    $('#work-img5').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work6").mouseenter(function() {
    $('#work-img6').css('visibility', 'visible');
});
$("#work6").mouseleave(function() {
    $('#work-img6').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work7").mouseenter(function() {
    $('#work-img7').css('visibility', 'visible');
});
$("#work7").mouseleave(function() {
    $('#work-img7').css('visibility', 'hidden');
});
// ***********************************************************************************

$("#work8").mouseenter(function() {
    $('#work-img8').css('visibility', 'visible');
});
$("#work8").mouseleave(function() {
    $('#work-img8').css('visibility', 'hidden');
});
// ***********************************************************************************


//Custom cursor1
var mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;

var circle = {
el: $('#work-img1'),
x: window.innerWidth/20,
y: window.innerHeight/20,
w: 10,
h: 10,
update: function() {
l = this.x - this.w/2;
t = this.y - this.h/2;
this.el.css({
'transform': 'translate3d('+l+'px, '+t+'px, 0)'
});
}
}

$(window).mousemove(function(e) {
mouseX = e.clientX;
mouseY = e.clientY;
})

setInterval(move, 1000/60)

function move() {
circle.x = lerp (circle.x, mouseX, 0.1);
circle.y = lerp (circle.y, mouseY, 0.1);
circle.update();
}

function lerp(start, end, amt) {
return (1-amt)*start + amt*end
}


// ***********************************************************************************
//Custom cursor2

var circle2 = {
el: $('#work-img2'),
x: window.innerWidth/20,
y: window.innerHeight/20,
w: 10,
h: 10,
update: function() {
l = this.x - this.w/2;
t = this.y - this.h/2;
this.el.css({
'transform': 'translate3d('+l+'px, '+t+'px, 0)'
});
}
}

setInterval(move2, 1000/60)

function move2() {
circle2.x = lerp (circle2.x, mouseX, 0.1);
circle2.y = lerp (circle2.y, mouseY, 0.1);
circle2.update();
}

// ***********************************************************************************
//Custom cursor3

var circle3 = {
    el: $('#work-img3'),
    x: window.innerWidth/20,
    y: window.innerHeight/20,
    w: 10,
    h: 10,
    update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.css({
    'transform': 'translate3d('+l+'px, '+t+'px, 0)'
    });
    }
    }
    
    setInterval(move3, 1000/60)
    
    function move3() {
    circle3.x = lerp (circle3.x, mouseX, 0.1);
    circle3.y = lerp (circle3.y, mouseY, 0.1);
    circle3.update();
    }

    // ***********************************************************************************
//Custom cursor4

var circle4 = {
    el: $('#work-img4'),
    x: window.innerWidth/20,
    y: window.innerHeight/20,
    w: 10,
    h: 10,
    update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.css({
    'transform': 'translate3d('+l+'px, '+t+'px, 0)'
    });
    }
    }
    
    setInterval(move4, 1000/60)
    
    function move4() {
    circle4.x = lerp (circle4.x, mouseX, 0.1);
    circle4.y = lerp (circle4.y, mouseY, 0.1);
    circle4.update();
    }
    
    // ***********************************************************************************
//Custom cursor5

var circle5 = {
    el: $('#work-img5'),
    x: window.innerWidth/20,
    y: window.innerHeight/20,
    w: 10,
    h: 10,
    update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.css({
    'transform': 'translate3d('+l+'px, '+t+'px, 0)'
    });
    }
    }
    
    setInterval(move5, 1000/60)
    
    function move5() {
    circle5.x = lerp (circle5.x, mouseX, 0.1);
    circle5.y = lerp (circle5.y, mouseY, 0.1);
    circle5.update();
    }
    
    // ***********************************************************************************
//Custom cursor6

var circle6 = {
    el: $('#work-img6'),
    x: window.innerWidth/20,
    y: window.innerHeight/20,
    w: 10,
    h: 10,
    update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.css({
    'transform': 'translate3d('+l+'px, '+t+'px, 0)'
    });
    }
    }
    
    setInterval(move6, 1000/60)
    
    function move6() {
    circle6.x = lerp (circle6.x, mouseX, 0.1);
    circle6.y = lerp (circle6.y, mouseY, 0.1);
    circle6.update();
    }
    
    // ***********************************************************************************
//Custom cursor7

var circle7 = {
    el: $('#work-img7'),
    x: window.innerWidth/20,
    y: window.innerHeight/20,
    w: 10,
    h: 10,
    update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.css({
    'transform': 'translate3d('+l+'px, '+t+'px, 0)'
    });
    }
    }
    
    setInterval(move7, 1000/60)
    
    function move7() {
    circle7.x = lerp (circle7.x, mouseX, 0.1);
    circle7.y = lerp (circle7.y, mouseY, 0.1);
    circle7.update();
    }
    
    // ***********************************************************************************
//Custom cursor8

var circle8 = {
    el: $('#work-img8'),
    x: window.innerWidth/20,
    y: window.innerHeight/20,
    w: 10,
    h: 10,
    update: function() {
    l = this.x - this.w/2;
    t = this.y - this.h/2;
    this.el.css({
    'transform': 'translate3d('+l+'px, '+t+'px, 0)'
    });
    }
    }
    
    setInterval(move8, 1000/60)
    
    function move8() {
    circle8.x = lerp (circle8.x, mouseX, 0.1);
    circle8.y = lerp (circle8.y, mouseY, 0.1);
    circle8.update();
    }
    
