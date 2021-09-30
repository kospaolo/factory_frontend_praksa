$(document).ready(() => {

 //Variables
 let upperSlider = document.getElementsByClassName('upper-slider');
 let bottomSlider = document.getElementsByClassName('bottom-slider');
 let thumbnails = document.getElementsByClassName('bottom-slider-thumbnails-container');
 let editorials = document.getElementsByClassName('editorials-content-container');
 let editorialsPrev = document.getElementsByClassName('editorials-prev');
 let editorialsNext = document.getElementsByClassName('editorials-next');
 let localNews = document.getElementsByClassName('local-news-content-container');
 let localNewsPrev = document.getElementsByClassName('local-news-prev');
 let localNewsNext = document.getElementsByClassName('local-news-next');
 let newsCarousel = document.getElementsByClassName('news-carousel-content-container');
 let newsCarouselPrev = document.getElementsByClassName('news-carousel-prev');
 let newsCarouselNext = document.getElementsByClassName('news-carousel-next');
 let popular = document.getElementById('popular');
 let topRated = document.getElementById('top-rated');
 let comments = document.getElementById('comments');

 //Stop page scroll on refresh
 window.onunload = () => {
  window.scrollTo(0, 0);
 }

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


 //Carousel animations
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

 //Popular tab
 popular.onclick = (e) => {
  e.preventDefault();
  popular.style.color = '#FCC44D';
  topRated.style.color = '#FFFFFF';
  comments.style.color = '#FFFFFF';
 }

 topRated.onclick = (e) => {
  e.preventDefault();
  popular.style.color = '#FFFFFF';
  topRated.style.color = '#FCC44D';
  comments.style.color = '#FFFFFF';
 }

 comments.onclick = (e) => {
  e.preventDefault();
  popular.style.color = '#FFFFFF';
  topRated.style.color = '#FFFFFF';
  comments.style.color = '#FCC44D';
 }
});