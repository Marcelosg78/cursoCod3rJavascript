/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:*/

//1
function objetoParaArray(objeto) {
    const resultado = []
    for(let chave in objeto)
        resultado.push([chave, objeto[chave]])

    return resultado
}

//2
function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}
//3
function objetoParaArray(objeto) {
    return Object.esntries(objeto)
}

