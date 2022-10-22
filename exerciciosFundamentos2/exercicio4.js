function nomeDoMes (numero) {
    switch(numero){
        case 1:
            return "Janeiro";
        case 2:
            return "Fervereiro";
        case 3:
            return "Março";
        case 4: 
            return "Abril";
        case 5:
            return "Maio";
        case 6: 
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
    } 
}

n = nomeDoMes(8)
console.log(n)

function receberNomeDoMes (numero) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

return meses[--numero];
}

m = receberNomeDoMes(1)

console.log(m)