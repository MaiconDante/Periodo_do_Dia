function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = (`<strong>Agora está dentro de ${hora} horas</strong>`)
    if (hora >= 0 && hora < 12) {
        // Período Matutino
        img.src = './Assets/manha.jpg';
        document.body.style.backgroundColor = "#13a1f2";
    } else if (hora >= 12 && hora < 18){
        // Período Vespertino
        img.src = './Assets/tarde.jpg';
        document.body.style.backgroundColor = "#b5711d";
    } else {
        // Período Noturno
        img.src = './Assets/noite.jpg';
        document.body.style.backgroundColor = "#03389c";
    }
}

