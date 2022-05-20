let btnEmparejar = document.getElementById('emparejar')
let btnSolucion = document.getElementById('solucion')
let btnReiniciar = document.getElementById('reiniciar')

let euskeraSelect = document.querySelector('[name="euskera"]')
let mySelectEuskera = euskeraSelect.options[euskeraSelect.selectedIndex]

let castellanoSelect = document.querySelector('[name="castellano"]')
let mySelectCastellano = castellanoSelect.options[castellanoSelect.selectedIndex]

let strong = document.getElementsByTagName('strong')
let botones = document.getElementsByTagName('button');

for (let btn of botones) {

    if (btn.id == 'emparejar')
        btn.onclick = () => emparejar();
    else if (btn.id == 'solucion')
        btn.onclick = () => verSolucion();
    else if (btn.id == 'reiniciar')
        btn.onclick = () => location.reload();
}
/*
lunes = Astelehena
martes = Asteartea
miercoles = Asteazkena
jueves = Osteguna
viernes = Ostirala
*/
function emparejar() {
    counter = 0;
    let select1 = document.getElementsByTagName('select')[0];
    let f = select1.options[select1.selectedIndex].value
    let select2 = document.getElementsByTagName('select')[1];
    let h = select2.options[select2.selectedIndex].value

    if (f == 0 && h == 0) {
        alert('Selecciona dia')

    } else if (h == 'viernes' && f == 'Ostirala' || h == 'jueves' && f == 'Osteguna' || h == 'miercoles' && f == 'Asteazkena' || h == 'martes' && f == 'Asteartea' || h == 'lunes' && f == 'Astelehena') {
        alert('Perfecto')
    } else {
        alert('Falta')

        strong[0].innerHTML -= 1;
        if (strong[0].innerHTML == 0) {
            alert('your attempts are over')
                //btnEmparejar.style.cursor = 'not-allowed'
            btnEmparejar.style.pointerEvents = 'none'
        }
    }
}

function verSolucion() {
    alert('are you sur')
    let qstn = prompt('if your sur write yes')
    if (qstn == 'yes') {
        alert('lunes = Astelehena \n martes = Asteartea \n miercoles = Asteazkena \n jueves = Osteguna \n viernes = Ostirala')
    } else {
        alert('try')
    }


}