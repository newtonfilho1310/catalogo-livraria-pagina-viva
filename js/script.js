/*
O JavaScript desta página é executado diretamente no navegador do usuário e reage ao
clique no botão de compra. Diferentemente do HTML, que estrutura o conteúdo, e do CSS,
que cuida da apresentação, o JavaScript altera a interface sem recarregar a página.
*/

const botao = document.getElementById("btn-adicionar");
const carrinho = document.getElementById("carrinho");
const contador = document.getElementById("contador");
const mensagemCarrinho = document.getElementById("mensagem-carrinho");

let quantidade = 0;
const tituloDoLivro = "O Jardim das Palavras";

function adicionarAoCarrinho() {
    const novoItem = document.createElement("li");
    novoItem.textContent = "1x " + tituloDoLivro;
    carrinho.appendChild(novoItem);

    quantidade += 1;
    contador.textContent = quantidade;
    mensagemCarrinho.textContent = "Livro adicionado ao carrinho com sucesso.";
}

botao.addEventListener("click", adicionarAoCarrinho);
