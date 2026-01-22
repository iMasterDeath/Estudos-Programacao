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