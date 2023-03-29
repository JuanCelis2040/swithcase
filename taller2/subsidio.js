 nombre = prompt("Digite su nombre completo");
    const estadoSocioEconomico = parseInt(prompt("Digite su estado economico de 1 a 6"));
    const antiguedad = parseInt(prompt("Digite su antiguedad en años en la empresa"));
    if (estadoSocioEconomico<4 && antiguedad>=8){
        console.log("Tiene derecho a subsidio ");
    }else{
        console.log("No tiene derecho a subsidio");
    }