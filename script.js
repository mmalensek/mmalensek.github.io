function addRandomGif(src, width = 100) {
  const gif = document.createElement("img");
  gif.src = src;
  gif.style.position = "absolute";
  gif.style.zIndex = "-1"; // Behind content
  // gif.style.width = `${width}px`;

  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - width;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  gif.style.left = `${randomX}px`;
  gif.style.top = `${randomY}px`;

  document.body.appendChild(gif);
}

// addRandomGif("cloudy_earth.gif");
addRandomGif("dance.gif");
addRandomGif("butterfly.gif");
addRandomGif("plane.gif");
addRandomGif("cloud.gif");
addRandomGif("kite.gif");
