/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]*/

function repetir (numero, quantidadeRepeticao)  {
    let resultado = []
    for ( let i = 0; i < quantidadeRepeticao; i++)
    resultado.push(numero)

    return resultado
}

r = repetir(7, 3)
console.log(r)
  //resolução 2
  function repetir2(item, quantidade) {
    return Array(quantidade).fill(item)
    }
r = repetir2(7, 3)
console.log(r)