var i = 0;
var txt1 = 'Work'; 
var txt2 = 'Skills';
var txt3 = 'Experience';
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}