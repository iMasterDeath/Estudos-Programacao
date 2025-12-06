let tentativasRestantes = 3; // Número máximo de tentativas

function verificarCodigo() {
    // Lista de senhas válidas
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

    const input = document.getElementById("codigo").value.trim().toUpperCase();
    const erro = document.getElementById("erroMsg");

    // Normaliza todas as senhas
    const senhasNormalizadas = senhasCorretas.map(s => s.toUpperCase());

    // Verifica se está correto
    const senhaValida = senhasNormalizadas.includes(input);

    // Caso acertar
    if (senhaValida) {
        document.getElementById("desafio").classList.add("hidden");
        document.getElementById("sucesso").classList.remove("hidden");
        erro.textContent = "";
        return;
    }

    // Caso erre
    tentativasRestantes--;

    if (tentativasRestantes > 0) {
        erro.textContent =
            `⚠ Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`;
    } else {
        erro.textContent =
            "❌ Acesso bloqueado! Você usou todas as tentativas. Contate um administrador.";
        document.getElementById("codigo").disabled = true;
    }
}
