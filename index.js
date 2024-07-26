//add products
//manage products
//delete products

const products = [];




function addProduct() {
    let pName = document.querySelector('#pName');
    let price = document.querySelector('#pPrice');
    let qntyInStock = document.querySelector('#pInStock');
    let newProd;

    function product(name, price, qntyInStock) {
        return {
            name,
            price, 
            qntyInStock
        }
    }

    //logic of adding product
    if(pName.value && price.value && qntyInStock.value) {
        newProd = product(pName.value, price.value, qntyInStock.value)
        products.push(newProd)
        console.log(products)
    } else {
        window.prompt('Please fill all the fields.')
    }
}

function viewProducts() {
    for(let key in products) {
        console.log(key + " " + products[key])
    }
}