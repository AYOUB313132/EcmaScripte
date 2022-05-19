const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('some text');

const o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // La variable "o" referencia a otro objeto, por lo que agrega otro valor.

mySet.has(1); // true
mySet.has(3); // false, 3 no ha sido añadido al Set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // Elimina 5 del Set
mySet.has(5); // false, 5 fue eliminado

mySet.size; // 4, sólo removimos un valor
console.log(mySet); // Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}

// iterar todos los items de un set
// imprimir en consola los items en orden: 1, 'some text', {a: 1, b: 2}
for (let item of mySet) console.log(item);

// imprimir en consola los items en orden: 1, 'some text', {a: 1, b: 2}
for (let item of mySet.keys()) console.log(item);

// imprimir en consola los items en orden: 1, 'some text', {a: 1, b: 2}
for (let item of mySet.values()) console.log(item);

// imprimir en consola los items en orden: 1, 'some text', {a: 1, b: 2}
//(key y value poseen en mismo valor en este caso)
for (let [key, value] of mySet.entries()) console.log(key);

// crear un Array plano con los mismos valores, utilizando Array.from
const myArr = Array.from(mySet); // [1, 'some text', {a: 1, b: 2}]

// también se puede utilizar para guardar elementos del DOM
mySet.add(document.body);
mySet.has(document.querySelector('body')); // true

// crear un Array plano con los mismos valores, utilizando propagación
const mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// la intersección entre dos sets puede ser simulada con
const intersection = new Set([...set1].filter(x => set2.has(x)));

// la diferencia puede ser simulada con
const difference = new Set([...set1].filter(x => !set2.has(x)));

// Iteración utilizando forEach
mySet.forEach((value) => {
    console.log(value);
});

/*relación con arrays*/
const myArray = ['value1', 'value2', 'value3'];

// Utiliza el constructor para para crear un set con el mismo contenido que un array
const mySet = new Set(myArray);

mySet.has('value1'); // devuelve true

// Utiliza la propagación para crear un array con los contenidos de un set
console.log([...mySet]); // Muestra lo mismo utilizando myArray