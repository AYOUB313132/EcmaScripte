
// al leer un fichero de texto, hacemos un responseText
function reqListener () {
    document.getElementById('informacion').innerHTML =  this.responseText;
  }
  // creamos el objecto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  // abrimos la peticion
// le decimos que tipo de peticion: GET/POST
// le decimos de que fichero (mostrando ruta) cogemos la informacion
// el boolean indica si la peticion es asincrona (true) o no (false)
  peticion.addEventListener("load", reqListener);
  peticion.open("GET", "https://www.w3.org/TR/PNG/iso_8859-1.txt");
  peticion.send();



  //============== Otra Solucion =================//

  const btn = document.getElementById('carga-informacion');

  btn.onclick = () => {

    let peticion2 = new XMLHttpRequest();
    peticion2.onreadystatechange = () => {
        if((peticion2.status == 200) && (peticion2.readyState == 4)){
            document.getElementById('informacion').innerHTML =  peticion2.responseText;
        }
    }
    peticion2.open("GET", "https://www.w3.org/TR/PNG/iso_8859-1.txt", true);
    peticion2.send();
  }