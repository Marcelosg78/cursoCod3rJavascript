//AULA 6

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre padigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind refeência o this dentro da função
falarDePessoa()


