function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    
    msg.innerHTML = `agora são ${hora} horas!`
    if(hora >= 0 && hora < 12){
// bom dia
    img.src = 'imagens/fotomanha.png'
    document.body.style.background = '#DCDDE1'
    }
    else if(hora >= 12 && hora <= 18){
// boa tarde
    img.src = 'imagens/fototarde.png'
    document.body.style.background = '#E4A768'
    }
    else{
        // boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#151A32'
    }

    
}

