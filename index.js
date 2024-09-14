// Modificar primera card
const h4_1 = document.querySelector(".contenedor-ofertas h4.titulo-productos");
const text_1 = document.querySelector(".contenedor-ofertas .li-productos");
const img_1 = document.querySelector(".contenedor-ofertas img");

h4_1.innerText = "Promoción: Café con almendras";
text_1.innerText = "Ahora a solo $2.99. No te pierdas esta increíble oferta.";
img_1.src = "https://th.bing.com/th/id/OIP.o-amjkztA6JZ66pzq-yZ0AHaEK?rs=1&pid=ImgDetMain";

// Modificar segunda card
const h4_2 = document.querySelectorAll(".div-productos h4.titulo-productos")[0];
const text_2 = document.querySelectorAll(".div-productos .li-productos")[0];
const img_2 = document.querySelectorAll(".div-productos img")[0];

h4_2.innerText = "Promoción: Ensalada Mediterránea";
text_2.innerText = "Ahora a solo $6.99. Disfruta de un sabor fresco y saludable.";
img_2.src = "https://buenprovecho.hn/wp-content/uploads/2020/10/Ensalada_mediterr%C3%A1nea_principal.png";

// Modificar tercera card
const h4_3 = document.querySelectorAll(".div-productos h4.titulo-productos")[1];
const text_3 = document.querySelectorAll(".div-productos .li-productos")[1];
const img_3 = document.querySelectorAll(".div-productos img")[1];

h4_3.innerText = "Promoción: Salmón al horno con quinoa";
text_3.innerText = "Ahora a solo $10.99. Una opción deliciosa y nutritiva.";
img_3.src = "https://solorecetas.com/wp-content/uploads/2015/08/salm%C3%B3n-con-quinoa.jpg";

// Modificar cuarta card
const h4_4 = document.querySelectorAll(".div-productos h4.titulo-productos")[2];
const text_4 = document.querySelectorAll(".div-productos .li-productos")[2];
const img_4 = document.querySelectorAll(".div-productos img")[2];

h4_4.innerText = "camarones al ajiyo";
text_4.innerText = "Ahora a solo $20.5. Una opción deliciosa y nutritiva.";
img_4.src = "https://www.goya.com/media/3701/spanish-garlic-shrimp.jpg?quality=80";

