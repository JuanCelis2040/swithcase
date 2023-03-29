const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

switch (true) {
    case (isNaN(precio) || isNaN(descuento)):
        console.log("El valor ingresado no es valido");
    break;

    case (descuento < 0 || descuento > 100):
        console.log("Porcentaje no valido");
    break;

    default:
        let precioFinal = precio - (precio * (descuento / 100));
        console.log("El precio final del producto es de: " + precioFinal);
    break;
}
