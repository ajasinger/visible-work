let arrayI = 0;
let wordI = 0
const wordsArray = ['WORK', 'ACHIEVEMENTS', 'EXPERIENCE'];
const typeSpeed = 350;
const newWordSpeed = 500;

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


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeWord, 500);
})
