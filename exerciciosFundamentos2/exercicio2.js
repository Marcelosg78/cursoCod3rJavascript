//Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere
//também dias decorridos desde o último aniversário.


function converterIdadeEmAnosParaDias(idadeEmAnos) {
const diasDoAno = 365
return diasDoAno * idadeEmAnos
}

d = converterIdadeEmAnosParaDias(25)
console.log(d)