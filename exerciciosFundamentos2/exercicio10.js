//Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
//quantidade especificada no parâmetro.
//1
function simboloMais(quantidade) {
let resultado = ''
 for(let i = 0; i < quantidade; i++)
 resultado += '+'

 return resultado
}

console.log(simboloMais(3))
//2
function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
    }
    
let a = simboloMais(4)
console.log(a)

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
    }
    
    console.log(simboloMais(5))
