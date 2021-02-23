let entradaUsuario = parseInt(prompt("Hola, gracias por visitar Vendetta Bikes \nIngresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));

class Bicicleta {
  constructor(datos) {
    this.id = datos.id;
    this.modelo = datos.modelo;
    this.talla = datos.talla;
    this.precio = datos.precio * 1.18;
    this.stock = datos.stock;
  }
};

// CARRITO DE COMPRAS
const carrito = [];

//OBJETOS PRODUCTOS
const bici1 = new Bicicleta(PRODUCTOS[0]);
const bici2 = new Bicicleta(PRODUCTOS[1]);
const bici3 = new Bicicleta(PRODUCTOS[2]);
const bici4 = new Bicicleta(PRODUCTOS[3]);


function seleccionarBicicleta(IDbicicleta) {
  switch (IDbicicleta) {
    case 1: carrito.push(bici1); break;
    case 2: carrito.push(bici2); break;
    case 3: carrito.push(bici3); break;
    case 4: carrito.push(bici4); break;
    default: console.log("El item seleccionado seleccionado es incorrecto"); break;
  }
}

while (entradaUsuario != 0) {

  seleccionarBicicleta(entradaUsuario);
  entradaUsuario = parseInt(prompt("Ingresa el número de acuerdo al modelo de fixie que deseas: \n\n (1) Tiple Triangle \n (2) Oval \n (3) All Ground \n (4) Classic 4130 \n\n (0) Salir"));
}

console.log(carrito);

let productosAgregados = document.getElementById("carritoDeCompras")

for (const listaCarrito of carrito) {
  let contenedor = document.createElement("div");
  contenedor.classList.add("carritoCard");
  contenedor.id = "00" + listaCarrito.id;
  contenedor.innerHTML = `<h3 class="modeloCarrito"> Modelo: ${listaCarrito.modelo}</h3>
                          <p class="precioCarrito"> Precio: ${listaCarrito.precio}</p>`;

  productosAgregados.appendChild(contenedor);
}


// BOTÓN BOLETIN FOOTER
let btnBoletin = document.getElementById("btn_boletin")
btnBoletin.onclick = () => { alert("Gracias por suscribirte!") };