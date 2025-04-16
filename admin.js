let products = [];

document.addEventListener('DOMContentLoaded', () => {
    updateTable();
})

function addProduct() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    products = getProducts();

    if(name && price && quantity) {
        products.push({name, price, quantity});  
        console.log(products);
        document.querySelectorAll("#name, #price, #quantity").forEach(el => el.value = '');
        
        setProducts();
        updateTable(); 
    } else {
        alert('Cannot have empty fields.')
    }
}

function setProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function getProducts() {
    return products = JSON.parse(localStorage.getItem('products')) || [];
}

function updateTable() {
    products = getProducts();
    if(!products) return; //return if array is non-existent or empty

    const tbody = document.querySelector('#adminTable tbody');
    tbody.innerHTML = '';
    

    products.forEach(item => {
        let row = document.createElement('tr')
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
        `
        tbody.appendChild(row)
    })
}