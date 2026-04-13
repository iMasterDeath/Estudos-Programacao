// --- 1. SIMULAÇÃO DO BANCO DE DADOS DE NOTÍCIAS ---
// Note que removi a linha "imagem". Agora é só texto.
const noticiasDB = [
    {
        categoria: "Saúde",
        titulo: "Vacinação contra a Gripe na UBS Pirapó",
        resumo: "Idosos acima de 60 anos já podem procurar a unidade. Levar carteirinha e documento.",
        link: "http://www.apucarana.pr.gov.br/site/category/saude/"
    },
    {
        categoria: "Prefeitura",
        titulo: "Mutirão de Limpeza no Bairro",
        resumo: "Caminhões da prefeitura passarão recolhendo entulhos na próxima terça-feira.",
        link: "http://www.apucarana.pr.gov.br"
    },
    {
        categoria: "Saúde",
        titulo: "Novo médico Cardiologista",
        resumo: "A partir do dia 15, a Autarquia disponibilizará especialista quinzenalmente.",
        link: "http://www.apucarana.pr.gov.br"
    },
    {
        categoria: "Educação",
        titulo: "Reforma na Escola Municipal",
        resumo: "Prefeito visita obras de ampliação das salas de aula no distrito.",
        link: "http://www.apucarana.pr.gov.br"
    }
];

// --- 2. FUNÇÃO QUE CARREGA AS NOTÍCIAS NA TELA ---
function carregarNoticias() {
    const container = document.getElementById("feed-noticias");
    let htmlContent = "";

    noticiasDB.forEach(noticia => {
        let badgeClass = noticia.categoria === "Saúde" ? "badge-saude" : "badge-prefeitura";
        let borderClass = noticia.categoria === "Saúde" ? "border-danger" : "border-primary"; // Borda colorida

        // HTML mais limpo, sem tag <img>
        htmlContent += `
            <div class="col-md-6">
                <div class="news-card" style="border-left-color: ${noticia.categoria === 'Saúde' ? '#d63384' : '#0056b3'}">
                    <div>
                        <span class="news-badge ${badgeClass}">${noticia.categoria}</span>
                        <h3 class="news-title">${noticia.titulo}</h3>
                        <p class="news-excerpt">${noticia.resumo}</p>
                    </div>
                    <a href="${noticia.link}" target="_blank" class="btn btn-sm btn-outline-dark btn-ler-mais">
                        Ler Completo <i class="fas fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// --- 3. FUNÇÃO DE BUSCA DA TABELA DE LIXO ---
document.getElementById("buscaBairro").addEventListener("keyup", function() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("buscaBairro");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaColeta");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
});

// --- 4. ACESSIBILIDADE ---
document.getElementById("btnContraste").addEventListener("click", function() {
    document.body.classList.toggle("alto-contraste");
});

window.onload = carregarNoticias;