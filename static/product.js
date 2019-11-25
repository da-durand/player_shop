var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

$(document).ready(function () {

    var product = catalog[GET_PARAM("product_id")];
    $("h2").append(product.name);
    $(".product-img").attr("src", product.thumb);
    $(".game-description").append(product.description);
    for (let i = 0; i < product.pictures.length; i++) {

        if (i == 0) {
            $(".carousel-inner").append('<div class="carousel-item active">');
        }
        else {
            $(".carousel-inner").append('<div class="carousel-item">');
        }
        $(".carousel-inner .carousel-item:eq(" + i + ")").append('<img src="' + product.pictures[i] + '" class="d-block w-100" alt="...">')
    }

    $(".price").append(product.price + " €")
    $(".stock").append(product.quantity)
    var nbCart = 0;
    $(".nb-cart").append(nbCart);
 
})
