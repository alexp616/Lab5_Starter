// explore.js

window.addEventListener('DOMContentLoaded', init);

let getText = () => document.getElementById('text-to-speak').value;

let synth;
let voiceSelect;
let voices = [];
function populateVoiceList() {
  synth = window.speechSynthesis;
  voiceSelect = document.querySelector("select");
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; ++i) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function init() {
  const speakButton = document.getElementsByTagName("button")[0];
  speechSynthesis.onvoiceschanged = populateVoiceList;
  
  speakButton.addEventListener("click", () => {
    speechSynthesis.cancel();
    let utterance = new SpeechSynthesisUtterance(getText());

    let selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    let img = document.querySelector('img');
    utterance.onstart = () => {
      img.src = "assets/images/smiling-open.png";
    }

    utterance.onend = () => {
      img.src = "assets/images/smiling.png";
    }

    speechSynthesis.speak(utterance);
  });

  return;
}

