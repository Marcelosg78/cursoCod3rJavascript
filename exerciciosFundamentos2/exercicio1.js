//Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
//com ponto de exclamação "!" no final.

function cumprimentar (nome) {
    const saudacao = "olá"
    return [saudacao, nome].join(', ').concat("!")
}

c = cumprimentar("Maria")
console.log(c)

function cumprimentar (nome) {
    return "Ola, " +  nome + "!"
}

c = cumprimentar ("Luiz") 
console.log(c)

function cumprimentar(nome) {
    return `Olá, ${nome}!`
}
c = cumprimentar ("João") 
console.log(c)
