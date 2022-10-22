// aula 7

// crtl + alt N roda o código - crtl + alt M para o código

function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa