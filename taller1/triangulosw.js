let a1 = Number(prompt("Ingrese el primer angulo"));
let a2 = Number(prompt("ingrese el segundo angulo"));
let a3 = Number(prompt("ingrese el tercer angulo"));
let triangulo = a1+a2+a3;
switch(triangulo) {
    case (180):
        console.log("la suma de los angulos corresponde a un triangulo");
        break;
        default:
            console.log("Los angulos no corresponden a un triángulo");
            break;
}