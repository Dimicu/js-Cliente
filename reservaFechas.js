let fEntrada = document.getElementById("fechaEntrada");
let fSalida = document.getElementById("fechaSalida");
let cliente = document.getElementById("nombre");

let valorEntrada;
let valorSalida;
let valorCliente;

/* No muestra nada por consola, y si pides las varaibles son cadenas vacias en la consola.
let numeroCuarto = document.getElementById("numHab").innerHTML;
let cuarto = numeroCuarto;
console.log(cuarto)
*/

//-------------------------------------------------------------------------------------------

/*No muestra por consola cuarto. Pero si pides en consola numeroCuarto si te muestra 
todo el <p> y su contenido, y si le haces innerHTML te saca el valor. Pero en cambio cuarto, aunque este
igualado a numeroCuarto.innerHTML no muestra nada por consola. 

let numeroCuarto = document.getElementById("numHab");
let cuarto = numeroCuarto.innerHTML;
console.log(cuarto)*/


function actualizar() {

    valorEntrada = fEntrada.value;
    valorSalida = fSalida.value;
    valorCliente = cliente.value;

    objetoLiteralReserva = { "Fecha_entrada": valorEntrada, "Fecha_salida": valorSalida, "Nombre_cliente": valorCliente };

    console.log(objetoLiteralReserva);
    console.log(objetoLiteralReserva.Fecha_entrada);
    

    console.log(window.opener.arrayHabitaciones);
    console.log(valorEntrada);
    console.log(valorSalida);
    console.log(valorCliente);


}