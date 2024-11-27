const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");

const keyMapping = [];
let globalVolume = 0.5; 

const playTune = (key) => {
  const audio = new Audio(`src/assets/tunes/${key}.wav`);
  audio.volume = globalVolume;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

const handleVolume = (e) => {
  globalVolume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume);

// biome-ignore lint/complexity/noForEach: <explanation>
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  keyMapping.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (keyMapping.includes(e.key)) {
    playTune(e.key);
  }
});
