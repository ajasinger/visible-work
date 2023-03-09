const word = 'hello';

function typeWord(word) {
  let i = 0;
  if (i < word.length) {
    document.getElementById("type").innerHTML += word.charAt(i);
    i++;
    setTimeout(typeWord, 50);
  }
}
