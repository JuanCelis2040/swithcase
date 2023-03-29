let a1 = Number(prompt("Ingres el primer angulo"));
let a2 = Number(prompt("ingrese el segundo angulo"));
let a3 = Number(prompt("ingrese el tercer angulo"));
let t = a1+a2+a3;

if(t==180){
    console.log("Los angulos ingresados corresponden a los de un triangulo");
}else{
    console.log("Los angulos no corresponden a un triangulo");
}
