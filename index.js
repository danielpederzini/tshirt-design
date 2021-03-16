function show() {

    // Coloca a URL inserida no input dentro de uma variável de nome url
    var url = in_url.value

    // Esconde o texto que estava escrito do lado direito da tela
    images_text.style.display = "none"
    
    // Se o valor do select for "white", exibe uma imagem de uma camiseta branca, estampada com a imagem de scr=${url}
    if (sl_color.value == "white") {
        image_tshirt.innerHTML =
        `<img class="white_tshirt" src="img/white_tshirt.png">
        <img class="img_internet" src="${url}">`
    }

    // Se o valor do select for "black", exibe uma imagem de uma camiseta preta, estampada com a imagem de scr=${url}
    else if (sl_color.value == "black") {
        image_tshirt.innerHTML =
        `<img class="black_tshirt" src="img/black_tshirt.png">
        <img class="img_internet" src="${url}">`
    }
    
    // Se o valor do select for "blue", exibe uma imagem de uma camiseta azul, estampada com a imagem de scr=${url}
    else if (sl_color.value == "blue") {
        image_tshirt.innerHTML =
        `<img class="blue_tshirt" src="img/blue_tshirt.png">
        <img class="img_internet" src="${url}">`
    }

    // Se o valor do select for "red", exibe uma imagem de uma camiseta vermelha, estampada com a imagem de scr=${url}
    else if (sl_color.value == "red") {
        image_tshirt.innerHTML =
        `<img class="red_tshirt" src="img/red_tshirt.png">
        <img class="img_internet" src="${url}">`
    }
}
