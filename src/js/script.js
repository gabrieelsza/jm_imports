// BUTTON MOBILE NAS SEÇÕES HEADERS
const btnMobile = document.querySelector("#btn-menu");
const navLinks = document.getElementById("nav-list-header");
const iconBtn = document.querySelector("#btn-menu i")

btnMobile.addEventListener("click", () => {
    console.log("Clicou")
    navLinks.classList.toggle("show");
    iconBtn.classList.toggle('fa-times')
    iconBtn.classList.toggle('fa-bars')
});


const btnFilter = document.querySelector("#btn-filter");
const navFilter = document.querySelector(".nav-filter");
const navFilterMobile = document.querySelector(".nav-filter-mobile");

btnFilter.addEventListener("click", () => {
    console.log("Clicou")
    navFilter.classList.toggle("show");
    navFilterMobile.classList.toggle("show");
});

async function gerarShirts() {
    try {
        const resposta = await fetch('./camisetas.json');
        const camisetas = await resposta.json();

        const grid = document.querySelector('.cards-shirts');
        grid.innerHTML = ''; // Limpa antes de renderizar

        camisetas.forEach((camiseta) => {
            const card = document.createElement('div');
            card.classList.add('card-shirt');

            card.innerHTML = `
                <a href="shirts.html?id=${camiseta.id}" class="card-link">
                    <img src="${camiseta.imagem.frente}" alt=" Camiseta">
                </a>
                
                 <div class="info-shirt">
                        <p class="category-shirt">
                           ${camiseta.liga}
                        </p>
                        <p class="about-shirt">
                            ${camiseta.nome}
                        </p>
                        <div class="price-shirt">
                            <p class="shirt-current-price">
                               R$ ${camiseta.preco}
                            </p>
                            <p class="discount">
                                R$ ${camiseta.discount}
                            </p>
                        </div>
                        <ul class="shirt-sizes">
                            <li>
                                <p> p </p>
                            </li>
                            <li>
                                <p> m</p>
                            </li>
                            <li>
                                <p> g </p>
                            </li>
                            <li>
                                <p> gg </p>
                            </li>
                            <li>
                                <p> xgg </p>
                            </li>
                        </ul>
                    </div>`
            grid.appendChild(card);
        });

    } catch (erro) {
        console.error('Erro ao carregar camisetas:', erro);
    }
}

document.addEventListener('DOMContentLoaded', gerarShirts);

