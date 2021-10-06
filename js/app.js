$(document).ready(() => {

 //Variables
 let popular = document.getElementById('popular');
 let topRated = document.getElementById('top-rated');
 let comments = document.getElementById('comments');
 let popularContent = document.getElementById('popular-content');
 let topRatedContent = document.getElementById('top-rated-content');
 let commentsContent = document.getElementById('comments-content');

 //Stop page scroll on refresh
 window.onunload = () => {
  window.scrollTo(0, 0);
 }

 //Popular tab
 popular.onclick = (e) => {
  e.preventDefault();
  popular.style.color = '#FCC44D';
  topRated.style.color = '#FFFFFF';
  comments.style.color = '#FFFFFF';
  popularContent.style.display = 'block'
  topRatedContent.style.display = 'none';
  commentsContent.style.display = 'none';
 }

 topRated.onclick = (e) => {
  e.preventDefault();
  popular.style.color = '#FFFFFF';
  topRated.style.color = '#FCC44D';
  comments.style.color = '#FFFFFF';
  popularContent.style.display = 'none'
  topRatedContent.style.display = 'block';
  commentsContent.style.display = 'none';
 }

 comments.onclick = (e) => {
  e.preventDefault();
  popular.style.color = '#FFFFFF';
  topRated.style.color = '#FFFFFF';
  comments.style.color = '#FCC44D';
  popularContent.style.display = 'none'
  topRatedContent.style.display = 'none';
  commentsContent.style.display = 'block';
 }

});