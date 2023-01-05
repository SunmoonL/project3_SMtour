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

  fly.style.backgroundPosition = (x % 100) + "px";
}, 2000);
});
//비행기 클릭시 구름 애니메이션
$(function(){
  $("#wrap").hide();
$("#fly").on("click",function(){
    $("#fly").hide();
    $(".fa-cloud").animate({left:"-1000px"},2000,function(){
        $("#splash").hide();
        $("#wrap").fadeIn();
    });
});
});
