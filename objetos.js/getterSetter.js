const sequencia = {
    _valor: 1, //por convensão o _...define a variavel como restrita
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
            
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)