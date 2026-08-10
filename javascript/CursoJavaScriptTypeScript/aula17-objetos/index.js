/*
[] // array
{} // objeto
*/

// Chamamos essa funcao de Factory (de criar / retornar / fabrica de objetos mesmo)
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Eduardo', 25);
const pessoa2 = criaPessoa('Maria', 'Gabriela', 26);
const pessoa3 = criaPessoa('Cotoco', 'Rox', 21);
const pessoa4 = criaPessoa('Irineu', 'Silva', 32);
const pessoa5 = criaPessoa('Jose', 'Cunha', 45);
console.log(pessoa1.nome, pessoa2.nome);


const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Eduardo',
    idade: '26',

    fala () {
        console.log(`A minha idade atual e de: ${this.idade}.`);
    },
    incrementaIdade() {
        ++this.idade;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();