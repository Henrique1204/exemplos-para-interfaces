const logoMarca = document.querySelector('.logo_marca');

function mudar_imagem(ocasiao){
    
    if(ocasiao == 'em cima'){
        logoMarca.src= 'logo.svg';
    }else{
        logoMarca.src= 'logo_claro.svg';
    };
};