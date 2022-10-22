// aula 33
// Retirando objetos de um extrutura
// console.log(pessoa.nome) forma padrão

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // retirando atributos do objeto pessoa
console.log(nome, idade)

const{nome: n, idade: i } = pessoa
console.log(n, i)

const{ sombrenome, beHumorada = true} = pessoa
console.log(sombrenome, beHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
