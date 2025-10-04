document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------
    // 1. Lógica do Menu Hambúrguer (Novo)
    // ----------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    const menu = document.getElementById('menu');

    if (menuToggle && menuLinks && menu) {
        menuToggle.addEventListener('click', function() {
            // Alterna as classes para abrir/fechar o menu e mudar o ícone
            menuLinks.classList.toggle('active');
            menu.classList.toggle('menu-open');
        });

        // Opcional: Fechar o menu ao clicar em um link (navegação)
        const allMenuButtons = document.querySelectorAll('.menu-links .botaomenu');
        allMenuButtons.forEach(button => {
            button.addEventListener('click', () => {
                menuLinks.classList.remove('active');
                menu.classList.remove('menu-open');
            });
        });
    }

    // ----------------------------------------------
    // 2. Lógica do Swiper (Existente)
    // ----------------------------------------------
    const swiper = new Swiper('.swiper', {
        loop:true,
        grabCursor:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable:true
          },
          breakpoints: {
            // Mobile Padrão
            0: {
                slidesPerView: 1,
                spaceBetween: 18
            },
            // Telas médias
            768: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            // Desktop/Telas grandes
            1188: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          }
    });
});