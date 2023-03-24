let arrayI = 0;
let wordI = 0
const wordsArray = ['WORK', 'ACCOMPLISHMENTS', 'EXPERIENCE'];
const typeSpeed = 450;
const newWordSpeed = 900;

function typeWord() {
  if (wordI < wordsArray[arrayI].length) { 
    document.getElementById("type").innerHTML += wordsArray[arrayI].charAt(wordI);
    wordI++;
    setTimeout(typeWord, typeSpeed);
  } else {
    setTimeout(erase, newWordSpeed);
  }
}

typeWord();
