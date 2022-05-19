console.log("***************EJEMPLO 2: FUNCIONES FLECHA**********************");
console.log("****************************************************************");
console.log("EJEMPLO 1: Función que saca un mensaje concatenando dos textos");
var crearMensaje = function(mensaje, nombre) {
    return mensaje + nombre;
}
var crearMensajeArrow = (mensaje, nombre) => mensaje + nombre;

console.log(crearMensaje("Hola desde una función tradicional, ", "Yo mism@"));
console.log(crearMensajeArrow("Hola desde una función flecha, ", "Yo mism@"));


console.log("EJEMPLO 2: trabajando con el ámbito de la función flecha");
var persona = {
    nombre: "Yo mism@",
    mandaMensaje: function(mensaje, envia) {
        envia(mensaje)
    },
    /**
     * this representa al objeto contextual , funcion arrow no vincula sus propios this
     */
    recibe: function() {
        this.mandaMensaje("Hola, ", mensaje => console.log(mensaje + this.nombre));
    }
}

persona.recibe();

console.log("EJEMPLO3: pasamos algún parámetro inicializado por defecto");

function greet(greeting, name = "Miren") {
    console.log(greeting + ", " + name);
}

greet("Aupa");
greet("Aupa", "Jon");

console.log("EJEMPLO4: pasamos como parametro por defecto una funcion");

function recibeFuncion(recibe = function() {
    console.log('Función tradicional recibida con éxito');
}) {
    recibe();
}

recibeFuncion();

/**
 * Pasa como parametro por defecto una funcion arrow
 * @param complete
 */
function recibeFuncion2(recibe = () => console.log('Función flecha recibida con éxito')) {
    recibe();
}

recibeFuncion2();

console.log("****************************************************************");