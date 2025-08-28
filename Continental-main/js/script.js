function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
    
}
const titulo = document.getElementById('logo');
typeWriter(titulo);

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 2000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

