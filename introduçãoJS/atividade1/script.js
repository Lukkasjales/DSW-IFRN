const titulo = document.getElementById('titulo');
const paragrafos = document.getElementsByClassName('paragrafo');
const itensLista = document.getElementsByTagName('li');

console.log(titulo.textContent);
// console.log(paragrafos[0].textContent);

for (const elemento of paragrafos) {
    console.log(elemento.textContent);
}

for (const elemento of itensLista) {
    console.log(elemento.textContent);
}

// alterar valor de textarea e input

const input = document.getElementById('inputTexto');
const textarea = document.getElementById('areaTexto');

input.value = "Novo valor do input";
textarea.value = "Novo valor da textarea";

// alterar valor de atributos

const imagem = document.getElementById('imagem');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    imagem.setAttribute('src', 'https://via.placeholder.com/150');
    imagem.setAttribute('alt', 'Imagem alterada');

    console.log("id da imagem: " + imagem.getAttribute('id'));
});

const caixa = document.getElementById('caixa');
const caixaSemClass = document.getElementById('caixaSemClass');
const botaoMudarCor = document.getElementById('mudarCor');

botaoMudarCor.addEventListener('click', () => {
    caixa.classList.toggle('azul'); // concatena ao final, se ja tiver remove
    caixaSemClass.classList.add('vermelho');
    // caixaSemClass.classList.remove('vermelho');
});


// principais eventListeners: click, mouseover, mouseout, keydown, keyup, change, submit, input

//preventDefault() - previne o comportamento padrão do elemento

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");

    // o botao dispara o evento que pertence ao formulario, o preventDefault previne o envio do form
    // e o recarregamento da pagina (padrao do form)
});