
/*
alert('Mensagem Nossa')
confirm('Deseja realmente apagar?')
prompt('Digite seu nome')
*/

let num1 = prompt('Digite um numero')
let num2 = prompt('Digite outro numero')

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const resultado = num1 + num2;

alert(`O resultado da sua conta foivo: ${resultado}`);
// ou dessa forma:
alert(`O resultado da sua conta foivo: ${num1 + num2}`);