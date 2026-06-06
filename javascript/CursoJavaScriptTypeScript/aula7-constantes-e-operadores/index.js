// 1) Nao podemos criar constantes com palavras reservadas
// 2) constantes precisam ter nomes significativos
// 3) Nao podemos comecar o nome de uma constantes com numero
// 4) Nao pode conter espacos ou tracos
// 5) Utilizamos camelCase
// 6) Case-sensitive
// 7) Nao pode modificar o valor de uma constante
// 8) Nao utilize VAR, Utilize CONST

const nome = 'Joao';
console.log(nome)

// + - * /
// String = Texto | Number = Numero
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado)

console.log(typeof(primeiroNumero))
