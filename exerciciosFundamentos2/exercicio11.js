//Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
//1
function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]

    return [primeroElemento, ultimoElemento]
}
//2
console.log(receberPrimeiroEUltimoElemento([7, 14, "ola"]))

function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
    }
    
    console.log(receberPrimeiroEUltimoElemento([5, 14, "oi"]))
//3

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
    }

    console.log(receberPrimeiroEUltimoElemento([1, 14, "bom"]))

    