const logoMarca = document.querySelector('.logo_marca');
const menu_sanduiche = document.querySelector('.menu_sanduiche');
const barrinha = document.getElementsByClassName('barrinha');
const menu = document.getElementsByClassName('menu_links');

function mudar_imagem(ocasiao){
    
    if(ocasiao == 'em cima'){
        logoMarca.src= 'logo.svg';
    }else{
        logoMarca.src= 'logo_claro.svg';
    };
};

function abrir_menu(){

    if(menu_sanduiche.innerHTML == 'X'){
        menu_sanduiche.innerHTML = '<div class="barrinha"></div><div class="barrinha"></div><div class="barrinha"></div>';
        menu[0].style.top = '-160px';
        menu[0].style.opacity = '0';
    }else{
        menu_sanduiche.innerHTML = 'X';
        menu[0].style.top = '84px';
        menu[0].style.opacity = '1';
    }
}

menu_sanduiche.onclick = abrir_menu;