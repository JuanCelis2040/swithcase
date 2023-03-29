let num= Number(prompt("Ingrese un número:"));
switch(num % 2){
    case 0:
        console.log("El numero ingresado es par",num);
        break;
        default:
            console.log("El numero ingresado es impar",num)
            break;
}