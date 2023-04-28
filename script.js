var frameNumber = 1;

const startBtn = document.querySelector("#next-btn");
startBtn.addEventListener('click', () => {
  const currentFrame = document.querySelector(`.frame-${frameNumber}`);
  currentFrame.classList.remove("move-in");
  currentFrame.hidden = true;

  const nextFrame = document.querySelector(`.frame-${++frameNumber}`);
  nextFrame.hidden = false;
  
  nextFrame.classList.add("move-in");

  console.log(frameNumber)
});
