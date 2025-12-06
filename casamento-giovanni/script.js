function verificarCodigo() {
    // Lista de senhas válidas (escreva do jeito que quiser)
    const senhasCorretas = [
        "resident",
        "Resident Evil",
        "Resident Evil 4",
        "residentevil",
        "residentevil4",
        "RE4",
        "Leon",
        "Leon Kennedy",
        "Ashley",
        "Las Plagas"
    ];

    // Pega o que o usuário digitou e normaliza para maiúsculo sem espaços extras
    const input = document.getElementById("codigo").value.trim().toUpperCase();
    const erro = document.getElementById("erroMsg");

    // Converte a lista inteira para maiúsculo para comparar corretamente
    const senhasNormalizadas = senhasCorretas.map(s => s.toUpperCase());

    // Verifica se o que o usuário digitou existe na lista
    const senhaValida = senhasNormalizadas.includes(input);

    if (senhaValida) {
        document.getElementById("desafio").classList.add("hidden");
        document.getElementById("sucesso").classList.remove("hidden");
        erro.textContent = "";
    } else {
        erro.textContent =
            "ERRO 404: Conexão Perdida. Você foi banido por 24h por não lembrar de seus amigos! Tente novamente.";
    }
}
