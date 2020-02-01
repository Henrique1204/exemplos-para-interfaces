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

function mudar_cor(ocasiao){

    if(ocasiao == 'em cima'){
        for(barra of barrinha){
            barra.style.backgroundColor = '#FF440D';
        };
        menu_sanduiche.style.color = '#FF440D';
    }else{
        for(barra of barrinha){
            barra.style.backgroundColor = '#DDEEFF';
        };
        menu_sanduiche.style.color = '#DDEEFF';
    };
};

function abrir_menu(){

    if(menu_sanduiche.innerHTML == 'X'){
        menu_sanduiche.innerHTML = '<div class="barrinha"></div><div class="barrinha"></div><div class="barrinha"></div>';
        menu[0].style.top = '-160px';
    }else{
        menu_sanduiche.innerHTML = 'X';
        menu[0].style.top = '84px';
    }
}

menu_sanduiche.onclick = abrir_menu;