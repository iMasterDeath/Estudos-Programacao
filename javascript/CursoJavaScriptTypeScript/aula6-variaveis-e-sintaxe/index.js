let nome = 'Henrique';
// var - Da para usar tambem mas e mais antigo

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

let nomi; // Declarou a variavel
nomi = 'Joao'; // Inicializando a variavel
console.log(nomi); // Variavel se chama Joao
nomi = 'Otavio'; // Demos outro nome para a variavel > Otavio
console.log(nomi); // Chamamos a variavel nomi e aparece Otavio
// Variaveis precisam ter nomes significativos
//    let n = 'campoBaseDeDados'
//    console.log(n);
// Fica dificil entender quando ver no codigo essa variavel N
//
// Abaixo fica muito mais facil de entender:

let nomeCliente = 'Joao';
console.log(nomeCliente);

// 1) Nao podemos criar variaveis com palavras reservadas
// let let - let console - let if - 

// 2) Variaveis Precisam ter nomes significativos

// 3) Nao podemos comecar o nome de uma variavel com numero
// Exemplo:  let 1nome;

// 4) Nao pode conter espacos ou tracos
// Exemplo:  let nome-Cliente  -  let nome Cliente

// 5) Utilizamos camelCase
// Exemplo:  let nomeCompletoDoCliente = 'Ronaldinho'

// 6) Case-sensitive
// Exemplo:  let nomeCliente = 'Ronaldo'   (uma e maiscula)
//           let nomecliente = 'Gaucho'    (outra e minuscula)

// 7) Nao podemos redeclarar variaveis com let

// 8) Nunca utilizar VAR, Utilizar sempre LET