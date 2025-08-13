// Seleciona todas as seções que queremos animar
const sections = document.querySelectorAll('section');

// Configura o "observador"
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Se a seção está na tela (visível)
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% da seção estiver visível
});

// Pede ao observador para "observar" cada seção
sections.forEach(section => {
    observer.observe(section);
});