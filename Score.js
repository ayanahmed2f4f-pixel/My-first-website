let score = 0;

function spawnObstacle() {
  const gap = 140;
  const topHeight = Math.random() * 200 + 40;

  obstacles.push({
    x: canvas.width,
    width: 60,
    topHeight,
    gap,
    scored: false
  });
}

function updateScore() {
  obstacles.forEach(o => {
    if (!o.scored && o.x + o.width < player.x) {
      o.scored = true;

      let points = Math.floor(Math.random() * 6) + 5; // 5–10 points
      score += points;
    }
  });
}
function drawScore() {

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, 50); // top bar

  ctx.fillStyle = "white";
  ctx.font = "24px Arial";

  ctx.fillText("Score: " + score, 20, 30);
}
updateObstacles();
updateScore();

drawObstacles();
drawScore();
