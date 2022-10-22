//aula 11
function MeuOjeto() {}
console.log(MeuOjeto.prototype)

const obj1 = new MeuOjeto
const obj2 = new MeuOjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuOjeto.prototype === obj1.__proto__)

MeuOjeto.prototype.nome = 'Anônimo'
MeuOjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuOjeto.prototype
obj3.nome = 'obj3'

obj3.falar()

//resumo
console.log((new MeuOjeto).__proto__ === MeuOjeto.prototype)
console.log(MeuOjeto.__proto__ === MeuOjeto.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === undefined)
console.log(Object.prototype.__proto__ === null)

