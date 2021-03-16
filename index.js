function show() {

    var url = in_url.value

    images_text.style.display = "none"
    if (sl_color.value == "white") {
        image_tshirt.innerHTML =
        `<img class="white_tshirt" src="img/white_tshirt.png">
        <img class="img_internet" src="${url}">`
    }

    else if (sl_color.value == "black") {
        image_tshirt.innerHTML =
        `<img class="black_tshirt" src="img/black_tshirt.png">
        <img class="img_internet" src="${url}">`
    }
    
    else if (sl_color.value == "blue") {
        image_tshirt.innerHTML =
        `<img class="blue_tshirt" src="img/blue_tshirt.png">
        <img class="img_internet" src="${url}">`
    }

    else if (sl_color.value == "red") {
        image_tshirt.innerHTML =
        `<img class="red_tshirt" src="img/red_tshirt.png">
        <img class="img_internet" src="${url}">`
    }
}