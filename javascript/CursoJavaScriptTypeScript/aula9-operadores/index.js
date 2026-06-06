/* ------------------------
 * Operadores Aritimeticos
 * -----------------------
 * 
 * + Adicao e Concatenacao
 * - subtracao 
 * * vezes
 * ** Potenciacao
 * % Resto da divisao 
 * 
 * 
 * -------------------------
 * Precedencia:
 * -------------------------
 * 1)  ( )   parenteses
 * 2)  **    Potenciacao 
 * 3) * / %  Multiplicacao, divisao e resto da divisao
 * 4)  + -   Contas de Mais e menos
 * 
 * 
 */

const num1 = 5;
const num2 = 10;
console.log(num1 + num2)

/*
 * -------------------------
 * Incremento = ++
 * Decremento = --
 * 
*/

let contador = 1;
contador++;
console.log(contador);

// ----------------------------------------------------------------------

// Casos onde queira incrementar mais de um valor:
// Operadores de Atribuicao

let contadores = 2;
contadores *= 2;
contadores *= 2;
contadores *= 2;
console.log(contadores);

// ----------------------------------------------------------------------

// NaN - Not a number
const num3 = 10;
const num4 = 'Luiz';
console.log(num3 * num4)

// ----------------------------------------------------------------------
// ParseInt - converte para Inteiro
// ParseFloat - converte de uma string para um numero com casas decimais
// Number - 
const num5 = 10;
const num6 = parseFloat('5.2');
console.log(num5 + num6);
console.log(typeof num6)