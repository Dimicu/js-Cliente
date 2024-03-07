let p = document.createElement("p");
let espacio = document.createElement("div");
let porcentajeWidth = "";
let numCar = 0;
document.getElementsByTagName("div")[0].style.margin = "5%";
document.getElementsByTagName("div")[0].style.backgroundColor = "lightwhite";
document.getElementsByTagName("div")[0].style.display = "flex";
document.getElementsByTagName("div")[0].style.flexDirection = "column";


let maxCar = parseInt(prompt("Introduce el numero maximo de caracteres"));

window.addEventListener("load", function () {

    console.log(this.document.getElementsByTagName("textarea")[0].value);
    this.document.getElementsByTagName("textarea")[0].addEventListener("input", cambio);

})

function cambio(evento) {

    evento.target.maxLength = parseInt(maxCar);
    numCar = parseInt(evento.target.textLength);

    p.textContent = "Le quedan " + (maxCar - numCar) + " caracteres";
    document.body.getElementsByTagName("div")[0].appendChild(p);
    document.body.getElementsByTagName("div")[0].appendChild(espacio);

    document.body.getElementsByTagName("div")[1].style.backgroundColor = "green";
    document.body.getElementsByTagName("div")[1].style.height = "20px";

    porcentajeWidth = (numCar / maxCar) * 100;
    console.log(porcentajeWidth);

    let operador = 0;
    //Forma para darle gama de colores, operador modulo

    document.body.getElementsByTagName("div")[1].style.width = porcentajeWidth + "%";

    operador = numCar % maxCar;
    
    if (operador == maxCar - 2) {
        document.body.getElementsByTagName("div")[1].style.backgroundColor = "yellow";
    } else if (operador == maxCar - 1) {
        document.body.getElementsByTagName("div")[1].style.backgroundColor = "orange";
    } else if (operador == 0) {
        document.body.getElementsByTagName("div")[1].style.backgroundColor = "red";
    }



}
