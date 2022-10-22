//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(12, 5);

//Amazenando uma função "arrow" em uma variavel (forma reduzia com arrow)
const soma = (a, b) => {
    return a + b;
}
console.log(soma(14, 10));
//Retorno implícito
const subtracao = (a, b) => a - b; //"arrow function" forma reduzida a uma unica linha
console.log(subtracao(10, 5));