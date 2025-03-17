nome = ""
continuar = True

while continuar:
    nome = nome + input("Digite um nome: ")
    x = input("Deseja continuar? Digite 'Sim' ou 'Não': ")

    if x.upper() == "SIM":
        continuar = True
    else:
        continuar = False

print(nome)

# Linha 1: declaramos uma variável com o nome de “nome” e atribuímos o valor “ ”, ou seja, vazio. Essa será a variável que irá armazenar os nomes digitados pelo usuário do programa;

# Linha 2: declaramos uma variável com o nome de “continuar” e atribuímos o valor “True”. Essa será a variável que iremos utilizar como condição para que a estrutura while continue a executar repetições;

# Linha 3: assinatura da instrução while. Utilizamos a variável “continuar” como condição. Enquanto o valor dessa variável for verdadeiro (True), o while irá executar repetições;

# Linha 4: a cada repetição, é solicitado ao usuário do programa que digite um nome. Ao ser executada, essa linha armazenará na variável “nome” o valor digitado juntando com o valor contido nessa variável anteriormente. Por fim, adiciona um caractere de quebra de linha “\n”;

# Linha 6: é solicitado ao usuário do programa que digite “Sim” ou “Não” para expressar o desejo de continuar a executar o programa;

# Linha 8: com a estrutura de decisão, testamos a condição: Se o valor contido na variável “x” for igual à “SIM” (note o texto como um valor em maiúsculo), será atribuído o valor “True” para a variável “continuar”, caso contrário, será atribuído o valor “False”. É importante ressaltar que garantimos que o valor contido em “x” seja um texto em maiúsculo utilizando a função “upper()”. Por meio dessa sequência de instruções mudamos (ou mantemos) o estado da variável “continuar” e dessa forma, controlamos o while acerca de sua execução;

# Linha 13: essa linha será executada quando o while encerrar, ou seja, quando o usuário digitar um valor diferente de “SIM”. Utilizamos a função print para exibir na tela os valores contidos na variável “nome”.
