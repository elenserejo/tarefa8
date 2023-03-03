function calcularIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const sexo = document.getElementById('sexo').value;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    let imagem;
    if (idade < 18) {
        if (sexo === 'M') {
            imagem = 'https://www.giantfreakinrobot.com/wp-content/uploads/2020/08/tomwelling23-900x721.jpg '; 
        } else {
            imagem = 'https://i.pinimg.com/280x280_RS/03/d1/69/03d16956cf0e8b410efbe410a653ddf8.jpg'; 
        }
    } else {
        if (sexo === 'M') {
            imagem = 'https://www.al.com/resizer/gVKR6k6AcWqiIkbjgrU4gABAceM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/scenesource/photo/sam-witwerjpg-d3ead4818c03b7d5.jpg'; 
        } else {
            imagem = 'https://s2.glbimg.com/WHIUhlUeK6sFJkLwGJEnUmC6uFw=/0x0:3523x2389/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/b/D/YlCuHAQSWtcbRP6BiGbg/000-1lm3ww.jpg'; 
    }

    document.getElementById('imagem').src = imagem;
}
}