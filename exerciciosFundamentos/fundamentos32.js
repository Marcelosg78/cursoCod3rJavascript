//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function calcularMedia (vetor)  {
    let valores = 0
    for ( let i = 0; i < vetor.length; i++) {
        valores += vetor[i]
    }
    return valores/vetor.length
} 

vetor = [1, 2, 3, 4, 5]
console.log(calcularMedia(vetor))