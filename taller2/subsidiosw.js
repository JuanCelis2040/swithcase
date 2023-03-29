let nombre = prompt("Ingrese su nombre");
let estrato = parseInt(prompt("Ingresse su estrato"));
let antiguedad = parseInt(prompt("Ingrese los aÃ±os que lleva trabajando"));

let subsidio = (estrato<4 && antiguedad>=8);
switch (subsidio) {
    case true:
        console.log("Tiene derecho a subsidio");
        break;
    default:
        console.log("No tiene derecho a subsidio");
        break;
}