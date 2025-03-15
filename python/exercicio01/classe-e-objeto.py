class Carro:
    def __init__(self, marca, modelo, ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

    def exibir_info(self):
        print(f"{self.marca} {self.modelo} ({self.ano})")

# Criando um objeto da classe Carro
meu_carro = Carro("Toyota", "Corolla", 2020)

# Exibindo as informações do carro
meu_carro.exibir_info()