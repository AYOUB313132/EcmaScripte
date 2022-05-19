let enviar = document.querySelector('[value="enviar"]');
let select = document.getElementById("destinat");
let mensaje = document.getElementById('textoMensaje');
let parrafo = document.getElementById('mensaje');
let listaDefenitiva = document.getElementById('listaDefinitiva')

let myMap = new Map();
enviar.onclick = () => {
    let mySelect = select.options[select.selectedIndex];
    let mensaje = document.getElementById('textoMensaje');

    if (mySelect.text == 'Selecciona quién recibirá noticias tuyas...') {
        alert('Se te ha olvidado decir a quién envias el mensaje!')
    } else if (mensaje.value == '') {
        alert('Te falta el mensaje!')
    } else {
        parrafo.remove()
        let myP = document.createElement('p')
        myP.innerHTML = `Destinatario: ${mySelect.text} / Mensaje: ${mensaje.value}`
        listaDefenitiva.appendChild(myP)
        mensaje.value = '';
        select.value = 'selecciona'

    }

}
let nube = document.querySelector('[value="a la nube!"]')
nube.onclick = function() {
    let parrafos = document.querySelectorAll('#listaDefinitiva p')
    for (let i = 0; i < parrafos.length; i++) {
        alert(parrafos[i].textContent)
    }
}


let eleminar = document.querySelector('[value="eliminar"]')
console.log(eleminar)
eleminar.onclick = function() {
    listaDefenitiva.innerHTML = ''
    let p = document.createElement('p');
    p.textContent = 'De momento...nada';
    listaDefenitiva.appendChild(p)
    alert('De momento...nada')
}