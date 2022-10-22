//aula 7

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas comos preços

const paraOjeto = json => JSON.parse(json)//método converter string para objetos em json
const apenasPreco = produto => produto.preco //recebe produto e retorna produto + preço

const resultado = carrinho.map(paraOjeto).map(apenasPreco)
console.log(resultado)