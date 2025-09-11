document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background-particles');
    const numParticles = 80; // Número reduzido de partículas para otimização
    let particles = [];
    const minDistance = 100; // Distância para a "interação"

    // Cria as partículas
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        // Velocidade e direção aleatórias para animação
        particle.speedX = (Math.random() - 0.5) * 0.2; // Velocidade bem baixa
        particle.speedY = (Math.random() - 0.5) * 0.2;
        background.appendChild(particle);
        particles.push(particle);
    }

    let mouseX = -1000;
    let mouseY = -1000;

    // Atualiza a posição do mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Função de animação otimizada
    function animateParticles() {
        requestAnimationFrame(animateParticles);

        particles.forEach(particle => {
            // Atualiza a posição da partícula
            let currentLeft = parseFloat(particle.style.left) / 100 * window.innerWidth;
            let currentTop = parseFloat(particle.style.top) / 100 * window.innerHeight;

            currentLeft += particle.speedX;
            currentTop += particle.speedY;

            // Retorna a partícula se sair da tela
            if (currentLeft < 0) currentLeft = window.innerWidth;
            if (currentLeft > window.innerWidth) currentLeft = 0;
            if (currentTop < 0) currentTop = window.innerHeight;
            if (currentTop > window.innerHeight) currentTop = 0;

            particle.style.left = `${currentLeft / window.innerWidth * 100}%`;
            particle.style.top = `${currentTop / window.innerHeight * 100}%`;

            // Verifica a distância do mouse para ativar a interação
            const distance = Math.hypot(mouseX - currentLeft, mouseY - currentTop);

            if (distance < minDistance) {
                if (!particle.classList.contains('active')) {
                    particle.classList.add('active');
                }
            } else {
                if (particle.classList.contains('active')) {
                    particle.classList.remove('active');
                }
            }
        });
    }

    animateParticles();
});