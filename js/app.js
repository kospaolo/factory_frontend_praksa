// $(document).ready(() => {

// let upperDiv = $("#upper");
// let lowerDiv = $("#lower");

// $("#next").click(() => {
//  // moveRight();
//  nextButtonAnimation();
// });

// $("#prev").click(() => {
//  // moveLeft();
//  prevButtonAnimation();
// });

// let moveRight = () => {
//     let upperImages = $("#upper img");
//     let lowerImages = $("#lower img");
//     let firstUpper = upperImages.first();
//     let firstLower = lowerImages.first();
//     firstUpper.appendTo(upperDiv);
//     firstLower.appendTo(lowerDiv);
// }

// let moveLeft = () => {
//     let upperImages = $("#upper img");
//     let lowerImages = $("#lower img");
//     let lastUpper = upperImages.last();
//     let lastLower = lowerImages.last();
//     lastUpper.prependTo(upperDiv);
//     lastLower.prependTo(lowerDiv);
// }

// let nextButtonAnimation = () => {
//  let nextButton = $('#next');
//  nextButton.prop('disabled', true);
//  setTimeout(function () {
//   nextButton.prop('disabled', false);
//  }, 200);
// }

// let prevButtonAnimation = () => {
//  let prevButton = $('#prev');
//  prevButton.prop('disabled', true);
//  setTimeout(() => {
//   prevButton.prop('disabled', false);
//  }, 200);
// }

$(document).ready(() => {

 let upperSlider = document.getElementsByClassName('upperSlider')
 let bottomSlider = document.getElementsByClassName('bottomSlider')

 $(upperSlider).slick({
  prevArrow: "<span class='prev'><img class='a-left control-c prev slick-prev' src='./assets/sliderleftarrow.png'></span>",
  nextArrow: "<span class='next'><img class='a-right control-c next slick-next' src='./assets/sliderrightarrow.png'></span>"
 });

 $('.bottomSlider').slick({
  prevArrow: "<span class='prev'><img class='a-left control-c prev slick-prev' src='./assets/sliderleftarrow.png'></span>",
  nextArrow: "<span class='next'><img class='a-right control-c next slick-next' src='./assets/sliderrightarrow.png'></span>",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.bottomSliderThumbnailsContainer'
 });

 $('.bottomSliderThumbnailsContainer').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.bottomSlider',
  centerMode: true,
  focusOnSelect: true
 });

});

// });