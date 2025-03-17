qtdvalores = int(input("Digite a quantidade de numeros que sao calculados"))
contador = 0
valor = 0
while contador < qtdvalores:
    valor += float(input("Digite um valor "))
    contador += 1

media = valor / contador
print(f"A média dos valores foi de: {media}")

# Linha 1: declaramos uma variável com o nome de “qtdvalores” e utilizamos a instrução input para solicitar ao usuário do programa a quantidade de números que serão calculados. Utilizamos a instrução int para converter o tipo string para inteiro;

# Linha 2: declaramos uma variável com o nome de “contador” e atribuímos o valor “0” para ela. Essa será a variável para iteração, será utilizada como variável de controle;

# Linha 3: declaramos uma variável com o nome de “valor” e atribuímos o valor “0” para ela. Iremos utilizar essa variável para armazenar os valores digitados pelo usuário do programa;

# Linha 4: assinatura da instrução while. A condição para continuar a repetir a instrução while é de que o valor contido na variável “contador” seja menor que o valor contido na variável “qtdvalores”, enquanto essa proposição for verdadeira, o while continuará a executar;

# Linha 5: a cada repetição, é solicitado ao usuário do programa que digite um valor. O valor digitado é atribuído para a variável “valor” adicionando (operação aritmética de adição +) com o valor contido anteriormente. Utilizamos a instrução float para converter string em float;

# Linha 6: a cada repetição, a variável “contador” acumulará o valor contido anteriormente mais (+) o valor 1;

# Linha 8: ao encerrar o while, é realizado o cálculo da média. Para isso é realizado a divisão entre o valor contido na variável “valor” e a variável “contador”;

# Linha 9: utilizamos a função print para exibir na tela o valor contido na variável “media”.
