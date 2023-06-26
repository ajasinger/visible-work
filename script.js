//Random image selector
let randomImages = ["./assets/shutterstock_130978478.jpg","./assets/shutterstock_214618969.jpg", "./assets/shutterstock_297829895.jpg"];

function imageHandler() {
  const i = Math.floor(Math.random() * randomImages.length);
  document.getElementById('image-selector').src = randomImages[i];
}

document.addEventListener("DOMContentLoaded", () => {
  imageHandler();
})



//Typing animation
let arrayI = 0;
let wordI = 0
const wordsArray = ['WORK', 'EXPERIENCE', 'WINS', 'SKILLS', 'INSIGHTS'];
const typeSpeed = 50;
const newWordSpeed = 800;

function typeWord() {
  if (wordI < wordsArray[arrayI].length) { 
    document.getElementById("type").innerHTML += wordsArray[arrayI].charAt(wordI);
    wordI++;
    setTimeout(typeWord, typeSpeed);
  } else {
    setTimeout(eraseWord, newWordSpeed);
  }
}

function eraseWord() {
  if(wordI > 0) {
    document.getElementById("type").innerHTML = wordsArray[arrayI].substring(0, wordI-1);
    wordI--;
    setTimeout(eraseWord, typeSpeed);
  } else {
    arrayI++;
    if(arrayI >= wordsArray.length) {
        arrayI = 0;
    } 
    setTimeout(typeWord, typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWord, 500);
})



// Calendly pop-up on all Buttons
const buttons = document.querySelectorAll(".calendly-button");

buttons.forEach((button) => {
  button.addEventListener("click", function clickHandler() {
    //Calendly pop-up
    Calendly.initPopupWidget({
      url: 'https://calendly.com/ceonyc/visible-work-info-session',
      parentElement: button,
      prefill: {},
      utm: {}
     });
  });
})
