let products = [];

document.addEventListener('DOMContentLoaded', () => {
    refreshFeed();
})

function getProducts() {
    return products = JSON.parse(localStorage.getItem('products')) || [];
}

function refreshFeed() {
    products = getProducts();
    console.log(products)
    if(!products) return;

    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    products.forEach(el => {
        let productCard = document.createElement('div');
        productCard.innerHTML = `
            <div>${el.name}</div>
            <div>${el.price}</div>
            <div>Available: ${el.quantity}</div>
        `
        container.appendChild(productCard)
    })
}