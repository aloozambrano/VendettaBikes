// E-Commerce de Bicicletas Fixies - Vendetta 

// BICICLETAS  BICICLETAS  BICICLETAS  BICICLETAS 
let entrada = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));

class Bicicleta {
  constructor(nuevoID, nuevoModelo, nuevaTalla, nuevoPrecioBici, nuevoStock) {
    this.ID = nuevoID;
    this.modelo = nuevoModelo;
    this.talla = nuevaTalla;
    this.precioBici = nuevoPrecioBici * 1.18;
    this.stock = nuevoStock;
  }
  venta() {
    alert("Producto vendido: " + this.modelo + "\nPrecio: S/." + this.precioBici);
    this.stock = this.stock - 1;
  };
  agregar(IDbicicleta) {
    if (IDbicicleta == this.ID) {
      return "Modelo: " + this.modelo + "\nTallas Disponibles: " + this.talla + "\nPrecio: S/." + this.precioBici;
    }
  }
};

// CARRITO DE COMPRAS
const carrito = [];

//TALLAS DE BICICLETAS
const tallasDisponibles = ["47 X-Small", "50 Small", "53 Medium", "56 Large", "58 X-Large"];
//OBJETOS PRODUCTOS
const bici1 = new Bicicleta(1, "Triple Triangle", tallasDisponibles, 2130, 10);
const bici2 = new Bicicleta(2, "Oval", tallasDisponibles, 2030, 7);
const bici3 = new Bicicleta(3, "All Ground", tallasDisponibles, 1980, 15);
const bici4 = new Bicicleta(4, "Classic 4130", tallasDisponibles, 1850, 6);

function seleccionarBicicleta(IDbicicleta) {
  switch (IDbicicleta) {
    case 1: carrito.push(bici1.agregar(IDbicicleta)); break;
    case 2: carrito.push(bici2.agregar(IDbicicleta)); break;
    case 3: carrito.push(bici3.agregar(IDbicicleta)); break;
    case 4: carrito.push(bici4.agregar(IDbicicleta)); break;
    default: console.log("El item seleccionado seleccionado es incorrecto"); break;
  }
}

while (entrada != 0) {
  seleccionarBicicleta(entrada);
  entrada = parseInt(prompt("Ingresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));
}

console.log(carrito);





// ACCESORIOS ACCESORIOS ACCESORIOS
// let entrada2 = parseInt(prompt("Ingresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Mochila \n (2) Cartuchera \n (3) Gorra \n (4) Straps \n (5) Polo \n (6) Camisa \n\n (0) Salir"));

// class Accesorios {
//   constructor(nuevoID, nuevoAcc, nuevoColor, nuevoPrecioAcc, nuevoStock) {
//     this.ID = nuevoID;
//     this.nombreAcc = nuevoAcc;
//     this.colorAcc = nuevoColor;
//     this.precioAcc = nuevoPrecioAcc * 1.18;
//     this.stockAcc = nuevoStock;
//   }
//   venta() {
//     alert("Producto vendido: " + this.nombreAcc + "\nPrecio: S/." + this.precioAcc);
//     this.stockAcc = this.stockAcc - 1;
//   };
//   agregar(IDaccesorio) {
//     if (IDaccesorio == this.ID) {
//       return "Modelo: " + this.nombreAcc + "\nColores Disponibles: " + this.colorAcc + "\nPrecio: S/." + this.precioAcc;
//     }
//   }
// };

// //COLORES DE ACCESORIOS
// const coloresMochila = ["Púrpura", "Negro"];
// const coloresGorra = ["Púrpura", "Verde", "Amarillo"];
// const coloresCamisa = ["Blanco", "Violeta"];

// const Acc1 = new Accesorios(1, "Mochila", coloresMochila, 150, 26);
// const Acc2 = new Accesorios(2, "Cartuchera", "Negro", 40, 13);
// const Acc3 = new Accesorios(3, "Gorra", coloresGorra, 30, 32);
// const Acc4 = new Accesorios(4, "Straps", "Negro", 45, 55);
// const Acc5 = new Accesorios(5, "Polo", "Negro", 50, 60);
// const Acc6 = new Accesorios(6, "Camisa", coloresCamisa, 60, 34);

// function seleccionarAccesorio(IDaccesorio) {
//   switch (IDaccesorio) {
//     case 1: console.log(Acc1.agregar(IDaccesorio)); break;
//     case 2: console.log(Acc2.agregar(IDaccesorio)); break;
//     case 3: console.log(Acc3.agregar(IDaccesorio)); break;
//     case 4: console.log(Acc4.agregar(IDaccesorio)); break;
//     case 5: console.log(Acc5.agregar(IDaccesorio)); break;
//     case 6: console.log(Acc6.agregar(IDaccesorio)); break;
//     default: console.log("El item seleccionado seleccionado es incorrecto"); break;
//   }
// }

// while (entrada2 != 0) {
//   seleccionarAccesorio(entrada2);
//   entrada2 = parseInt(prompt("Ingresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Mochila \n (2) Cartuchera \n (3) Gorra \n (4) Straps \n (5) Polo \n (6) Camisa \n\n (0) Salir"));
// }










// let bicicletas = ["Triple Triangle", "Oval", "All Ground", "Classic 4130"];
// let tallas = ["47 X-Small", "50 Small", "53 Medium", "56 Large", "58 X-Large"];
// let precioBicicleta = 2130;
// let accesorios = ["Mochila", "Cartuchera", "Gorra", "Straps", "Polo", "Camisa"];
// let precioAccesorios = [150, 40, 30, 45, 50, 60];

// let entrada = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));

// let entrada2 = parseInt(prompt("Ahora elige la talla del cuadro de la bicicleta: \n\n (1) 47 X-Small \n (2) 50 Small \n (3) 53 Medium \n (4) 56 Large \n (5) 58 X-Large \n\n (0) Salir"));

// while (entrada > 0) {
//   // ENTRADA ELEGIR MODELO DE BICICLETA
//   if (entrada <= 4) {
//     alert("Perfecto! Seleccionaste el modelo: " + obtenerBicicleta(entrada));
//   } else {
//     alert("La opción ingresada no es válida, vuelve a intentarlo")
//   }
//   // ENTRADA 2 TALLA DE BICICLETA
//   if (entrada2 <= 5) {
//     alert("Perfecto! Seleccionaste la talla: " + obtenerTalla(entrada2));
//   } else {
//     alert("La opción ingresada no es válida, vuelve a intentarlo")
//   }

//   entrada = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));

//   entrada2 = parseInt(prompt("Ahora elige la talla del cuadro de la bicicleta: \n\n (1) 47 X-Small \n (2) 50 Small \n (3) 53 Medium \n (4) 56 Large \n (5) 58 X-Large \n\n (0) Salir"));
// }

// function obtenerBicicleta(nuevaBicicleta) {
//   let index = nuevaBicicleta - 1;
//   return bicicletas[index] + " Precio S/." + precioBicicleta;
// }

// function obtenerTalla(nuevaTalla) {
//   let index = nuevaTalla - 1;
//   return tallas[index];
// }
