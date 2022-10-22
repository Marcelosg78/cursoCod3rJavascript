//aula 14

//Object.preventExtensions previne a criação excecia de extenções
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = 'Borracha'
produto.descrição = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal  "selado"

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valares constantes não podem ser mudados