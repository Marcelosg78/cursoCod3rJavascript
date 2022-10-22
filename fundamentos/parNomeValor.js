
//par nome/valor
const saudacao = "opa";

function exec () {
    const saudacao = "falaaaa";
    return saudacao;
}

//objetos são grupos aninhados pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { 
        logradouro: 'Rua muito legal',
        rua: 123

    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)