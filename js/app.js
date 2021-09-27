$(document).ready(() => {

 let upperSlider = document.getElementsByClassName('upperSlider')
 let bottomSlider = document.getElementsByClassName('bottomSlider')
 let thumbnails = document.getElementsByClassName('bottomSliderThumbnailsContainer')

 $(upperSlider).slick({
  prevArrow: "<span class='prev'><img class='a-left control-c prev slick-prev' src='./assets/sliderleftarrow.png'></span>",
  nextArrow: "<span class='next'><img class='a-right control-c next slick-next' src='./assets/sliderrightarrow.png'></span>"
 });

 $(bottomSlider).slick({
  prevArrow: "<span class='prev'><img class='a-left control-c prev slick-prev' src='./assets/sliderleftarrow.png'></span>",
  nextArrow: "<span class='next'><img class='a-right control-c next slick-next' src='./assets/sliderrightarrow.png'></span>",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.bottomSliderThumbnailsContainer'
 });

 $(thumbnails).slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.bottomSlider',
  centerMode: false,
  focusOnSelect: true
 });
});