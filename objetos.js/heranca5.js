//aula 12

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')//split = dividir reverse = inverter join = juntar
}

Array.prototype.first = function () {
}

console.log('Marcelo Gonzaga'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Marcelo Gonzaga'.reverse())//não fazer isso