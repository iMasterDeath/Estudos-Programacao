let num1 = 9.54578;

let num2 = Math.floor(num1); // Arredonda o numero para baixo
let num2 = Math.ceil(num1); // Arredonda o numero para cima
let num2 = Math.round(num1); // Arredonda o numero para o mais proximo

console.log(num2)


// Pega o maior numero da sequencia
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));

// Pega o menor numero da sequencia
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

// Gerar numeros aleatorios:
console.log(Math.random());

// Gerar numeros entre 10 e 5
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// Valor de Pi
console.log(Math.PI);

// Potenciacao
console.log(Math.pow(2, 10)); // com objeto
console.log(2 ** 10); // com operador

// -------------------------------------------------------------- //

// Raiz Quadrada
let num2 = 9;

console.log(num2 ** (1/2)); // da pra fazer dessa maneira
console.log(num1 ** 0,5); // e dessa tambem

// Javascript da pra dividr um numero por 0
console.log(100 / 0);   // ele e avaliado como true para booleano