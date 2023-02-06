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

//map
$(function(){
  $("#map > div").mouseenter(function(){
    $(this).children().stop().fadeIn();
  });

  $("#map > div").mouseleave(function(){
    $(this).children().stop().fadeOut();
  });
});

var arr=["img/America.mp4","img/southAmerica.mp4","img/Europe.mp4","img/Iceland.mp4","img/Asia.mp4","img/Russia.mp4"]

$(function () {
  $("#map > div").mouseenter(function (event) {
    var x = event.pageX;
    var y = event.pageY;
    var i = $(this).index();
    $("#vid").attr("src", arr[i - 1]);

    $("#vid").css({ left: x - 150, top: y - 450 }).addClass("on");
  }).mouseleave(function () {
    $("#vid").removeClass("on");
  });
  
});