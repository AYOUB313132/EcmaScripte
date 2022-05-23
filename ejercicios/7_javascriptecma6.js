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
/*
let selections = document.getElementsByTagName('select')
let selectEus = document.getElementsByTagName('select')[0]
let selectCas = document.getElementsByTagName('select')[1]
for (let slct of selections) {

    emparejar = () => {
        let eusk = selections[0].options[selections[0].selectedIndex]
        let cast = selections[1].options[selections[1].selectedIndex]
        console.log(eusk.value)
        console.log(cast.value)

        //selections[0].removeChild(choise)
    }
}
*/


/*
let myEus = new Map();
let myCas = new Set();
myCas.add('Asteartea').add('Astelehena').add('Asteazkena').add('Osteguna').add('Ostirala')
console.log(myCas)
*/

function emparejar() {
    counter = 0;
    let euskera = document.getElementsByTagName('select')[0];
    let eusk = euskera.options[euskera.selectedIndex]
    let castellano = document.getElementsByTagName('select')[1];
    let cast = castellano.options[castellano.selectedIndex]

    if (eusk.value == 0 && cast.value == 0) {
        alert('Selecciona dia')

    } else if (cast.value == 'viernes' && eusk.value == 'Ostirala') {
        alert('Perfecto');
        euskera.removeChild(eusk)
        castellano.removeChild(cast)

    } else if (cast.value == 'jueves' && eusk.value == 'Osteguna') {
        alert('Perfecto')
        euskera.removeChild(eusk)
        castellano.removeChild(cast)
    } else if (cast.value == 'miercoles' && eusk.value == 'Asteazkena') {
        alert('Perfecto')
        euskera.removeChild(eusk)
        castellano.removeChild(cast)
    } else if (cast.value == 'martes' && eusk.value == 'Asteartea') {
        alert('Perfecto')
        euskera.removeChild(eusk)
        castellano.removeChild(cast)
    } else if (cast.value == 'lunes' && eusk.value == 'Astelecasena') {
        alert('Perfecto')
        euskera.removeChild(eusk)
        castellano.removeChild(cast)
    } else {
        alert('Error')

        // euskera.firstElementChild.selected
        // castellano.firstElementChild.setAttribute('selected', '')
        // euskera.firstElementChild.setAttribute('selected', '')
        for (let esk of euskera) {
            if (esk.value == 0) {
                esk.setAttribute('selected', '')
            }
        }

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