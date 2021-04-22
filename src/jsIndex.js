function clicar(){
    x = window.screen.width;
    y = window.screen.height;

    if((x > 760) && (x < 1099)){
        document.getElementById('imagem-none--second').style.display = 'block';
        document.getElementById('imagem-none--second').style.margin = '-18.4rem 0 0 0.4rem';

        document.getElementById('imagem-none--third').style.display = 'block';
        document.getElementById('imagem-none--third').style.margin = '-18.1rem 0 0 16rem';

        document.getElementById('imagem-none--fourth').style.display = 'block';
        document.getElementById('imagem-none--fourth').style.margin = '-18.12rem 0 0 31.5rem';
    }

    else if(x > 1100){
        document.getElementById('imagem-none--fourth').style.display = 'block';
        document.getElementById('imagem-none--fourth').style.margin = '-12.8rem 0 0 0.4rem';

        document.getElementById('imagem-none--fifth').style.display = 'block';
        document.getElementById('imagem-none--fifth').style.margin = '-12.5rem 0 0 10.49rem';

        document.getElementById('imagem-none--sixth').style.display = 'block';
        document.getElementById('imagem-none--sixth').style.margin = '-12.5rem 0 0 20.5rem';

        document.getElementById('imagem-none--seventh').style.display = 'block';
        document.getElementById('imagem-none--seventh').style.margin = '-12.5rem 0 0 30.5rem';
    }

    else{
        let el = document.getElementById('imagem-none--first');
        el.style.display = 'block';
        el.style.margin = '-12.5rem 0 0 0.4rem';

        document.getElementById('imagem-none--second').style.display = 'block';
        document.getElementById('imagem-none--second').style.margin = '-12.2rem 0 0 11.7rem';
    }
}

function voltar(){
    x = window.screen.width;
    y = window.screen.height;

    if ((x > 760) && (x < 1099)){
        document.getElementById('imagem-none--second').style.display = 'none';
        document.getElementById('imagem-none--third').style.display = 'none';
        document.getElementById('imagem-none--fourth').style.display = 'none';
    }

    else if(x > 1100){
        document.getElementById('imagem-none--fourth').style.display = 'none';
        document.getElementById('imagem-none--fifth').style.display = 'none';
        document.getElementById('imagem-none--sixth').style.display = 'none';
        document.getElementById('imagem-none--seventh').style.display = 'none';
    }

    else{
        let el = document.getElementById('imagem-none--first')
        el.style.display = 'none';

        document.getElementById('imagem-none--second').style.display = 'none';
    }
}

function clicarSecond(){
    x = window.screen.width;
    y = window.screen.height;

    if((x > 760) && (x < 1099)){
        document.getElementById('imagem-none--second2').style.display = 'block';
        document.getElementById('imagem-none--second2').style.margin = '-18.4rem 0 0 0.4rem';

        document.getElementById('imagem-none--third2').style.display = 'block';
        document.getElementById('imagem-none--third2').style.margin = '-18.1rem 0 0 16rem';

        document.getElementById('imagem-none--fourth2').style.display = 'block';
        document.getElementById('imagem-none--fourth2').style.margin = '-18.12rem 0 0 31.5rem';
    }

    else if(x > 1100){
        document.getElementById('imagem-none--fourth2').style.display = 'block';
        document.getElementById('imagem-none--fourth2').style.margin = '-12.8rem 0 0 0.4rem';

        document.getElementById('imagem-none--fifth2').style.display = 'block';
        document.getElementById('imagem-none--fifth2').style.margin = '-12.5rem 0 0 10.49rem';

        document.getElementById('imagem-none--sixth2').style.display = 'block';
        document.getElementById('imagem-none--sixth2').style.margin = '-12.5rem 0 0 20.5rem';

        document.getElementById('imagem-none--seventh2').style.display = 'block';
        document.getElementById('imagem-none--seventh2').style.margin = '-12.5rem 0 0 30.5rem';    
    }

    else{
        let el = document.getElementById('imagem-none--first2');
        el.style.display = 'block';
        el.style.margin = '-12.5rem 0 0 0.4rem';

        document.getElementById('imagem-none--second2').style.display = 'block';
        document.getElementById('imagem-none--second2').style.margin = '-12.2rem 0 0 11.7rem';
    }
}

function voltarSecond(){
    x = window.screen.width;
    y = window.screen.height;

    if ((x > 760) && (x < 1099)){
        document.getElementById('imagem-none--second2').style.display = 'none';
        document.getElementById('imagem-none--third2').style.display = 'none';
        document.getElementById('imagem-none--fourth2').style.display = 'none';
    }

    else if(x > 1100){
        document.getElementById('imagem-none--fourth2').style.display = 'none';
        document.getElementById('imagem-none--fifth2').style.display = 'none';
        document.getElementById('imagem-none--sixth2').style.display = 'none';
        document.getElementById('imagem-none--seventh2').style.display = 'none';
    }

    else{
        let el = document.getElementById('imagem-none--first2');
        el.style.display = 'none';

        document.getElementById('imagem-none--second2').style.display = 'none';
    }
}

function container(){
    x = window.screen.width;
    y = window.screen.height;

    if ((x > 760) && (x < 1099)){
        let el = document.getElementById('container__hidden');
        el.style.display = 'block';
        el.style.margin = '-64rem 0 0 0';

        document.getElementsByClassName("container__second--firstContent")[0].style.display = 'none'; 
    }

    else if(x > 1100){
        let el = document.getElementById('container__hidden');
        el.style.display = 'block'; 
        el.style.margin = '-40rem 0 0 0';
    }

    else{
        let el = document.getElementById('container__hidden');
        el.style.display = 'block';
        el.style.margin = '-51rem 0 0 0';

        document.getElementsByClassName("container__second--firstContent")[0].style.display = 'none'; 
    } 
}

function clicarExit(){
    let el = document.getElementById('container__hidden');
    
    el.style.display = 'none';

    document.getElementsByClassName("container__second--firstContent")[0].style.display = 'block'; 
}