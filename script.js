particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});

const text = "Aspiring Software Developer";
let i = 0;

function typing(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,70);
}
}

typing();sss