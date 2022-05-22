let butones = document.getElementsByTagName('input')
let sections = document.getElementsByTagName('section')
let links = document.getElementsByTagName('a')
console.log(sections)

for (let btn of butones) {
    if (btn.value == 'Ver Direcciones URL') btn.onclick = () => direcciones();
    if (btn.value == 'cambiar estilo pares') btn.onclick = () => estilos();
    if (btn.value == 'cambiar nombre enlace') btn.onclick = () => nombreEnlaces();
    if (btn.value == 'resetear') btn.onclick = () => window.reload();

}
let myMap = new Map();

function direcciones() {
    for (let i of links) {
        myMap.set('url', i.href)
    }

    console.log(myMap)
}

//========================================================================//
let btn = document.getElementById('btn')



btn.addEventListener('click', function testXml() {
    let myAjax = new XMLHttpRequest();
    document.getElementById('result').innerHTML = this.responseText;
    myAjax.open('GET', "https://www.w3.org/TR/PNG/iso_8859-1.txt")
    myAjax.send()
})