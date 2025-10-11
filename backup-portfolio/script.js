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

// Background animado //

document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background-particles');
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    const navbar = document.querySelector('.navbar-module-header'); 

    let particles = [];
    const minDistance = 120;
    const lineDistance = 100;
    const baseLineOpacity = 0.6;
    const activeLineOpacity = 0.9;
    
    // Configurações específicas para desktop
    const desktopRepelDistance = 300;
    const desktopRepelForce = 30;
    const desktopNumParticles = 55; // Valor para desktop
    const desktopBaseSpeed = 0.5;

    // Configurações específicas para mobile
    const mobileRepelDistance = 200;
    const mobileRepelForce = 15;
    const mobileNumParticles = 25; // Valor para mobile
    const mobileBaseSpeed = 0.2;
    
    let mouseX = -1000;
    let mouseY = -1000;
    let isMouseOverNavbar = false;
    let isDesktop = window.innerWidth > 700;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        isDesktop = window.innerWidth > 700;
        reinitializeParticles();
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (navbar) {
        navbar.addEventListener('mouseenter', () => {
            isMouseOverNavbar = true;
            mouseX = -1000; 
            mouseY = -1000;
        });

        navbar.addEventListener('mouseleave', () => {
            isMouseOverNavbar = false;
        });
    }

    function createParticle(num) {
        const currentBaseSpeed = isDesktop ? desktopBaseSpeed : mobileBaseSpeed;
        
        for (let i = 0; i < num; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            const baseSpeedX = (Math.random() - 0.5) * currentBaseSpeed;
            const baseSpeedY = (Math.random() - 0.5) * currentBaseSpeed;
            background.appendChild(particle);

            particles.push({
                element: particle,
                x,
                y,
                speedX: baseSpeedX,
                speedY: baseSpeedY,
                baseSpeedX: baseSpeedX,
                baseSpeedY: baseSpeedY
            });
        }
    }

    function reinitializeParticles() {
        particles.forEach(p => p.element.remove());
        particles = [];
        const numToCreate = isDesktop ? desktopNumParticles : mobileNumParticles;
        createParticle(numToCreate);
    }
    
    reinitializeParticles();

    document.addEventListener('mousemove', (e) => {
        if (isMouseOverNavbar) return;
        
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        particles.forEach(p1 => {
            particles.forEach(p2 => {
                if (p1 === p2) return;

                const distP = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                if (distP < lineDistance) {
                    let opacity = baseLineOpacity * (1 - (distP / lineDistance));

                    const currentRepelDistance = isDesktop ? desktopRepelDistance : mobileRepelDistance;
                    const distMouseP1 = Math.hypot(mouseX - p1.x, mouseY - p1.y);
                    const distMouseP2 = Math.hypot(mouseX - p2.x, mouseY - p2.y);

                    if (distMouseP1 < currentRepelDistance || distMouseP2 < currentRepelDistance) {
                        const maxDist = Math.max(distMouseP1, distMouseP2);
                        const mouseInfluence = 1 - (maxDist / currentRepelDistance);
                        if (mouseInfluence > 0) {
                            opacity = Math.min(activeLineOpacity, opacity + mouseInfluence);
                        }
                    }

                    ctx.strokeStyle = `rgba(14, 246, 204, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                }
            });
        });
        ctx.stroke();

        particles.forEach(p => {
            const currentRepelDistance = isDesktop ? desktopRepelDistance : mobileRepelDistance;
            const currentRepelForce = isDesktop ? desktopRepelForce : mobileRepelForce;
            const distMouse = Math.hypot(mouseX - p.x, mouseY - p.y);

            if (distMouse < currentRepelDistance) {
                const angle = Math.atan2(p.y - mouseY, p.x - mouseX);
                const dynamicRepelForce = currentRepelForce * (1 - (distMouse / currentRepelDistance));

                const repelX = Math.cos(angle) * dynamicRepelForce;
                const repelY = Math.sin(angle) * dynamicRepelForce;

                p.speedX = p.baseSpeedX + repelX;
                p.speedY = p.baseSpeedY + repelY;
            } else {
                p.speedX = p.baseSpeedX;
                p.speedY = p.baseSpeedY;
            }

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            p.element.style.left = `${p.x}px`;
            p.element.style.top = `${p.y}px`;

            if (distMouse < minDistance) {
                if (!p.element.classList.contains('active')) {
                    p.element.classList.add('active');
                }
            } else {
                if (p.element.classList.contains('active')) {
                    p.element.classList.remove('active');
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
});