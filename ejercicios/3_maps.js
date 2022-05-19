var myMap = new Map();

myMap.set('HTML5', "Estructura páginas web");
myMap.set('CSS', "Estilos de la web");
myMap.set('JS', "Funcionalidad de la web");

console.log(myMap.size)


console.log(myMap.get('HTML5'))
console.log(myMap.get('CSS'))
console.log(myMap.get('JS'))

for (const key of myMap.keys()) {
    console.log(key)
}

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}
if (myMap.has('CSS')) {
    myMap.delete('CSS')
}
console.log(myMap)

/*
const myMap = new Map()
myMap.set('curso', {HTML5: "Estructura páginas web", CSS: "Estilos de la web", JS : "Funcionalidad de la web"})
console.log(myMap.size)


console.log(myMap);

*/