const swiper = new Swiper('.mySwiper', {
    // Parâmetros opcionais
    loop: true,
    speed: 600, // Velocidade da transição em milissegundos

    // Configuração das setas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Permite usar as setas do teclado para navegar
    keyboard: {
        enabled: true,
    },

    // Ajustes para celular
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});



// Objeto global para armazenar os índices de cada carrossel de forma independente
const carrosselIndices = new Map();

function mover(direcao, idTrilho) {
    // 1. Identifica todos os elementos com o ID 'trilho'
    const todosOsTrilhos = document.querySelectorAll(`#${idTrilho}`);
    
    // 2. Descobre qual trilho foi clicado baseando-se no botão que chamou a função
    // Usamos o 'event' para encontrar o elemento pai correto
    const botaoClicado = event.currentTarget;
    const trilhoAtivo = botaoClicado.closest('.trilho-planos');
    
    // 3. Inicializa o índice para este trilho específico se ele ainda não existir
    if (!carrosselIndices.has(trilhoAtivo)) {
        carrosselIndices.set(trilhoAtivo, 0);
    }

    let indiceAtual = carrosselIndices.get(trilhoAtivo);
    const cards = trilhoAtivo.querySelectorAll('.card-plano');

    // 4. Calcula o novo índice com a lógica de loop (volta ao início ou fim)
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = cards.length - 1;
    } else if (indiceAtual >= cards.length) {
        indiceAtual = 0;
    }

    // 5. Salva o novo índice e aplica a transformação visual apenas no trilho ativo
    carrosselIndices.set(trilhoAtivo, indiceAtual);
    const deslocamento = indiceAtual * -100;
    trilhoAtivo.style.transform = `translateX(${deslocamento}%)`;
}