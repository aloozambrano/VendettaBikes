// let entradaUsuario = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));


// BICICLETAS   BICICLETAS   BICICLETAS   BICICLETAS
class Bicicleta {
  constructor(datos) {
    this.id = datos.id;
    this.img = datos.img;
    this.modelo = datos.modelo;
    this.talla = datos.talla;
    this.precio = datos.precio * 1.18;
    this.stock = datos.stock;
  }
};

let cardsBicis = [];
cardsBicis.push(new Bicicleta(PRODUCTOS[0]));
cardsBicis.push(new Bicicleta(PRODUCTOS[1]));
cardsBicis.push(new Bicicleta(PRODUCTOS[2]));
cardsBicis.push(new Bicicleta(PRODUCTOS[3]));

let card_bici = document.getElementById("bic");

for (let listaBici of cardsBicis) {

  let b = document.createElement("div");
  b.classList.add("cardAccesorios")
  b.innerHTML = `<div id="cardProducto" class="col">
                   <div class="card h-100">
                      <img src="${listaBici.img}">
                      <div class="card-body">
                        <h5 class="card-title"><b> ${listaBici.modelo} </b></h5>
                        <p>Tallas: ${listaBici.talla}</p>
                        <p>Precio: S/.${listaBici.precio}</p>
                        <a href="#" id="addCarrito" class="btn btn-primary">AGREGAR AL CARRITO</a>
                      </div>
                    </div>
                  </div>`;

  card_bici.appendChild(b);
};

// ACCESORIOS   ACCESORIOS   ACCESORIOS   ACCESORIOS
class Accesorios {
  constructor(datos) {
    this.idAcc = parseInt(datos.idAcc);
    this.img = datos.img;
    this.nombre = datos.nombre;
    this.color = datos.color;
    this.precioAcc = parseFloat(datos.precioAcc);
  }
};

let cardsAcc = [];
cardsAcc.push(new Accesorios(ACCESORIOS[0]));
cardsAcc.push(new Accesorios(ACCESORIOS[1]));
cardsAcc.push(new Accesorios(ACCESORIOS[2]));
cardsAcc.push(new Accesorios(ACCESORIOS[3]));
cardsAcc.push(new Accesorios(ACCESORIOS[4]));
cardsAcc.push(new Accesorios(ACCESORIOS[5]));

let card_Acc = document.getElementById("acc");

for (let listaAcc of cardsAcc) {

  let e = document.createElement("div");
  e.classList.add("cardAccesorios")
  e.innerHTML = `<div id="cardProducto" class="col">
                   <div class="card h-100">
                      <img src="${listaAcc.img}">
                      <div class="card-body">
                        <h5 class="card-title"><b> ${listaAcc.nombre} </b></h5>
                        <p>Precio: S/.${listaAcc.precioAcc}</p>
                        <a href="#" id="addCarrito" class="btn btn-primary">AGREGAR AL CARRITO</a>
                      </div>
                    </div>
                  </div>`;

  card_Acc.appendChild(e);
};

// Evento de boton Añadir a Carrito 
document.getElementById("bic").onclick = btnAgregarCarrito;
document.getElementById("acc").onclick = btnAgregarCarrito;
function btnAgregarCarrito() {
  event.preventDefault();
  alert("PRODUCTO AGREGADO");
}


// BOTÓN BOLETIN FOOTER
let formulario = document.getElementById("boletin");
formulario.onsubmit = (event) => {
  event.preventDefault();
  let dataFormulario = {
    nombre: event.target.children[2].value,
    mail: event.target.children[3].value
  };
  let padre = document.getElementById("notificacion");
  padre.innerHTML = `<p>¡${dataFormulario.nombre}!</p>
                      <p>Gracias por suscribirte a nuestro boletín mensual</p>`;
};




// // CARRITO DE COMPRAS
// const carrito = [];

// //OBJETOS PRODUCTOS
// const bici1 = new Bicicleta(PRODUCTOS[0]);
// const bici2 = new Bicicleta(PRODUCTOS[1]);
// const bici3 = new Bicicleta(PRODUCTOS[2]);
// const bici4 = new Bicicleta(PRODUCTOS[3]);


// function seleccionarBicicleta(IDbicicleta) {
//   switch (IDbicicleta) {
//     case 1: carrito.push(bici1); break;
//     case 2: carrito.push(bici2); break;
//     case 3: carrito.push(bici3); break;
//     case 4: carrito.push(bici4); break;
//     default: console.log("El item seleccionado seleccionado es incorrecto"); break;
//   }
// }

// while (entradaUsuario != 0) {

//   seleccionarBicicleta(entradaUsuario);
//   entradaUsuario = parseInt(prompt("Ingresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));
// }

// console.log(carrito);

// let productosAgregados = document.getElementById("carritoDeCompras")

// for (const listaCarrito of carrito) {
//   let contenedor = document.createElement("div");
//   contenedor.classList.add("carritoCard");
//   contenedor.id = "00" + listaCarrito.id;
//   contenedor.innerHTML = `<h3 class="modeloCarrito"> Modelo: ${listaCarrito.modelo}</h3>
//                           <p class="precioCarrito"> Precio: ${listaCarrito.precio}</p>`;

//   productosAgregados.appendChild(contenedor);
// }


