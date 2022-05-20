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
    let euskera = document.getElementsByTagName('select')[0];
    let eus = euskera.options[euskera.selectedIndex].value
    let castellano = document.getElementsByTagName('select')[1];
    let cas = castellano.options[castellano.selectedIndex].value

    if (eus == 0 && cas == 0) {
        alert('Selecciona dia')

    } else if (cas == 'viernes' && eus == 'Ostirala' || cas == 'jueves' && eus == 'Osteguna' || cas == 'miercoles' && eus == 'Asteazkena' || cas == 'martes' && eus == 'Asteartea' || cas == 'lunes' && eus == 'Astelecasena') {
        alert('Pereusecto')
    } else {
        alert('eusalta')

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
    let qstn = prompt('if your are sur write yes')
    if (qstn == 'yes') {
        alert('lunes = Astelehena \n martes = Asteartea \n miercoles = Asteazkena \n jueves = Osteguna \n viernes = Ostirala')
    } else {
        alert('try')
    }


}