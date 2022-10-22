//aula 9


function Pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) //contador dispara a cada mile segundos
}

new Pessoa