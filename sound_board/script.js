const sounds = [
  "bird-sounds",
  "frog-sounds",
  "smoke-sounds",
  "thunder-sounds",
  "train-sounds",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopPreviousPlayingSounds();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopPreviousPlayingSounds() {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  });
}
