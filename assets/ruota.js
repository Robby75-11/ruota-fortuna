const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const segments = [
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "Telefono si",
  "Telefono no",
];

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F4C430",
  "#8E44AD",
  "#E74C3C",
  "orange",
  "red",
  "yellow",
];
let angle = 0;
let spinning = false;

canvas.width = 300;
canvas.height = 300;
const radius = canvas.width / 2;

function drawWheel() {
  const segmentAngle = (2 * Math.PI) / segments.length;
  for (let i = 0; i < segments.length; i++) {
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, i * segmentAngle, (i + 1) * segmentAngle);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      segments[i],
      radius + (Math.cos((i + 0.5) * segmentAngle) * radius) / 1.5,
      radius + (Math.sin((i + 0.5) * segmentAngle) * radius) / 1.5
    );
  }
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  const spinAngle = Math.floor(Math.random() * 360) + 1800;
  angle += spinAngle;
  canvas.style.transform = `rotate(${angle}deg)`;
  setTimeout(() => {
    spinning = false;
    const index = Math.floor(((angle % 360) / 360) * segments.length);
    alert("telefono no:" + segments[segments.length - 1 - index]);
    alert("telefono si:" + segments[segments.length - 1 - index]);
  }, 4000);
}

drawWheel();
