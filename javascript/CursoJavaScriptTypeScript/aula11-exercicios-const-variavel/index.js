/*
Ronaldinho Gaucho tem 50 anos, pesa 90kg
tem 1.7 de altura e seu IMC e de 31.14186851211073
Ronaldinho nasceu em 1980
*/

const nome = 'Ronaldinho';
const sobrenome = 'Gaucho'
const idade = 50;
const peso = 90;
const alturaEmMetros = 1.70;
let indiceDeMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);  // peso / (altura * altura)
let anoNascimento = 2026 - idade;

// da pra fazer apenas com a virgula (que estariamos separando)
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', alturaEmMetros, 'de altura e seu IMC e de', indiceDeMassaCorporal)
console.log(nome, 'nasceu em', anoNascimento, '.')

// da pra fazer com + e cuidando apenas de acrescentar o espaco quando precisar
// nesse metodo estariamos acrescentando
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg')
console.log('tem ' + alturaEmMetros + ' de altura e seu IMC e de ' + indiceDeMassaCorporal)
console.log(nome + ' nasceu em ' + anoNascimento, '.')

// Jeito mais simples = Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmMetros} de altura e seu IMC e de ${indiceDeMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}`)