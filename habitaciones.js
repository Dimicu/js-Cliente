class Habitacion {
    constructor(id, tipo, caracteristicas, reserva) {
        this._id = id;
        this._tipo = tipo;
        this._caracteristicas = caracteristicas;
        this._reserva = reserva;
    }

    get id() {
        return this._id;
    }
    get tipo() {
        return this._tipo;
    }
    get caracteristicas() {
        return this._caracteristicas;
    }
    get reserva() {
        return this._reserva;
    }

    set id(valor) {
        this._id = valor;
    }
    set tipo(valor) {
        this._tipo = valor;
    }
    set caracteristicas(valor) {
        this._caracteristicas = valor;
    }
    set reserva(valor) {
        this._reserva = valor;
    }

}

let plantas = 10;
let propiedades = ["Aire Acondicionado", "Vistas Panoramicas", "Jacuzzi"];
let atributos;
var arrayHabitaciones = [];

for (let i = 1; i <= plantas; i++) {
    let p = i.toString();
    let n;
    let tipo;
    if (i == 10) {
        for (let k = 1; k <= 10; k++) {
            p = i.toString();

            if (k < 10) {
                n = "0" + k.toString();
            } else {
                n = k.toString();
            }
            id = p + n;
            tipo = "Suite";
            atributos = propiedades.slice(0);
            hab = new Habitacion(id, tipo, atributos, null);
            arrayHabitaciones.push(hab);
            //console.log(hab);
        }
    } else {

        for (let j = 1; j <= 20; j++) {
            p = i.toString();
            n;
            tipo;

            //Asignamos numero de habitaciones con 3 cifras.

            if (j < 10) {
                n = "0" + j.toString();
            } else {
                n = j.toString();
            }
            id = p + n;
            //Asignamos tipo de habitacion y caracteristicas;
            if (i <= 6 && j % 2 == 0) {
                tipo = "Individual";
                atributos = propiedades.slice(0, 1);
            } else if (i <= 6 && j % 2 !== 0) {
                tipo = "Doble";
                atributos = propiedades.slice(0, 1);
            }
            else {
                tipo = "Doble";
                atributos = propiedades.slice(0, 2);
            }
            hab = new Habitacion(id, tipo, atributos, null);
            arrayHabitaciones.push(hab);
            //OJO que el array de objetos empieza en 0.
            //console.log(hab);
        }
    }

}
//console.log(arrayHabitaciones);

//Esta parte de añadir todos los valores en el select he tenido que buscarla con chat gpt
//siempre me salia el ultimo solo.
let select = document.getElementById("numHabitaciones");
let cuartoSeleccionado;


arrayHabitaciones.forEach(elemento => {
    let opcion = document.createElement("option");
    opcion.value = elemento.id;
    opcion.className = "habitacion";
    opcion.text = elemento.id;
    opcion.id = "habitacion" + elemento.id;
    select.add(opcion);
});

select.addEventListener("change", function () {
    // Obtener el valor seleccionado al producirse el evento de cambio
    cuartoSeleccionado = select.value;
    console.log(cuartoSeleccionado);
});

function habWindow() {

    //
    let valorHab = document.getElementById("numHabitaciones").value;
    let contenidoHab;
    arrayHabitaciones.forEach(elemento => {
        if (elemento.id == valorHab) {
            contenidoHab = elemento;
        }
    })
    console.log(contenidoHab);
    console.log(contenidoHab.id);
    console.log(contenidoHab.tipo);
    console.log(contenidoHab.caracteristicas);
    console.log(contenidoHab.reserva);


    let ventanaHija = window.open("formularioHabitacionRitz.html", "ventanaHab", "width=500px, height=500px");

    if (ventanaHija) {
        //Si quito la funcion onload no va
        ventanaHija.onload = function () {

            ventanaHija.document.getElementById("numHab").innerHTML = contenidoHab.id;
            ventanaHija.document.getElementById("tipoHab").innerHTML = contenidoHab.tipo;
            ventanaHija.document.getElementById("caractHab").innerHTML = contenidoHab.caracteristicas;
        }

    } else {
        ventanaHija.console.error("No se puede cargar la web");
    }



}

function listarReservas() {

    let numero = parseInt(cuartoSeleccionado);
    let planta = 0;
    let hab = 0;
    let idHab = 0;

    if (numero < 1000) {
        planta = parseInt(cuartoSeleccionado[0]) - 1;
        hab = parseInt(cuartoSeleccionado.substring(1))
        idHab = planta * 20 + hab;
        console.log(idHab);
    } else {
        planta = parseInt(cuartoSeleccionado.substring(0, 2)) - 1;
        hab = parseInt(cuartoSeleccionado.substring(2))
        idHab = planta * 20 + hab;
        console.log(idHab);
    };

    return idHab;
}

function pintarReservas() {
    let numero = listarReservas();
    for (i = 0; i <= arrayHabitaciones.length; i++) {
        if (numero == i + 1) {
            document.getElementById("reservasHechas").innerHTML =

                "<tr><td>" + arrayHabitaciones[i]._id + "</td>" + "<td>" + arrayHabitaciones[i]._tipo +
                "</td>" + "<td>" + arrayHabitaciones[i]._caracteristicas +
                "</td>" + "<td>" + arrayHabitaciones[i]._reserva + "</td>" + "</tr > "

        }
    }
}