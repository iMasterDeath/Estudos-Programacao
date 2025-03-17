nome = ""
while True:
    texto = input("Digite um nome ou '0' para encerrar o programa ")

    if (texto == "0"):
        print("Programa Finalizado")
        break
    else:
        nome = nome + texto + "\n"

print(nome)

# Linha 1: declaramos uma variável com o nome de “nome” e atribuímos o valor “ ”, ou seja, vazio. Essa será a variável que irá armazenar os nomes digitados pelo usuário do programa;

# Linha 2: assinatura da instrução while. Diferente do while anterior, não é declarada uma condição com algum operador lógico, apenas a palavra reservada “True”, dessa forma, forçamos o while a continuar executando de forma infinita ou até que alguma ação faça o while finalizar;

# Linha 3: a cada repetição, é solicitado ao usuário do programa que digite um nome ou o número zero. O valor digitado é atribuído para a variável “texto”;

# Linha 5: caso o valor contido na variável “texto” seja igual a zero (0), as linhas 6 e 7 serão executadas. Ressaltamos aqui que a instrução “break” quando executada em um while, executará a parada desse loop;

# Linha 9: essa linha será executada enquanto o usuário do programa digitar textos diferentes de zero (0). Ao ser executada, essa linha armazenará na variável “nome” o valor digitado adicionando com o valor contido nessa variável anteriormente. Por fim, adiciona um caractere de quebra de linha “\n”;

# Linha 11: essa linha será executada quando o while encerrar, ou seja, quando o usuário digitar zero (0). Utilizamos a função print para exibir na tela os valores contidos na variável “nome”.
