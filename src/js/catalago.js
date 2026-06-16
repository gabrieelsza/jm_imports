// CLASS = SELECT 
async function carregarCamisetas() {
    try {
        const resposta = await fetch('./camisetas.json');
        const camisetas = await resposta.json();

        const grid = document.querySelector('.cards-shirts');
        grid.innerHTML = ''; // Limpa antes de renderizar

        camisetas.forEach((camiseta) => {
            const card = document.createElement('div');
            card.classList.add('card-shirt');

            card.innerHTML = `
         <img src="${camiseta.imagem}" alt=" Camiseta">
                <div class="info-shirt">
                    <p class="category-shirt">
                        ${camiseta.liga}
                    </p>
                    <p class="about-shirt">
                        ${camiseta.nome}
                    </p>
                    <div class="price-shirt">
                        <p class="shirt-current-price">
                            ${"R$ " + camiseta.preco}
                        </p>
                        <p class="discount">
                            R$ 349.00
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
                </div>
      `;

            grid.appendChild(card);
        });
    } catch (erro) {
        console.error('Erro ao carregar camisetas:', erro);
    }
}

document.addEventListener('DOMContentLoaded', carregarCamisetas);

async function carregarCategorias() {
    try {
        const resposta = await fetch('./camisetas.json');
        const categories = await resposta.json();
        
        const categoria = document.querySelector('.title-category');

        const categoriasUnicas = categories.filter((category, index, array) => {
             return index === array.findIndex(item => item.categoria === category.categoria);
        });
        
        categoriasUnicas.forEach((category) => {
            const coluna = document.createElement('div');
            coluna.classList.add('category-disponible');
            const categoriaExistente = category.categoria;
            
            coluna.innerHTML = `
                <button href="#" class="btn-categoria" data-filter-type="categoria" data-filter-value="Edição estadio"> ${category.categoria} </button>
            `;
            
            categoria.appendChild(coluna);
        });
    } catch (erro) {
        console.error('Erro ao carregar camisetas:', erro);
    }
    
}

document.addEventListener('DOMContentLoaded', carregarCategorias);

async function carregarTimes() {
    try {
        const resposta = await fetch('./camisetas.json');
        const times = await resposta.json();
        
        const colunmTime = document.querySelector('.time');
        
        times.forEach((time) => {
            const coluna = document.createElement('div');
            coluna.classList.add('category-disponible');
            
            coluna.innerHTML = `
                <button href="#" class="btn-categoria" data-filter-type="categoria" data-filter-value="Edição estadio"> ${time.time} </button>
            `;

            if( time != time.categoria ) {
                colunmTime.appendChild(coluna);
            }            
        });
    } catch (erro) {
        console.error('Erro ao carregar camisetas:', erro);
    }
    
}

document.addEventListener('DOMContentLoaded', carregarTimes);