function carregarVariavel(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = (`<strong>Agora são ${hora} horas</strong>`)
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = './Assets/manha.jpg';
        document.body.style.backgroundColor = "#0fecf869";
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = './Assets/tarde.jpg';
        document.body.style.backgroundColor = "#99610cc2";
    } else {
        // Boa noite
        img.src = './Assets/noite.jpg';
        document.body.style.backgroundColor = "#211e82c2";
    }
}

