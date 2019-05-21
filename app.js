$('DOM content loaded', function() {
  $('#hero').animate({ opacity: 1 }, { duration: 4000 })

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.navbar').fadeOut(1000)
    } else {
      $('.navbar').fadeIn(1000)
    }
  })

})
