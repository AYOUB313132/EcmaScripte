/**
 * Practicamos let, var, const
 */
/*creamos un array vacío*/
console.log("***************EJEMPLO 1: var, const, let***********************");
console.log("****************************************************************");
var array1 = [];
for (let i = 0; i < 10; i++) {
    array1.push(i);
}
console.log("EJEMPLO 1: LET" + i);
array1.forEach(element => console.log(element));
/**
 * El mismo ejemplo, pero con sentencia var, permite que i sea modificada desde
 * dentro de la callback
 */

var array2 = [];
for (var i = 0; i < 10; i++) {
    array2.push(i);
}
console.log("EJEMPLO 1: VAR" + i);
array2.forEach(element => console.log(element));

/*Ejemplo const: definimos NOTA como constante y le damos un valor de 7*/
const NOTA = 7;
console.log('He sacado un: ' + NOTA);
/*El siguiente código comentado lanzará un error: Unkeught TypeError: Asignación a variable constante.
NOTA = 20;*/
console.log("****************************************************************");