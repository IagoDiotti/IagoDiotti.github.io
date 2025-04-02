// script.js

// Adiciona um efeito sutil ao carregar a página (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.profile-card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        // Animação de fade-in e slide-up
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100); // Pequeno atraso para garantir que a transição funcione
    }

    console.log("Página de apresentação carregada!");
    // Você pode adicionar mais interatividade aqui se desejar.
    // Exemplo: Mudar algo ao clicar em um link, etc.
});

// Exemplo de como adicionar um evento a um link (opcional)
// const githubLink = document.querySelector('a[href*="github.com"]');
// if (githubLink) {
//     githubLink.addEventListener('click', () => {
//         console.log('Link do GitHub clicado!');
//         // Adicione aqui qualquer ação extra que desejar
//     });
// }
