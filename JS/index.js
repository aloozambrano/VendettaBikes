// E-Commerce de Bicicletas Fixies - Vendetta 

let bicicletas = ["Triple Triangle", "Oval", "All Ground", "Classic 4130"];
let tallas = ["47 X-Small", "50 Small", "53 Medium", "56 Large", "58 X-Large"];
let precioBicicleta = 2130;
let accesorios = ["Mochila", "Cartuchera", "Gorra", "Straps", "Polo", "Camisa"];
let precioAccesorios = [150, 40, 30, 45, 50, 60];

let entrada = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));

let entrada2 = parseInt(prompt("Ahora elige la talla del cuadro de la bicicleta: \n\n (1) 47 X-Small \n (2) 50 Small \n (3) 53 Medium \n (4) 56 Large \n (5) 58 X-Large \n\n (0) Salir"));

while (entrada > 0) {
  // ENTRADA ELEGIR MODELO DE BICICLETA
  if (entrada <= 4) {
    alert("Perfecto! Seleccionaste el modelo: " + obtenerBicicleta(entrada));
  } else {
    alert("La opción ingresada no es válida, vuelve a intentarlo")
  }
  // ENTRADA 2 TALLA DE BICICLETA
  if (entrada2 <= 5) {
    alert("Perfecto! Seleccionaste la talla: " + obtenerTalla(entrada2));
  } else {
    alert("La opción ingresada no es válida, vuelve a intentarlo")
  }

  entrada = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));

  entrada2 = parseInt(prompt("Ahora elige la talla del cuadro de la bicicleta: \n\n (1) 47 X-Small \n (2) 50 Small \n (3) 53 Medium \n (4) 56 Large \n (5) 58 X-Large \n\n (0) Salir"));
}

function obtenerBicicleta(nuevaBicicleta) {
  let index = nuevaBicicleta - 1;
  return bicicletas[index] + " Precio S/." + precioBicicleta;
}

function obtenerTalla(nuevaTalla) {
  let index = nuevaTalla - 1;
  return tallas[index];
}
