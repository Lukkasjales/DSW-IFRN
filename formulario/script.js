const botaoBuscarProduto = document.getElementById('campo-busca');
const formulario = document.getElementById('form-busca');

botaoBuscarProduto.addEventListener('click', (e) => {
    const valorBusca = e.target.value;
    filtrarProdutos(valorBusca);
});

const produtos = [
    { id: 1, nome: 'Notebook Gamer', categoria: 'Eletrônicos', preco: 4500 },
    { id: 2, nome: 'Cadeira de Escritório', categoria: 'Móveis', preco: 1200 },
    { id: 3, nome: 'Mouse sem fio', categoria: 'Eletrônicos', preco: 150 },
    { id: 4, nome: 'Mesa de Jantar', categoria: 'Móveis', preco: 2500 },
    { id: 5, nome: 'Teclado Mecânico', categoria: 'Eletrônicos', preco: 450 }
];

function renderizarProdutos(produtosParaRenderizar) {
    const containerProdutos = document.getElementById('container-produtos');
    const htmlProdutos = produtosParaRenderizar.map((item) => {
        return `
        <div>
            <h2>${item.nome}</h2>
            <p>${item.preco}</p>
        </div>`
    });

    containerProdutos.innerHTML = htmlProdutos.join('')
}

function filtrarProdutos(palavraChave) {
    const produtosFiltrados = produtos.filter((item) => {
        return item.nome.toLowerCase().includes(palavraChave.toLowerCase());
    });

    renderizarProdutos(produtosFiltrados);
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();


});

renderizarProdutos(produtos);