let num1 = 1500; // number
let num2 = 2.5; // number

//pegando num1 e convertendo ele em string para que junte com o num2:
console.log(num1.toString() + num2)

// Alterando a variavel para String (para sempre):
num1 = num1.toString(); 

// Representacao Binaria do num1 (2):
console.log(num1.toString(2)) 

// Arredondar os valores (vai fixar as 2 casas apos virgula e ignorar o resto):
console.log(num1.toFixed(2)); 

// Saber se e um numero inteiro:
console.log(Number.isInteger(num1));

// Aqui e para saber se o numero e um Not a Number, se ele retornar verdadeiro quer dizer que ele nao e um numero e se for falso quer dizer que e um numero
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

// ----------------------------------------------------------------------- //

// IEEE 754-2008  (Padrao que o JavaScript segue nas contas)
let num3 = 0.7; // number
let num4 = 0.1; // number

num3 += num4; // 0.8
num3 += num4; // 0.9
num3 += num4; // 1.0
num3 += num4; // 1.1
num3 += num4; // 1.2
num3 += num4; // 1.3
num3 += num4; // 1.4
num3 += num4; // 1.5
num3 += num4; // 1.6
num3 += num4; // 1.7
num3 += num4; // 1.8
num3 += num4; // 1.9
num3 += num4; // 2.0

// 1) Tem essa maneira que fica correto (ParseFloat) ou (Number), se nao fica impreciso (melhor jeito)
num3 = parseFloat(num3.toFixed(2)); 

// 2) Tem a maneira de fazer (Que usa conta tambem, porem mais trabalhoso):
num3 = ((num3 * 100) + (num2 * 100)) / 100; // 0.8
num3 = ((num3 * 100) + (num2 * 100)) / 100; // 0.9
num3 = ((num3 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num3);
console.log(Number.isInteger(num3));
