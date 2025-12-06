let tentativasRestantes = 3;

function verificarCodigo() {
    const senhasCorretas = [
        "resident",
        "resident evil",
        "resident evil 4",
        "residentevil",
        "residentevil4",
        "re4",
        "leon",
        "leon kennedy",
        "ashley",
        "las plagas"
    ];

    const campo = document.getElementById("codigo");
    const resposta = campo.value.trim().toUpperCase();
    const erro = document.getElementById("erroMsg");

    const listaNormalizada = senhasCorretas.map(s => s.toUpperCase());
    const correto = listaNormalizada.includes(resposta);

    if (correto) {
        // Redireciona para a nova página
        window.location.href = "voucher.html";
        return;
    }

    // ERROU
    tentativasRestantes--;

    if (tentativasRestantes > 0) {
        erro.textContent = `⚠ Senha incorreta! Restam ${tentativasRestantes} tentativa(s).`;
    } else {
        erro.textContent = "❌ Todas as tentativas foram usadas! Acesso bloqueado.";
        campo.disabled = true;
    }
}
