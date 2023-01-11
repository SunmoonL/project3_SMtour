//비행기 움직임 랜덤
$(function(){
const fly = document.getElementById("fly");

fly.style.left = "0px";
fly.style.top = "0px";
fly.style.transform = "rotate(30deg)";

setInterval(function() {

  const newLeft = Math.random() * window.innerWidth;
  const newTop = Math.random() * window.innerHeight;
  const newRotation = Math.floor(Math.random() * 360);

  fly.style.left = newLeft + "px";
  fly.style.top = newTop + "px";
  fly.style.transform = "rotate(" + newRotation + "deg)";

  // fly.style.backgroundPosition = (x % 100) + "px";
}, 2000);
});

//비행기 클릭시 구름 애니메이션
// $(function(){
//   $("#wrap").hide();
// $("#fly").on("click",function(){
//     $("#fly").hide();
//     $(".fa-cloud").animate({left:"-1000px"},2000,function(){
//         $("#splash").hide();
//         $("#wrap").fadeIn();
//     });
// });
// });

// 네비 리스트
$(function () {
  $("nav > ul > li").mouseenter(function () {
    $(this).children(".menu").stop().slideDown();
  }).mouseleave(function () {
    $(".menu").stop().fadeOut();
  });
});

$(function () {
  $(".menu > li").mouseenter(function () {
    $(this).children(".submenu").stop().slideDown();
  }).mouseleave(function () {
    $(".submenu").stop().fadeOut();
  });
});

// 햄버거 메뉴
$(function () {
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
});

$(function(){
  $("#map > div").mouseenter(function(){
    $(this).children().stop().fadeIn();
  });

  $("#map > div").mouseleave(function(){
    $(this).children().stop().fadeOut();
  });
});

$(function(){
$("#map > div").mousemove(function(event) {
  var x = event.pageX;
  var y = event.pageY;
  // if(70 < x < 315, 50 < y < 155){
  //   $("#vid").attr("src","img/America.mp4")}
  // else if(255 < x < 450, 205 < y < 475){
  //   $("#vid").attr("src","img/southAmerica.mp4")
  // }
  // else if(500 < x < 545, -68 < y < -44){
  //   $("#vid").attr("src","img/Iceland.mp4")
  // }
  // else if(560 < x < 730, -120 < y < 110){
  //   $("#vid").attr("src","img/Europe.mp4")
  // }
  // else if(995 < x < 1200, 150 < y < 290){
  //   $("#vid").attr("src","img/Asia.mp4")
  // }
  // else if(780 < x < 1410, -290 < y < 80){
  //   $("#vid").attr("src","img/Russia.mp4")
  // };

  if($(this)==$("#america")){
    $("#vid").attr("src","img/America.mp4")}

  else if($(this)==$("#southAmerica")){
    $("#vid").attr("src","img/southAmerica.mp4")}

  else if($(this)==$("#europe")){
    $("#vid").attr("src","img/Europe.mp4")}

  else if($(this)==$("#iceland")){
    $("#vid").attr("src","img/Iceland.mp4")}

  else if($(this)==$("#eastAsia")){
    $("#vid").attr("src","img/Asia.mp4")}

  else if($(this)==$("#russia")){
    $("#vid").attr("src","img/Russia.mp4")};

  $("#vid").css({left: x - 150, top: y - 450}).addClass("on");
}).mouseleave(function() {
  $("#vid").removeClass("on");
});
});