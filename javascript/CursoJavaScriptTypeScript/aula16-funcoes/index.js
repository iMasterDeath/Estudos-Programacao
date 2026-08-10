// -> Funcoes executam acoes
// -> Tem funcoes que nao retornam valor
// -> Mandar o valor pra ela e pegar devolta (e oque queremos)
//
// nao e interessante criar 1 funcao que faz varias coisas
// (melhor criar varias funcoes que fazem coisas especificas)
//
//  RETURN - significa que ele nao vai ler mais nada abaixo de RETURN

function saudacao(nome) {
    return `Bom dia ${nome}!`
}

const variavel = saudacao('Luiz')
console.log(variavel);

// ---------------------------------------------------------------------

function somas(x, y) {
    const resultados = x + y;
    return resultados;
}

console.log(somas(2, 2));
console.log(somas(2, 5));
console.log(somas(5, 10));

// ---------------------------------------------------------------------------

function some(x, y) {
    const resultade = x + y;
    return resultade;
}

const resultade = some(2, 2);
console.log(resultade);

// ----------------------------------------------------------------------------

// Da para a funcao assumir um valor automatico tambem:

function somi(x = 1, y = 1) {
    const resultadi = x + y;
    return resultadi;
}

const resultadi = somi();
// se colocar valor aqui ele ignora o valor encima do X e do Y
console.log(resultadi);

// ----------------------------------------------------------------------------

// Funcao dentro de um variavel: (funcao anonima)

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// aqui precisa do ponto e virgula ( ; ) para encerrar

// ----------------------------------------------------------------------------

// Arrow Function (maneira moderna de criar funcoes)

const raiz = n => n ** 0.5 
// essa e uma funcao moderna e simples igual a anterior que era grandona

console.log(raiz(9));
console.log(raiz(16));     
console.log(raiz(25));