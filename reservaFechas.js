//tomamos el numero de habitacion desde el padre, porque daba problmeas desde el hijo
let idDesdePadre = window.opener.document.getElementById("numHabitaciones").value;

console.log(id);
//buscamos con ese numHab la posicion que ocupa dentro del array
function tomarPosicionArray() {

    let numero = parseInt(idDesdePadre);
    let planta = 0;
    let hab = 0;
    let idHab = 0;

    if (numero < 1000) {
        planta = parseInt(idDesdePadre[0]) - 1;
        hab = parseInt(idDesdePadre.substring(1))
        idHab = planta * 20 + hab;
        console.log(idHab);
    } else {
        planta = parseInt(idDesdePadre.substring(0, 2)) - 1;
        hab = parseInt(idDesdePadre.substring(2))
        idHab = planta * 20 + hab;
        console.log(idHab);
    };

    return idHab;
}


//hacemos la toma de datos de fechas y nombre en objeto literal 
function tomarReserva() {

    let fEntrada = document.getElementById("fechaEntrada");
    let fSalida = document.getElementById("fechaSalida");
    let cliente = document.getElementById("nombre");

    let valorEntrada = fEntrada.value;
    let valorSalida = fSalida.value;
    let valorCliente = cliente.value;

    objetoLiteralReserva = { "Fecha_entrada": valorEntrada, "Fecha_salida": valorSalida, "Nombre_cliente": valorCliente };

    return objetoLiteralReserva;
}

//buscamos dentro del array esa posicion y añadimos la reserva

function agregarDatos() {

    for (i = 0; i <= arrayHabitaciones.length; i++) {
        if (posicion == i + 1) {
            window.opener.arrayHabitaciones.push(objeto);

        }
    }
}



function actualizar() {
    //guardamos posicion del numHab en el array
    let posicion;
    posicion = tomarPosicionArray();
    //guardamos el objeto en variable;
    let objeto;
    objeto = tomarReserva();
    agregarDatos();
}
