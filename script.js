document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});

    // Função para abrir e fechar o menu ao clicar no ícone de hambúrguer
    const hamburger = document.getElementById('hamburger');
    const menuLinks = document.getElementById('menuLinks');

    hamburger.addEventListener('click', () => {
      menuLinks.classList.toggle('active');
    });