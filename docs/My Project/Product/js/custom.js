jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('span.control_prev').click(function () {
          moveLeft();
      });
  
      $('span.control_next').click(function () {
          moveRight();
      });
  
  });  
  
  


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

  