let enlace = document.getElementById('enlace_1');

enlace.onclick = () => {
    let contenido = document.getElementById('contenidos_1');
    if ((contenido.style.display == 'block') || (contenido.style.display == '')) {
        contenido.style.display = 'none';
        enlace.innerHTML = 'Mostrar contenido';
    } else {
        contenido.style.display = 'block';
        enlace.innerHTML = 'Ocultar contenido';
    };
}


// =============== ejercicios 2 ====================//

let nombre = document.getElementById('nombre');
let poblacion = document.getElementById('poblacion');
let salida = document.getElementById('salida');

let btnH = document.querySelector('.button');

btnH.onclick = () => {
    salida.innerHTML = 'hola ' + nombre.value + ' de ' + poblacion.value + '¡Me alegro de verte!';
};