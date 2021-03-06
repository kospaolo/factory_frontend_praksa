$(document).ready(() => {

 //Variables
 let upperSlider = document.getElementsByClassName('upper-slider');
 let bottomSlider = document.getElementsByClassName('bottom-slider');
 let thumbnails = document.getElementsByClassName('bottom-slider-thumbnails-container');

 //Slider animations
 $(upperSlider).slick({
  prevArrow: "<span class='prev'><img class='a-left control-c prev slick-prev' src='./assets/sliderleftarrow.png'></span>",
  nextArrow: "<span class='next'><img class='a-right control-c next slick-next' src='./assets/sliderrightarrow.png'></span>",
  autoplay: true
 });

 $(bottomSlider).slick({
  prevArrow: "<span class='prev'><img class='a-left control-c prev slick-prev' src='./assets/sliderleftarrow.png'></span>",
  nextArrow: "<span class='next'><img class='a-right control-c next slick-next' src='./assets/sliderrightarrow.png'></span>",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
 });

 $(thumbnails).slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: bottomSlider,
  centerMode: false,
  focusOnSelect: true
 });

 //Slider zoom in
 $('img[data-enlargeable]').addClass('img-enlargeable').click(function () {
  let src = $(this).attr('src');
  let zoomedImage;

  function removeZoomedImage() {
   zoomedImage.remove();
   $('body').off('keyup.zoomedImage-close');
  }
  zoomedImage = $('<div>').css({
   background: 'RGBA(0,0,0,0.8) url(' + src + ') no-repeat center',
   backgroundSize: 'contain',
   width: '100%',
   height: '100%',
   position: 'fixed',
   zIndex: '10000',
   top: '0',
   left: '0',
   cursor: 'pointer'
  }).click(function () {
   removeZoomedImage();
  }).appendTo('body');
  $('body').on('keyup.zoomedImage-close', function (e) {
   if (e.key === 'Escape') {
    removeZoomedImage();
   }
  });
 });

});