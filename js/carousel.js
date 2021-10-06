$(document).ready(() => {

 //Variables
 let editorials = document.getElementsByClassName('editorials-content-container');
 let editorialsPrev = document.getElementsByClassName('editorials-prev');
 let editorialsNext = document.getElementsByClassName('editorials-next');
 let localNews = document.getElementsByClassName('local-news-content-container');
 let localNewsPrev = document.getElementsByClassName('local-news-prev');
 let localNewsNext = document.getElementsByClassName('local-news-next');
 let newsCarousel = document.getElementsByClassName('news-carousel-content-container');
 let newsCarouselPrev = document.getElementsByClassName('news-carousel-prev');
 let newsCarouselNext = document.getElementsByClassName('news-carousel-next');

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

});