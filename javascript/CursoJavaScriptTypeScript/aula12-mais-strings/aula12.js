// let umaString = 'um "TEXTO"';
//
// console.log(umaString);
//
// ---------------------------------------------------------
// Da para usar a Barra Invertida para escapar um caracter
//
// let testeString = "um \"TEXTO\";
//
// ---------------------------------------------------------
// -- Strings sao indexadas por exemplo:
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString[4])
// ---------------------------------------------------------
// -- Strings sao indexadas (Exemplo 2):
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.charAt(4));
// ---------------------------------------------------------
// -- Strings concatenadas:
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.concat(' em', ' um', ' lindo dia.'));  |   1 forma
// console.log(umaString + ' em um lindo dia.');   |    2 forma   
// console.log(`${umaString} em um lindo dia.`);   | 3 forma diferente de fazer
// ---------------------------------------------------------
// -- Strings indexOf :
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.indexOf('texto'));
// ---------------------------------------------------------
// -- Strings indexOf 2 :
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.indexOf('o', 3));
// ---------------------------------------------------------
// -- Strings lastIndexOf :
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.lastIndexOf('m', 3));
// ---------------------------------------------------------
// -- Strings match :
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.match(/[a-z]/g));
// ---------------------------------------------------------
// -- Strings search :
//
//                  01234567            aceita expressoes
// let umaString = "um texto";          regulares tambem
// 
// console.log(umaString.search(/x/)); 
// ---------------------------------------------------------
// -- Strings Replace :
//
//                  01234567
// let umaString = "um texto";
// 
// console.log(umaString.replace(/Um/, 'Outra'));
//
// --
//
// Substituir letras String Replace
//
//                  0123456789
// let umaString = "O rato roeu a roupa do rei de roma";
// 
// console.log(umaString.replace(/r/g, '#'));
// ---------------------------------------------------------
// -- Ver tamanho da String
//
// let umaString = "O rato roeu a roupa do rei de roma";
// 
// console.log(umaString.length);
// ---------------------------------------------------------
// -- Fatiar String (Slice)
//
//                  0123456789
// let umaString = "O rato roeu a roupa do rei de roma";
//
// console.log(umaString.slice(2, 6));
//
//--
//
// let umaString = "O rato roeu a roupa do rei de roma";
// 
// console.log(umaString.slice(-5, -1));
// console.log(umaString.substring(umaString.length -5, umaString.length -1));
//  
// As 2 fazem a mesma coisa (substring e slice)
// ---------------------------------------------------------
// -- Dividir String (Split)
//
//                  01234567  89          
// let umaString = "O rato roeu a roupa do rei de roma";         
// 
// console.log(umaString.split(' ')); 
// ---------------------------------------------------------
// -- String Maisculas e Minusculas
//
//                  01234567  89          
// let umaString = "O rato roeu a roupa do rei de roma";         
// 
// console.log(umaString.toUpperCase()); 
// console.log(umaString.toLowerCase()); 
// ---------------------------------------------------------

let umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.slice(2, 6));
