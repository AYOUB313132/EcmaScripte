class Usuario {
    /*constructor: al que llamamos al hacer new cuando
    nos creamos una variable de tipo Usuario.
    con el constructor inicializamos las variables/atributos/
    propiedades que tiene la clase*/
    /*this.__: con el guión bajo indicamos que es un atributo 
    privado*/
    constructor(nick, pwd, email, isConected) {
            this._nick = nick;
            this._pwd = pwd;
            this._email = email;
            this._isConected = isConected;
        }
        //getter: revuelven el valor de una propiedad/variable/atributo
    get nick() {
        return this._nick;
    }
    get pwd() {
        return this._pwd;
    }
    get email() {
        return this._email;
    }
    get isConected() {
            return this._isConected;
        }
        //setter: actualiza la propiedad/atributo de la clase
    set nick(n) {
        this._nick = n;
    }
    set pwd(p) {
        this._pwd = p;
    }
    set email(e) {
        this._email = e;
    }
    set isConected(ic) {
            this._isConected = ic;
        }
        /*podemos incluir en la clase los métodos que queremos*/
        /*metodo toString: devuelve un texto que contiene el 
        nick y el email del usuario*/
    toString() {
            return "Nick:" + this._nick + " Email:" + this._email;
        }
        /*comprobar si la dirección de email es de gmail*/
    isGmail() {
        if (this._email.search("gmail.com") == -1) {
            return false;
        }
        return true;

    }
    isConected() {
        if (this._isConected == true) {
            return true;
        } else {
            return false
        }
    }
};

let usuario = new Usuario('elen', '123', 'elen@gmail.com', false)
console.log(usuario.toString())
    //usuario.isConected = false;
if (usuario.isGmail()) {
    console.log('tiene cuenta de gmail');
} else {
    console.log('no tiene cuenta de gmail')
}
/* CREAMOS UN ARRAY DE USUARIOS CON 4 OBJETOS DE TIPO USUARIO*/

let grupo = [
        new Usuario('elen', '123', 'elen@gmail.com', false),
        new Usuario('hassen', '456', 'hassen@gmail.com', true),
        new Usuario('kiko', '789', 'kiko@gmail.com', false),
        new Usuario('jhon', '555', 'jhon@gmail.com', true)
    ]
    /* recorro el array y visualizo el contenido */

console.log('recorremos el array')
    /* usamos FOR...OF para recorrer el array entero:
    por cada elemento (usu) del array (grupo) */

for (let usu of grupo) {
    console.log(usu.toString())
}