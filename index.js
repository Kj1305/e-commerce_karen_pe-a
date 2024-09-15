// Seleccionar el h1 y agregarle el texto 'Productos'
const h1 = document.querySelector("h1");
h1.innerText = "Productos";

// Seleccionar el contenedor de la sección con clase 'container'
const container = document.querySelector(".container");

// Crear un array vacío para almacenar las cards
const cardsArray = [];

// Generar las cards dinámicamente
for (let i = 1; i <= 6; i++) {
    let card = `
        <div class="card" style="max-width: 900px; margin: 20px; text-align: center; padding: 20px; background-color:white; border-radius: 15px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" 
                 alt="Producto ${i}" 
                 style="width: 100%; height: auto; border-radius: 10px; object-fit: cover;">
            <h4>Producto ${i}</h4>
            <p>Descripción del producto ${i}</p>
            <button>Agregar al carrito</button>
        </div>
    `;

    // Agregar la card al array
    cardsArray.push(card);
}

// Asignar todas las cards a la sección
container.innerHTML = cardsArray.join('');



