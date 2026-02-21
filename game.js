
/*******************************
 * WEEK 2: GAME LOOP + PHYSICS
 *******************************/

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

/* ---------- Player ---------- */
const player = {
  x: 150,
  y: 200,
  radius: 15,     // circle size
  velocityY: 0
};

/* ---------- Physics ---------- */
const GRAVITY = 0.5;   // pulls player down
const FLAP = -9;       // upward boost

loop();

/* ---------- Update ---------- */
function update() {
  // Apply gravity
  player.velocityY += GRAVITY;
  player.y += player.velocityY;

  // Keep player on screen (TOP)
  if (player.y - player.radius < 0) {
    player.y = player.radius;
    player.velocityY = 0;
  }

  // Keep player on screen (BOTTOM)
  if (player.y + player.radius > canvas.height) {
    player.y = canvas.height - player.radius;
    player.velocityY = 0;
  }
}

/* ---------- Draw ---------- */
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#66aaff";

  // Draw the player as a circle
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fill();
}

/* ---------- Game Loop ---------- */
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

/* ---------- Controls ---------- */
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    player.velocityY = FLAP;
  }
});