$('DOM content loaded', function() {
  $('#hero').animate({ opacity: 1 }, { duration: 4000 })

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.navbar').fadeOut(1000)
    } else {
      $('.navbar').fadeIn(1000)
    }
  })

  $('.project-content').hide()
  $('button').click(function () {
    $(this).prev('.project-content').slideToggle()
    $(this).toggleClass('show-button hide-button')
  })
})
