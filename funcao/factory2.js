//aula 20

function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Arroz', 20.0))
console.log(criarProduto('Notebook', 3500.00))