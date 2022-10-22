/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:*/

function recebaeSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0

        if(numeroPar)
        resultado.push(numeros[i])
    }
    return resultado
}

r = recebaeSomenteOsParesDeIndicesPares([5, 6, 7, 8, 9, 10, 70, 22, 43])
console.log(r)

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
    }

    

r = recebaeSomenteOsParesDeIndicesPares([10, 20, 30, 48, 50])
console.log(r)