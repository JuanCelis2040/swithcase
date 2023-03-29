let numero = parseInt(prompt("ingrese un numero entre 1 y 15"));
if (numero<1 || numero>15){
    console.log("ingrese numero valido")
}else{


switch (numero) {
    case 1:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
    case 12:
    case 14:
    case 15:
        console.log(numero + " no es numero primo");
        break;

    default:
        console.log(numero + " es numero primo");
        break;
}
}