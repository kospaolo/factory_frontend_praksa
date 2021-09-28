$(document).ready(() => {

 let upperSlider = document.getElementsByClassName('upperSlider')
 let bottomSlider = document.getElementsByClassName('bottomSlider')
 let thumbnails = document.getElementsByClassName('bottomSliderThumbnailsContainer')
 let editorials = document.getElementsByClassName('editorialsContentContainer')
 let editorialsPrev = document.getElementsByClassName('editorialsPrev')
 let editorialsNext = document.getElementsByClassName('editorialsNext')
 let localNews = document.getElementsByClassName('localNewsContentContainer')
 let localNewsPrev = document.getElementsByClassName('localNewsPrev')
 let localNewsNext = document.getElementsByClassName('localNewsNext')
 let newsCarousel = document.getElementsByClassName('newsCarouselContentContainer')
 let newsCarouselPrev = document.getElementsByClassName('newsCarouselPrev')
 let newsCarouselNext = document.getElementsByClassName('newsCarouselNext')

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

 $(newsCarousel).slick({
  prevArrow: newsCarouselPrev,
  nextArrow: newsCarouselNext,
  slidesToShow: 2,
  slidesToScroll: 2
 });

 $(editorials).slick({
  prevArrow: editorialsPrev,
  nextArrow: editorialsNext
 });

 $(localNews).slick({
  prevArrow: localNewsPrev,
  nextArrow: localNewsNext
 });


 $('img[data-enlargeable]').addClass('img-enlargeable').click(function () {

  let src = $(this).attr('src');
  let modal;

  function removeModal() {
   modal.remove();
   $('body').off('keyup.modal-close');
  }
  modal = $('<div>').css({
   background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
   backgroundSize: 'contain',
   width: '100%',
   height: '100%',
   position: 'fixed',
   zIndex: '10000',
   top: '0',
   left: '0',
   cursor: 'pointer'

  }).click(function () {
   removeModal();
  }).appendTo('body');
  $('body').on('keyup.modal-close', function (e) {
   if (e.key === 'Escape') {
    removeModal();
   }
  });
 });

});