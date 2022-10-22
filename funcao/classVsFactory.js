// aula 21  

// na classe o this pode variar no navegador
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//função factory a mais indicada nesse caso
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }

}

const p2 = criarPessoa('João')
p2.falar()