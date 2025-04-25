   // Função para desmarcar o checkbox, fechando o menu
   function fecharMenu() {
    document.getElementById("menu-toggle").checked = false;
}
function fecharMenuMobile() {
    document.getElementById("menu-toggle").checked = false;
}
// Funcao para abrir o curriculum 
function openModal() {
  document.getElementById("curriculo-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("curriculo-modal").style.display = "none";
}


// ----------------------------------------------------------------------

// Função para criar bolhas pequenas
function criarBolhas() {
    const containerBolhas = document.querySelector('.bolhas');
    const numeroDeBolhas = 100; // Número de bolhas que irão se mover pela tela

    // Limpar as bolhas existentes antes de adicionar novas
    containerBolhas.innerHTML = '';

    for (let i = 0; i < numeroDeBolhas; i++) {
        const bolha = document.createElement('span');
        
        // Atribuindo uma variável de índice único para a bolha
        bolha.style.setProperty('--i', i);
        
        // Posição aleatória na tela
        const posX = Math.random() * 1; // Posição aleatória na horizontal (0 a 100%)
        const posY = Math.random() * 100; // Posição aleatória na vertical (0 a 100%)
        
        bolha.style.left = `${posX}%`;
        bolha.style.top = `${posY}%`;

        // Adicionando o elemento span dentro do container de bolhas
        containerBolhas.appendChild(bolha);
    }
}

// Chama a função para criar as bolhas assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', criarBolhas);

// ---------------------------------------------------------------------

// funcao para mostrar os cards (responsividade)

