for i in range(0, 15, 2):
    print(i)

# Linha 1: assinatura da instrução for. Como variável para iteração, declaramos a variável “i”. Para a função “range”, declaramos que o fim da sequência será o número 15 (segundo parâmetro), contudo, como explicado, esse número não é incluso na sequência. Diferente do exemplo anterior, configuramos o incremento (terceiro parâmetro) para o valor 2. Assim, a cada repetição do for, o valor de “i” será somado com o valor +2;

# Linha 2: a cada repetição, utilizamos a função print para exibir na tela o valor contido na variável de iteração “i”. É importante ressaltar que conforme o parâmetro da função “range” (15), será criada uma sequência entre 0 e 14, porém, como o incremento está configurado para somar o valor +2 a cada repetição, serão executadas a quantidade de repetições possíveis entre 0 e 14 em uma progressão de múltiplos de 2. Assim, temos 8 repetições, que é a quantidade de números múltiplos de 2 dentro da sequência de 0 a 14.
