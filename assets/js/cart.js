$(document).ready(function () {
    var cartItems = $('#cart-items');
    var cartTotal = $('#cart-total');

    $('.add-to-cart-btn').click(function () {
        var productId = $(this).closest('.product').data('product-id');
        addToCart(productId);
    });

    $('.remove-from-cart-btn').click(function () {
        var productId = $(this).closest('.product').data('product-id');
        removeFromCart(productId);
    });

    function addToCart(productId) {
        $.ajax({
            type: 'POST',
            url: '/add-to-cart/' + productId + '/',
            success: function (data) {
                alert(data.message);
                updateCartUI(productId, true, data.quantity, data.total);
            }
        });
    }

    function removeFromCart(productId) {
        $.ajax({
            type: 'POST',
            url: '/remove-from-cart/' + productId + '/',
            success: function (data) {
                alert(data.message);
                updateCartUI(productId, false, data.quantity, data.total);
            }
        });
    }

    function updateCartUI(productId, inCart, quantity, total) {
        var product = $('.product[data-product-id="' + productId + '"]');
        var addToCartBtn = product.find('.add-to-cart-btn');
        var removeFromCartBtn = product.find('.remove-from-cart-btn');

        if (inCart) {
            addToCartBtn.hide();
            removeFromCartBtn.show();

            var existingCartItem = cartItems.find('li[data-product-id="' + productId + '"]');
            if (existingCartItem.length > 0) {
                var existingQuantity = parseInt(existingCartItem.data('quantity'));
                existingCartItem.data('quantity', existingQuantity + 1);
                existingCartItem.find('.quantity').text(existingQuantity + 1);
            } else {
                cartItems.append('<li data-product-id="' + productId + '">Product ' + productId + ' (<span class="quantity">1</span> item)</li>');
            }
        } else {
            addToCartBtn.show();
            removeFromCartBtn.hide();

            var existingCartItem = cartItems.find('li[data-product-id="' + productId + '"]');
            var existingQuantity = parseInt(existingCartItem.data('quantity'));

            if (existingQuantity > 1) {
                existingCartItem.data('quantity', existingQuantity - 1);
                existingCartItem.find('.quantity').text(existingQuantity - 1);
            } else {
                existingCartItem.remove();
            }
        }

        cartTotal.text(total.toFixed(2));
    }
});
