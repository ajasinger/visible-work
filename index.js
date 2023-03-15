let i = 0;
const word = 'hello';
const speed = 50;

function typeWord() {
  if (i < word.length) {
    document.getElementById("type").innerHTML += word.charAt(i);
    i++;
    setTimeout(typeWord, speed);
  }
}
