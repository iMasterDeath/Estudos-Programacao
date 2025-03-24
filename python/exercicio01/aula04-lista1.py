ListaNomes = []

while True:
    nome = input("Digite um nome ")
    ListaNomes.append(nome)

    continuar = input("Deseja continuar? Digite Sim ou Nao ")
    if (continuar == "Nao" or continuar == "NAO"):
        break

print(ListaNomes)
