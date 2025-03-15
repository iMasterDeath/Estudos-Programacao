with open("arquivo.txt", "w") as arquivo:
    arquivo.write("Olá, mundo!")

with open("arquivo.txt", "r") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)  # Exibe: Olá, mundo!
