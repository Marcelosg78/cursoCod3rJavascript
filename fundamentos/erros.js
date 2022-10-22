//aula 43

function tratarerroELançar(erro) {
    //throw new erro('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.massage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
         tratarerroELançar(e) 
    } finally {
         console.log('final')
    }

}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)