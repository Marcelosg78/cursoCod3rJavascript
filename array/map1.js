//aula 6
//map serve para gerar um novo array
const nums = [1, 2, 3, 4, 5,]

//For com propósito
let resultado = nums.map(function(e) {  
    return e * 2
})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const converterParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2). replace('.', ',')}`
//parseFloat = converte para valor flutuante ex: 1.5
//toFixed = fixa em 2 casas decimais
//replace substitui nesse caso "." por ","
resultado = nums.map(soma10).map(triplo).map(converterParaDinheiro)
console.log(resultado)