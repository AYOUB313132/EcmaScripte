let emparejar = document.getElementById('emparejar')
let solucion = document.getElementById('solucion')
let reiniciar = document.getElementById('reiniciar')

let euskeraSelect = document.querySelector('[name="euskera"]')
let mySelectEuskera = euskeraSelect.options[euskeraSelect.selectedIndexIndex]

let castellanoSelect = document.querySelector('[name="castellano"]')
let mySelectCastellano = euskeraSelect.options[castellanoSelect.selectedIndexIndex]


let botones = document.getElementsByTagName('button');

for (let btn of botones) {

    if (btn.id == 'emparejar')
        btn.onclick = () => emparejar();
    else if (btn.id == 'solución')
        btn.onclick = () => verSolucion();
    else if (btn.id == 'reiniciar')
        btn.onclick = () => volverJugar();
}
emparejar = () => {
    console.log(mySelectCastellano.value)
}