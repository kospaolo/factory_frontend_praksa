$(document).ready(() => {

 // let upperDiv = $("#upper");
 // let lowerDiv = $("#lower");

 $("#next").click(() => {
  // moveRight();
  nextButtonAnimation();
 });

 $("#prev").click(() => {
  // moveLeft();
  prevButtonAnimation();
 });

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

 let nextButtonAnimation = () => {
  let nextButton = $('#next');
  nextButton.prop('disabled', true);
  setTimeout(function () {
   nextButton.prop('disabled', false);
  }, 200);
 }

 let prevButtonAnimation = () => {
  let prevButton = $('#prev');
  prevButton.prop('disabled', true);
  setTimeout(() => {
   prevButton.prop('disabled', false);
  }, 200);
 }
});