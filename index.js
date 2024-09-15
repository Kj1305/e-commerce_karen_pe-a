function cardsdeproductos(containerSelector, numerodeCards) {
const h1 = document.querySelector("h1");
h1.innerText = "Productos";


const container = document.querySelector(".container");

const cardsArray = [];

for (let i = 1; i <= numerodeCards; i++) {
    let card = `
        <div class="card" style="max-width: 2000px; margin: 20px; text-align: center; padding: 20px; background-color:white; border-radius: 15px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" 
                 alt="Producto ${i}" 
                 style="width: 100%; height: auto; border-radius: 10px; object-fit: cover;">
            <h4>Producto ${i}</h4>
            <p>Descripción del producto ${i}</p>
            <button>Agregar al carrito</button>
        </div>
    `;

    cardsArray.push(card);
}

container.innerHTML = cardsArray.join('');
}


cardsdeproductos(".container", 8)
