document.addEventListener("DOMContentLoaded", function() {
  var image = document.getElementById("image");
  var playBtn = document.getElementById("play-btn");
  var header = document.getElementById("header");
  var middle = document.getElementById("middle");

  playBtn.addEventListener("click", function() {
    playBtn.style.display = "none"; 
    header.style.display = "none"; 
	middle.style.display = "none";
    image.style.display = "block"; 
  });

  // 模拟加速播放
  var lastShakeTime = 0;
  var accelerationThreshold = 10;
  window.addEventListener('devicemotion', function(event) {
    var accelerationX = event.acceleration.x;
    var accelerationY = event.acceleration.y;
    var accelerationZ = event.acceleration.z;

    var acceleration = Math.sqrt(Math.pow(accelerationX, 2) + Math.pow(accelerationY, 2) + Math.pow(accelerationZ, 2));
    var currentTime = new Date().getTime();

    if (currentTime - lastShakeTime > 1000 && acceleration > accelerationThreshold) {
      // 这里可以添加对动图的动画效果，如放大、旋转等
      lastShakeTime = currentTime;
    }
  });
});
