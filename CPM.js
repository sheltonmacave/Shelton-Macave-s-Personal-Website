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
    var buttons = document.querySelectorAll(".SSb");

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
