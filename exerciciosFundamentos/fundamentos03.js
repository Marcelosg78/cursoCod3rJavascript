/*function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))
*/
function expoente (base, expoente) {
    //método antigo
    let resultado = Math.pow(base, expoente)
    //método novo
    resultado = base ** expoente
    return resultado
}

console.log(expoente(2, 3))