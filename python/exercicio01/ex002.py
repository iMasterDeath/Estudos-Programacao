# Solicita o nome do aluno
nome = input("Digite seu nome: ")

# Solicita as três notas
nota_1 = float(input("Digite sua primeira nota: "))
nota_2 = float(input("Digite sua segunda nota: "))
nota_3 = float(input("Digite sua terceira nota: "))

# Calcula a soma das notas
soma_numeros = float(nota_1 + nota_2 + nota_3)

# Calcula a média das notas
media_nota = float(soma_numeros / 3)

# Exibe a média
print("A média das suas notas é:", media_nota)

# Verifica se o aluno foi aprovado ou reprovado
if media_nota > 6:
    print("O Aluno foi Aprovado!")
else:
    print("Aluno Reprovado!")
