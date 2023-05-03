'use strict';
var colorTexto = "white";
const colores = ["green", "brown", "blue", "beige", "magenta"];
function saludar (id) {
    let elem = document.getElementById(id);
    elem.style.color = colorTexto;	
    elem.innerHTML="Hola";
    colorTexto=getComputedStyle(elem).backgroundColor;
}

function rellenar(id, cf) {
    let elem = document.getElementById(id);
    elem.style.backgroundColor = cf;
}

function pintar() {
    for (let x = 1; x<=colores.length; x++) {
        let id=x;
        let cf = colores[x-1];
        rellenar(id, cf)
    }
}
pintar();