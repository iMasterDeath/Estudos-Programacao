// AULA SOBRE ARRAYS //

// Pode ter nomes e numeros dentros dos arrays tambem
// Nome, Numero, True, null e tudo mais porem nao e boa pratica de programacao
const alunaas = ['Luiz', 'Maria', 'Joao'];
console.log(alunaas);

//-----------------------------------------------------------------------------

// Arrays sao Indexados tambem, Ex abaixo:
//                0       1        2
const alunas = ['Luiz', 'Maria', 'Joao'];
console.log(alunas[0]);

//-----------------------------------------------------------------------------

// Da para alterar (editar) os arrays:

const alunes = ['Luiz', 'Maria', 'Joao'];

alunes[0] = 'Eduardo';
console.log(alunes);

//-----------------------------------------------------------------------------

// Adicionar elemento no final do array

const alunees = ['Luiz', 'Maria', 'Joao'];

alunees[0] = 'Eduardo';
console.log(alunees);

//-----------------------------------------------------------------------------

/*
// Da para acrescentar no array (Formas mais erradas:)
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';
*/

//-----------------------------------------------------------------------------

// Ver tamanho do array

const alunis = ['Luiz', 'Maria', 'Joao'];

console.log(alunis.length);

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

// Acrescentar no array com boa pratica de programacao

const aluniis = ['Luiz', 'Maria', 'Joao'];

aluniis.push('Luiza');
aluniis.push('Fabio');
console.log(aluniis)

//-----------------------------------------------------------------------------

// Acrescentar no comeco (deve mover todos elementos para frente)
//
//                0        1        2
const alunos = ['Luiz', 'Maria', 'Joao'];

alunos.unshift('Luiza'); // nesse cenario a luiza foi adicionada ai depois foi
alunos.unshift('Fabio'); // movido ela pra frente e colocado o fabio antes dela
console.log(alunos);

//-----------------------------------------------------------------------------

// Remove elemento do final do Array  (POP)

const alunoos = ['Luiz', 'Maria', 'Joao'];

alunoos.pop();
console.log(alunoos)

// da tambem para salvar o elemento que for tirado em um novo array:
// 
//  const removido = alunoos.pop()
// console.log(removido);
// console.log(alunoos);

//-----------------------------------------------------------------------------

// Remove elemento do comeco do Array (shift)

const alunus = ['Luiz', 'Maria', 'Joao'];

alunus.shift();  // removeu o Luiz
console.log(alunus);

// da tambem para salvar o elemento que for tirado em um novo array
// igual ao metodo anteriormente:
//
//  const removido = alunus.shift()
// console.log(removido);
// console.log(alunus);

//-----------------------------------------------------------------------------

// Da pra apagar um indice sem alterar a ordem do array

const alunuus = ['Luiz', 'Maria', 'Joao'];

delete alunuus[1];
console.log(alunuus);

//-----------------------------------------------------------------------------

// Da pra acessar um numero que nao existe no array

const alunaes = ['Luiz', 'Maria', 'Joao'];

console.log(alunaes[50]);

//-----------------------------------------------------------------------------

// Da pra fazer o fatiamento (cortar  slice)
//                 0        1        2           3       4
const alunous = ['Luiz', 'Maria', 'Joao'];  // Luiza, Eduardo

alunous.push('Luiza');
alunous.push('Eduardo');

console.log(alunous.slice(0, 3))  // da pra usar positivo e negativo
// aqui tem que colocar 1 a mais, se nao ele nao pega
// (o ultimo elemento nao e incluido)

//-----------------------------------------------------------------------------

// Da pra saber se e array e confirmar o tipo
//                 0        1        2           3       4
const aluneos = ['Luiz', 'Maria', 'Joao'];  // Luiza, Eduardo

console.log(typeof aluneos);
console.log(aluneos instanceof Array)  // confirmando que aluneos e array

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Da pra saber se e array e confirmar o tipo (vai ser number e false agora)
//                 0        1        2           3       4
let aluneois = ['Luiz', 'Maria', 'Joao'];  // Luiza, Eduardo
aluneois = 123;

console.log(typeof aluneois);
console.log(aluneois instanceof Array)  // confirmando que aluneos e array

// da pra colocar dentro do array: numero, objeto, funcoes, strings ou qualquer outro tipo de dado

// Os elementos sao indexados por virgula (separados)

//-----------------------------------------------------------------------------