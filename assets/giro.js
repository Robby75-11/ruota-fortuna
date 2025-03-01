let currentRotation = 0;
function spinWheel() {
  const wheel = document.getElementById("wheel");
  let randomDegree = 1800 + Math.floor(Math.random() * 360); // Rotazione tra 1800° e 2160°
  currentRotation += randomDegree;
  wheel.style.transform = `rotate(${currentRotation}deg)`;
}
