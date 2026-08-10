/*
Dados Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valor
- Valores copiados
*/

let e = 'A';
let f = e;  // Copia
console.log(e, f);

e = 'Outra coisa';
console.log(e, f);

// ---------------------------------------------------------
/*
Dados por referencia (mutavel) - array, object, function
- Passados por referencia

[...a] - para copiar um valor  (spread)
*/

let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);    // acrescentamos o 4 no final
console.log(a, b);

b.pop();  // removemos o ultimo numero
console.log(a, b);

a.push('Joao');  // acrescentamos luiz no final
console.log(a, c);

// ---------------------------------------------------------
//
// A maior diferenca entre o primitivo e por referencia e que os primitivos
// sao copiados e com os dados referenciaveis ai tem que colocar os ...
//

const pessoa = {
    nome: 'Joao',
    sobrenome: 'Irineu'
};

const outrapessoa = {...pessoa};

pessoa.nome = 'Jose'
console.log(outrapessoa);