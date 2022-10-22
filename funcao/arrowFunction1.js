//aula 8
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}// para chamar a função arrow é necessário atribuíl-la a uma variável

dobro = a => 2 * a //rudução válida para funções de uma unica linha. return está implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um paramentro
console.log(ola())