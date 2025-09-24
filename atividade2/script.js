// criação e remoção de elementos

const imagem = document.getElementById('imagem');
const mensagem = document.getElementById('mensagem');
const botaoMudarImagem = document.getElementById('mudarImagem');
const botaoMudarParagrafo = document.getElementById('mudarParagrafo');
const inputParagrafo = document.getElementById('inputNovaMensagem');
const inputImagem = document.getElementById('inputNovaImagem');


botaoMudarParagrafo.addEventListener('click', () => {
    mensagem.textContent = inputParagrafo.value;
})

botaoMudarImagem.addEventListener('click', () => {
    imagem.src = `https://picsum.photos/id/${inputImagem.value}/200/300`;
})

