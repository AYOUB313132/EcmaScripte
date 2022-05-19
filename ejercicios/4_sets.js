/*
EJERCICIO SET:
Ahora de cada módulo se desea guardar su nombre únicamente (HTML5, CSS, JS)
Utilizaremos un set para ello.
1.-Crearemos el objeto de tipo set
2.- Meteremos los 2 módulos
3.- recorriendo con un bucle el set los visulalizamos (forEach+función flecha)
*/

/*
mySet = new Set();
mySet.add('HTML5')
mySet.add('CSS')
mySet.add('JS')
console.log(mySet.size)
forEach( (content) => {
    console.log('dato set: ' + content)
});
*/

mySet = new Set();

let myCurso = {
    HTML5: 'Syntax Tag Attribute',
    CSS: 'Grid Flex Responsive',
    JS: 'String Numbers Function Object Regular Expression'
};

console.log(myCurso)

mySet.add(myCurso)
console.log(mySet.size)
console.log(typeof(mySet))

console.log(mySet) //!!!!!!!!!