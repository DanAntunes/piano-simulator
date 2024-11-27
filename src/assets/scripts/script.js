const pianoKeys = document.querySelectorAll(".piano-keys .key")

// biome-ignore lint/style/useConst: <explanation>
let audio = new Audio("src/assets/tunes/a.wav");

const playTune = (key) => {
  const audio = new Audio(`src/assets/tunes/${key}.wav`);
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// biome-ignore lint/complexity/noForEach: <explanation>
pianoKeys.forEach((key)=>{
  console.log(key.dataset.key);
  key.addEventListener("click",()=> playTune(key.dataset.key));
});

document.addEventListener("keydown", (e) => {
  playTune(e.key);
});