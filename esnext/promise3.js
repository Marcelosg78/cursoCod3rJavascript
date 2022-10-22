function gerandoNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [ min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

//gerandoNumerosEntre(10, 13).then(console.log)

gerandoNumerosEntre(1, 60)
    .then(num => num * 1)
    .then(numx10 => `O número gerado foi ${numx10}`)
    .then(console.log)