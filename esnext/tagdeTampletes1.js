//tagged tampletes - processa o tamplete
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outro string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)