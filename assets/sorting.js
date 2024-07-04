document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('product-sort');
    const productContainer = document.querySelector('.product-container');
    const products = Array.from(document.querySelectorAll('.ppb-product'));

    sortSelect.addEventListener('change', function() {
        const sortValue = sortSelect.value;
        let sortedProducts = [];

        switch (sortValue) {
            case 'price':
                sortedProducts = products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
                break;
            case 'price-desc':
                sortedProducts = products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
                break;
            case 'rating':
                sortedProducts = products.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
                break;
            case 'popularity':
                sortedProducts = products.sort((a, b) => parseInt(b.dataset.sales) - parseInt(a.dataset.sales));
                break;
            case 'date':
            default:
                sortedProducts = products.sort((a, b) => parseInt(b.dataset.date) - parseInt(a.dataset.date));
                break;
        }

        productContainer.innerHTML = '';
        sortedProducts.forEach(product => productContainer.appendChild(product));
    });
});
