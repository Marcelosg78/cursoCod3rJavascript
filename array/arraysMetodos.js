//aula 2
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adicina um elemento ao array na ultima posição
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')//inseri na primeria posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')//acicionando no indice 2 e o 0 não removeno nem um item
console.log(pilotos)

//remover
pilotos.splice(3, 1 )//removendo indice 2 apenas 1 item
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//retorna um novo array apartir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//gera novo array apartir do indice 1 até o 3
console.log(algunsPilotos2)

