// -----------------------------
// CONFIGURAÇÃO DAS TENTATIVAS
// -----------------------------
let tentativasRestantes = 3; // <-- AQUI você controla quantas tentativas terá
const maxTentativas = 3;     // Apenas para referência se quiser usar depois
// -----------------------------

function verificarCodigo() {
    // Lista de senhas válidas
    const senhasCorretas = [
        "evil",
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
    const botao = document.getElementById("btnEnviar");
    const campo = document.getElementById("codigo");

    // Normaliza as senhas do array
    const senhasNormalizadas = senhasCorretas.map(s => s.toUpperCase());

    // Verifica se acertou
    const senhaValida = senhasNormalizadas.includes(input);

    if (senhaValida) {
        document.getElementById("desafio").classList.add("hidden");
        document.getElementById("sucesso").classList.remove("hidden");
        erro.textContent = "";
        return;
    }

    // Se errou:
    tentativasRestantes--;

    // Se ainda tem tentativas
    if (tentativasRestantes > 0) {
        erro.textContent = `⚠ Senha incorreta! Você ainda tem ${tentativasRestantes} tentativa(s).`;
        return;
    }

    // Se acabou as tentativas → BLOQUEIA GERAL
    erro.textContent = "❌ Acesso BLOQUEADO! Você usou todas as tentativas.";
    campo.disabled = true;
    botao.disabled = true;
    botao.style.opacity = "0.5";
    botao.style.cursor = "not-allowed";
}
