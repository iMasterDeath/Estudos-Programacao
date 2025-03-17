a = 1
b = 5
frequencia = 80

if (frequencia > 75):
    soma = a+b
    if (soma > 6):
        print("Aluno Aprovado")
    elif (soma > 2):
        print("O aluno pode realizar a prova de recuperacao")
    else:
        print("O aluno esta reprovado")
else:
    print("Aluno Reprovado")

# Linhas 1 e 2: declaramos uma variável com o nome de “a” e “b” e, em seguida, atribuímos os valores 1 para “a” e 5 para “b”;

# Linha 5: descrevemos a estrutura condicional if testando a condição “frequencia > 75”. Caso o teste retorne verdadeiro, o programa executará o bloco a partir da linha 6. Caso contrário, o programa executará o bloco de instruções a partir da linha 13 e finalizará a execução do programa;

# Linha 6: efetuamos uma operação de adição entre as variáveis “a” e “b” e atribuímos o resultado para a variável “soma”;

# Linha 7: descrevemos a estrutura condicional if testando a condição “soma > 6”. Caso o teste retorne verdadeiro, o programa executará a linha 8. Caso contrário, o programa executará a linha 9;

# Linha 8: utilizamos a função “print” para imprimir na tela o texto “Aluno aprovado”;

# Linha 9: testamos a condição “soma > 2”. Caso o teste retorne verdadeiro, o programa executará a linha 10. Caso contrário, o programa irá executar o bloco de instruções a partir da linha 12;

# Linha 10: utilizamos a função “print” para imprimir na tela o texto “Aluno pode realizar prova de recuperação”;

# Linha 12: utilizamos a função “print” para imprimir na tela o texto “Aluno reprovado”;

# Linha 13: utilizamos a função “print” para imprimir na tela o texto “Aluno reprovado direto”.
