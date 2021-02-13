$(document).ready(function() {
    var products = LoadProducts();

    $('#btnAdd').click(function(event){
        event.preventDefault();
        var product = $('#product').val();

        if(product != ''){
            products.push(product);
            $('#product').val('');
            localStorage.setItem('ProductsList', JSON.stringify(products));
            LoadProducts();
        }
    })

    $('#btnRemove').click(function(){
        if(confirm('Are you sure that you want to remove all products?')){
            localStorage.clear();
            products = [];

            $('#productManager').css('visibility', 'hidden');
            ClearPage();
        }
    })
})

function LoadProducts(){
    ClearPage();

    var products = JSON.parse(localStorage.getItem('ProductsList'));

    if(products == null){
        products = [];
        $('#productManager').css('visibility', 'hidden');
    }else{
        $('#productManager').css('visibility', 'visible');
    }

    $('#txtNumber').empty();
    $('#txtNumber').append(products.length);

    $(products).each(function(){
        $('#ulProducts').append('<li>' + this + '</li>');
    })

    return products
}

function ClearPage(){
    $('#ulProducts').empty();
    $('#txtNumber').append('');
}