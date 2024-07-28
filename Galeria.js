/*function ScrollarBN() {
    const bn = document.querySelector('#BN');
    const verificador = bn.getBoundingClientRect().top;

    let posicao = window.innerHeight/1;

    if (verificador < posicao) {
        bn.classList.add('Scrolled');
    } else {
        bn.classList.remove('Scrolled');
    }
}

window.addEventListener('scroll', ScrollarBN);
ScrollarBN();*/

document.addEventListener("DOMContentLoaded", function () {
    // Obtenha todos os botões
    var buttons = document.querySelectorAll(".GPnbiB");

    // Adicione um ouvinte de clique a cada botão
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remova a classe 'active' de todos os botões
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            
            // Adicione a classe 'active' apenas ao botão clicado
            button.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Obtenha todos os botões
    var buttons = document.querySelectorAll(".GPnbiBCC");

    // Adicione um ouvinte de clique a cada botão
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remova a classe 'active' de todos os botões
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            
            // Adicione a classe 'active' apenas ao botão clicado
            button.classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById("BNitens2");
    const botao = document.querySelector("#BNbotao");

    let isNavbarOpen = false;

    // Evento para abrir/fechar o dropdown ao clicar no botão
    botao.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o evento de clique se propague para o documento
        isNavbarOpen = !isNavbarOpen;

        if (isNavbarOpen) {
            navbar.style.display = "block";
            botao.innerHTML = '<i class="fa-solid fa-chevron-up fa-2xl" style="color: #ffffff;"></i>';
        } else {
            navbar.style.display = "none";
            botao.innerHTML = '<i class="fa-solid fa-chevron-down fa-2xl" style="color: #ffffff;"></i>';
        }
    });

    // Evento para fechar o dropdown ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (isNavbarOpen && !navbar.contains(event.target) && event.target !== botao) {
            navbar.style.display = "none";
            botao.innerHTML = '<i class="fa-solid fa-chevron-down fa-2xl" style="color: #ffffff;"></i>';
            isNavbarOpen = false; // Atualiza o estado para refletir que o navbar está fechado
        }
    });
});


let num1 = 0;
function mostrarnavbar() {
    const navbar = document.getElementById("BNitens2");
    const botao = document.querySelector("#BNbotao")
    const ddm2 = document.querySelector("#dropdown-menu2");
    // Se a barra de navegação estiver visível, oculta; se estiver oculta, mostra
    if (num1 === 0) {
        num1 = 1;
        navbar.style.display = "flex";
        botao.innerHTML = '<i class="fa-solid fa-chevron-up fa-2xl" style="color: #ffffff;"></i>';
    } else {
        num1 = 0;
        navbar.style.display = "none";
        botao.innerHTML = '<i class="fa-solid fa-chevron-down fa-2xl" style="color: #ffffff;"></i>';
    }
}
