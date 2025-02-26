// Função para desmarcar o checkbox, fechando o menu
    function fecharMenu() {
        document.getElementById("menu-toggle").checked = false;
    }
    function fecharMenuMobile() {
        document.getElementById("menu-toggle").checked = false;
    }

// JAVASCRIPT do REGISTRO CIVIL 

function toggleItem(element) {
    let item = element.parentElement;
    let conteudo = item.querySelector('.conteudo');

    if (item.classList.contains('ativo')) {
        conteudo.style.maxHeight = null;
        item.classList.remove('ativo');
    } else {
        // Fecha os outros itens abertos
        document.querySelectorAll('.item.ativo').forEach(outroItem => {
            outroItem.classList.remove('ativo');
            outroItem.querySelector('.conteudo').style.maxHeight = null;
        });

        // Expande o item clicado ajustando a altura real do conteúdo
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        item.classList.add('ativo');
    }
}


// 