//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);

}
imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma();

//função com retorno "return"
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 25));
console.log(soma(100));
console.log(soma());