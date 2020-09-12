$(document).on('scroll', function (){
  $('.row1, .row3').css('left', Math.max(500 - 0.35*window.scrollY) + 'px')
})

$(document).on('scroll', function (){
  $('.row2, .row4').css('right', Math.max(500 - 0.35*window.scrollY) + 'px')
})

//here we grab all the circles in the HTML
const circles = document.querySelectorAll('.circle')
//the above gives us an array, so we need to loop through it to apply animation to all elements in the array
circles.forEach(function(circle, index) {
  //in here, we have access to each circle, index also gives us the 'position' of each circle, which is then used to power staggered animation delays
    circle.animate ([
      //keyframes
    { transform: 'scale(1)'},
    { transform: 'scale(1.2)'},
    { transform: 'scale(1)'}
  ], {
      //timing options
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
})