async function genereteShirts() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));

  if (!id) {
    console.error('Nenhum id na URL');
    return;
  }

  try {
    const resposta = await fetch('./camisetas.json');
    const camisetas = await resposta.json();

    const camisa = camisetas.find((item) => item.id === id);

    if (!camisa) {
      console.error('Camisa não encontrada');
      return;
    }

    const shirtSelect = document.querySelector('.shirt-select');
    const cards = document.querySelector('.other-shirts');

    shirtSelect.innerHTML = `
      <img src="${camisa.imagem.frente}" alt="${camisa.nome}" id="product-image">
    `;

    cards.innerHTML = '';
    const ul = document.createElement('ul');

    const imagens = [
      { id: 'zoom', src: camisa.imagem.zoom },
      { id: 'verso', src: camisa.imagem.verso },
      { id: 'frente', src: camisa.imagem.frente, selected: true }
    ];

    imagens.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('thumb-item');
      li.id = item.id;

      if (item.selected) {
        li.classList.add('select');
      }

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = `${camisa.nome} - ${item.id}`;
      img.dataset.image = item.src;
      img.id = item.id;

      li.appendChild(img);
      ul.appendChild(li);
    });

    cards.appendChild(ul);

    ativarGaleria();
  } catch (erro) {
    console.log("Erro na api", erro);
  }
}

function ativarGaleria() {
  const imagePicker = document.querySelector('#image-picker');
  const image = document.querySelector('#product-image');

  imagePicker.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;

    const img = li.querySelector('img');
    if (!img) return;

    imagePicker.querySelectorAll('li').forEach((item) => {
      item.classList.remove('select');
    });

    li.classList.add('select');
    image.setAttribute('src', img.dataset.image);
  });
}

document.addEventListener('DOMContentLoaded', genereteShirts);