import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

// BG-MOVE
const bg = document.querySelector(".background-image");
const windowWidth = window.innerWidth / 2;
const windowHeight = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});