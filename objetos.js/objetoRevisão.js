//coleção dinâmica de pares
const produto = new Object
produto.nome = 'Caldeira'
produto['mardo do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradoura: 'Rua ABC',
            numero: 123      
          }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19

    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculadoraValorSeguro: function () {
        //..
    }


}

carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av. Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculadoraValorSeguro
console.log(carro)
console.log(carro.condutores)
