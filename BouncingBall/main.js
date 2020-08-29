function playAnimation(){
    var audio = document.getElementById("audio");
    audio.play();
    var ball = document.getElementById("ball_figure");
    ball.classList.add("ball-active");
}