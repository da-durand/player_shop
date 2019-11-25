
var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function () {

    for (let i = 0; i < subcatalog.length; i++) {

        // genération du catalogue
            $(".card-container").append('<div class="cards-' + i + ' col-12 col-md-6 col-lg-4">');
            $('.cards-' + i).append('<div class="card-body row">');
            $(".cards-" + i + " .card-body").append('<div class="col-12"> <a href="./product.html?product_id=' + i + '" class="text-decoration-none text-light"> </div>');
            $(".cards-" + i + " .card-body a").append('<img src="' + subcatalog[i].thumb + '" alt="" class="mw-100"></img>');
            $(".cards-" + i + " .card-body a").append('<h4>' + subcatalog[i].name + '</h4>');
            $(".cards-" + i + " .card-body").append('<div class="col-6">' + subcatalog[i].price + ' €</div>');
            $(".cards-" + i + " .card-body").append('<div class="col-6">' + subcatalog[i].quantity + ' en stock</div>');
            $(".cards-" + i + " .card-body").append('<div class="col-12"> <button> Ajouter au panier </button> </div>');

    }



})