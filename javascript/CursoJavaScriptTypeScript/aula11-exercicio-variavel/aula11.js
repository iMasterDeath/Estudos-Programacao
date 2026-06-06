let varA = 'A';
let varB = 'B';
let varC = 'C';

// Quero que o valor de A, aponte para o valor de B
// Quero que o valor de B, tenha o valor de C
// Quero que o valor de C, tenha o valor de A

const varATemp = varA;
const varBTemp = varB;
const varCTemp = varC;

varA = varBTemp;
varB = varCTemp;
varC = varATemp;


// Daria para fazer assim tambem:

[varA, varB, varC] = [varB, varC, varA]

// ------------------------------

console.log(varA, varB, varC);