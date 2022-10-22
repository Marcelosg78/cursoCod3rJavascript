/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.
Exemplos:
Resoluções - Exercícios - Curso Fundamentos de Programação 3
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true*/



function compararNumero(numero1, numero2) {
    if (typeof primeiro != typeof segundo)return false 

    return numero1 >= numero2
    
}

c = compararNumero(4, 9)
console.log(c)