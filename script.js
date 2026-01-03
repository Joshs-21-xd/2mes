const startBtn = document.getElementById("startBtn");
const mes2Btn = document.getElementById("mes2Btn");
const cartaBtn = document.getElementById("cartaBtn");

const portada = document.getElementById("portada");
const mes1 = document.getElementById("mes1");
const mes2 = document.getElementById("mes2");
const carta = document.getElementById("carta");

const textoCarta = document.getElementById("textoCarta");

/* NAVEGACIÓN */
startBtn.addEventListener("click", () => {
    portada.style.display = "none";
    mes1.classList.remove("hidden");
});

mes2Btn.addEventListener("click", () => {
    mes1.style.display = "none";
    mes2.classList.remove("hidden");
});

cartaBtn.addEventListener("click", () => {
    mes2.style.display = "none";
    carta.classList.remove("hidden");
    escribirCarta();
});

/* TEXTO DE LA CARTA */
const cartaTexto = `
En el segundo mes ya no todo es nervios ni solo ilusión.
Es cuando empece a conocerte de verdad,
cuando tus silencios también me importaban
y tus sonrisas se volvian necesarias.
Es el mes donde el “me gustas” se transformo en “me importas”,
donde empiezo a cuidarte sin darme cuenta
y a pensar en ti incluso cuando no estás.
En el segundo mes ya no te quiero solo para momentos bonitos,
te quiero para los días normales,
para los días difíciles y para todo lo que venga.
Ahí entendí que no era solo un enamoramiento pasajero,
era el comienzo de algo real contigo ❤️
Te amo mi amor ❤️
`;

let i = 0;

function escribirCarta() {
    if (i < cartaTexto.length) {
        textoCarta.innerHTML += cartaTexto.charAt(i);
        i++;
        setTimeout(escribirCarta, 40);
    }
}
