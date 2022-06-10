

$("#show").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".swiper-main").offset().top  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

