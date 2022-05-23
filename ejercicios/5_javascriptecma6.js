let links = document.querySelectorAll('a')
let result = document.querySelector('#test')

let mostrarUrl = document.querySelector('[value="Ver Direcciones URL"]');
let cambiarEstilo = document.querySelector('[value="cambiar estilo pares"]');
let cambiarNombre = document.querySelector('[value="cambiar nombre enlace"]');
let resetear = document.querySelector('[value="resetear"]');

/*
mostrarUrl.onclick = function() {
    let link = [];
    links.forEach(function(e) {
        link.push(e.textContent);
    });

    result.textContent = link.join(' - ');
};

cambiarEstilo.onclick = function() {
    for (let i = 0; i < links.length; i++) {
        if (i % 2 == 0) {
            console.log(i);
            links[i].style.backgroundColor = 'red';
            links[i].style.color = 'white';


        } else {
            links[i].style.backgroundColor = 'blue';
            links[i].style.color = 'white';

        }
    }
};

cambiarNombre.onclick = () => {
    links[3].textContent = 'San google';

}


resetear.onclick = () => {
    window.location.href = 'http://127.0.0.1:5500/ejercicios/5_javascriptecma6.html'
}


//=========== soluccion profesora ========//

const botones = document.getElementsByTagName('input');

for (let boton of botones) {
    if (boton.value == 'Ver Direcciones URL')
        boton.onclick = () => { VerDireccionesURL(); }
    else if (boton.value == 'cambiar estilo pares')
        boton.onclick = () => { cambiarEstiloPares(); }
    else if (boton.value == 'cambiar nombre enlace')
        boton.onclick = () => { cambiarNombreEnlace(); }
    else boton.onclick = () => { location.reload(); }
}
const sections = document.getElementsByTagName('section');

VerDireccionesURL = () => {
    for (let parrafo of sections[0].getElementsByTagName('p')) {
        let enlace = parrafo.getElementsByTagName('a')[0].href;
        console.log(enlace)
        let nuevoEnlaces = document.createTextNode(enlace);
        let nuevoParraf = document.createElement('p');
        nuevoParraf.appendChild(nuevoEnlaces)
        sections[1].appendChild(nuevoParraf)
    }
}
const parraf1 = sections[0].getElementsByTagName('p');
const parraf2 = sections[1].getElementsByTagName('p');

cambiarEstiloPares = () => {
    let index = 0;
    while (index < parraf1.length) {
        parraf1[index].getElementsByTagName('a')[0].style.color = '#fff'
        parraf1[index].style.backgroundColor = '#000'

        parraf2[index].style.color = '#fff'
        parraf2[index].style.backgroundColor = '#000'
        index += 2;
    }
}
cambiarNombreEnlace = () => {
    for (let parraf of parraf1) {
        if (parraf.getElementsByTagName('a')[0].innerHTML == 'otros enlaces de interés') {
            parraf.getElementsByTagName('a')[0].innerHTML = 'Github';
            break;
        }
    }
}
*/
/*==================== otra manera ======================*/



const botones = document.getElementsByTagName('input');

for (let boton of botones) {
    if (boton.value == 'Ver Direcciones URL')
        boton.onclick = () => { VerDireccionesURL(); }
    else if (boton.value == 'cambiar estilo pares')
        boton.onclick = () => { cambiarEstiloPares(); }
    else if (boton.value == 'cambiar nombre enlace')
        boton.onclick = () => { cambiarNombreEnlace(); }
    else boton.onclick = () => { location.reload(); }
}
let myMap = new Map();

VerDireccionesURL = () => {
    for ( let link of links) {
        myMap.set('url', link)
    }
}