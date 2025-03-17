contador = 0

while contador < 10:
    if (contador == 1 or contador == 3):
        contador+=1
        continue
    
    print(contador)
    contador+=1

# Linha 1: declaramos uma variável com o nome de “contador” e atribuímos o valor “0” para ela. Essa será a variável para iteração, será utilizada como variável de controle;

# Linha 2: assinatura da instrução while. Declaramos a condição (contador < 10). Essa condição faz com que a instrução while continue a executar enquanto o valor contido na variável “contador” seja um número menor que 10;

# Linha 4: por meio da estrutura de decisão, o programa verifica se o valor contido na variável “contador” é igual a “1” ou “3”. Caso verdadeiro, para essas duas situações, serão executadas as linhas 5 e 6;

# Linha 5: cada vez que essa linha é executada é adicionando +1 ao valor contido na variável “contador”;

# Linha 6: cada vez que essa linha é executada, a cláusula continue executa a primeira linha da estrutura de repetição. Assim, as linhas 8 e 9 não serão executadas;

# Linha 8: ao ser executada, essa linha exibe por meio da função print, o valor contido na variável “contador”;

# Linha 9: é adicionando +1 ao valor contido na variável “contador”.