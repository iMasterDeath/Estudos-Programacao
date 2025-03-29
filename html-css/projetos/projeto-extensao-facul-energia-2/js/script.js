// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (mainNav.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Lazy loading para imagens
    if ('loading' in HTMLImageElement.prototype) {
        // Navegadores que suportam lazy loading nativo
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback para navegadores antigos
        const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            lazyLoadObserver.observe(img);
        });
    }
});

// Calculadora de Energia Solar (calculadora.js)
document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcular');
    
    if (calcularBtn) {
        calcularBtn.addEventListener('click', function() {
            const consumo = parseFloat(document.getElementById('consumo').value);
            const valorConta = parseFloat(document.getElementById('valor-conta').value);
            
            if (isNaN(consumo) || isNaN(valorConta)) {
                alert('Por favor, preencha todos os campos corretamente.');
                return;
            }
            
            // Cálculos (valores aproximados)
            const sistemaRecomendado = Math.ceil(consumo / 30) * 0.5; // kWp
            const investimento = sistemaRecomendado * 5000; // R$ 5.000 por kWp
            const economiaMensal = valorConta * 0.85; // 85% de economia
            const payback = Math.ceil(investimento / (economiaMensal * 12)); // Anos
            
            // Atualizar resultados
            document.getElementById('sistema-recomendado').textContent = `${sistemaRecomendado} kWp`;
            document.getElementById('investimento').textContent = `R$ ${investimento.toLocaleString('pt-BR')}`;
            document.getElementById('economia-mensal').textContent = `R$ ${economiaMensal.toFixed(2)}`;
            document.getElementById('payback').textContent = `${payback} anos`;
        });
    }
});

// Formulário de Contato (form.js)
document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (!nome || !email || !telefone || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Simular envio
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formContato.reset();
        });
    }
});