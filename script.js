let index = 0;
let carrito = [];
let total = 0;

function moverSlide(direccion) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  index = (index + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function validarID() {
  const id = document.getElementById('playerID').value;
  if (id.trim() === '') {
    alert("Por favor, ingresa tu ID de jugador.");
  } else {
    alert(`Bienvenido, jugador ${id}`);
  }
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('itemsCarrito');
  lista.innerHTML = '';
  carrito.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - S/${item.precio}`;
    lista.appendChild(li);
  });
  document.getElementById('total').textContent = `S/${total}`;
}

function comprar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("¡Compra realizada con éxito!");
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function cancelarPedido() {
  if (carrito.length === 0) {
    alert("No hay pedido que cancelar.");
    return;
  }
  if (confirm("¿Estás seguro de cancelar tu pedido?")) {
    carrito = [];
    total = 0;
    actualizarCarrito();
  }
}