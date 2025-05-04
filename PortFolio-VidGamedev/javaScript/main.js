const title = document.getElementById("hero--title");
const description = document.getElementById("description");
const description_card = document.getElementById("description_card");

const text_title = title.textContent;
const text_description = description.textContent;
const text_description_card = description_card.textContent;

window.addEventListener("load", () => {
    title.textContent = "";
    description.textContent = "";
    let i = 0;
    let j = 0;

    const typeTitleEffect = () => {
        if (i < text_title.length) {
            title.textContent += text_title[i];
            i++;
            setTimeout(typeTitleEffect, 150); // Velocidad del efecto para el título
        } else {
            // Inicia el efecto de la descripción después de terminar el título
            typeDescriptionEffect();
        }
    };

    const typeDescriptionEffect = () => {
        if (j < text_description.length) {
            description.textContent += text_description[j];
            j++;
            setTimeout(typeDescriptionEffect, 25); // Velocidad del efecto para la descripción
        }
    };

    typeTitleEffect(); // Inicia el efecto de escritura para el título
});

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.main__hero-image');
    if (hero) {
        const offset = window.scrollY * 0.35; // Ajusta el 0.5 si quieres más o menos efecto
        hero.style.backgroundPosition = `center ${offset}px`;
    }
});
