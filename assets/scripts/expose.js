// expose.js

window.addEventListener('DOMContentLoaded', init);

let getHorn = () => document.getElementById("horn-select").value;

function init() {
  const hornSelector = document.querySelector("select");
  const hornImg = document.querySelector("#expose img");
  let audio = new Audio();

  const volumeSlider = document.getElementById("volume");
  let volume = volumeSlider.value;

  const confetti = new JSConfetti;

  const volumeIcon = document.querySelector("#volume-controls img");
  hornSelector.addEventListener("change", (event) => {
    hornImg.src = `assets/images/${getHorn()}.svg`;
    audio = new Audio(`assets/audio/${getHorn()}.mp3`);
    
  });

  const hornButton = document.getElementsByTagName("button")[0];
  hornButton.addEventListener("click", () => {
    audio.play()
    if (getHorn() == 'party-horn') {
      confetti.addConfetti();
    }
  });

  volumeSlider.addEventListener("input", () => {
    volume = volumeSlider.value;
    if (volume == 0) {
      volumeIcon.src = `assets/icons/volume-level-0.svg`;
      volumeIcon.alt = 'Volume Level 0';
    } else if (volume < 33) {
      volumeIcon.src = `assets/icons/volume-level-1.svg`;
      volumeIcon.alt = 'Volume Level 1';
    } else if (volume < 67) {
      volumeIcon.src = `assets/icons/volume-level-2.svg`;
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = `assets/icons/volume-level-3.svg`;
      volumeIcon.alt = 'Volume Level 3';
    }
    audio.volume = volume / 100;
  });
}

