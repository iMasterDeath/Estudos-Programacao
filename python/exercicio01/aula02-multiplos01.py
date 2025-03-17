qtdMultiplos = 0
for i in range(1, 30):
    if (i % 3 == 0):
        qtdMultiplos += 1
        print(i)

print("A quantidade de numeros divisiveis por 3 na sequencia de 1 a 30 e de:", qtdMultiplos)

# Linha 1: declaramos uma variável com o nome de “qtdMultiplos” e atribuímos o valor “0” para ela;

# Linha 2: assinatura da instrução for. Como variável para iteração, declaramos a variável “i”, em seguida, por meio da função “range”, configuramos uma sequência numérica até o número 30 a partir do número 1;

# Linha 3: a cada repetição, essa linha é executada, e dessa forma, é testada a condição. Se o número atual da sequência (contido na variável “i”) dividido por três, resultar seu resto (por isso o operador de módulo) em zero, o número é divisível por 3 e assim, as linhas 4 e 5 serão executadas;

# Linha 4: ao ser executada, essa linha adiciona “+1” para o valor atribuído à variável “qtdMultiplos”;

# Linha 5: utilizamos a função print para exibir na tela o valor contido na variável de iteração “i”;

# Linha 7: ao final do for, ou seja, após concluir todas as repetições da estrutura, essa linha será executada. Utilizamos a função print para exibir na tela o valor contido na variável “qtdMultiplos”.
