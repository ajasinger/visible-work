let i = 0;
const word = 'WORK';
const speed = 450;

function typeWord() {
  if (i < word.length) {
    document.getElementById("type").innerHTML += word.charAt(i);
    i++;
    setTimeout(typeWord, speed);
  }
}
