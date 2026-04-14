const botaoHamburguer = document.querySelector('#btn-hamburguer');
const menuNavegacao = document.querySelector('#menu-nav');

botaoHamburguer.addEventListener('click', function() {
    
    menuNavegacao.classList.toggle('ativo');
    
});