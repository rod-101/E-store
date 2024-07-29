//add products
//manage products
//delete products

const products = [];



//add the product being created to the 'products' array
function addProduct() {
    let pName = document.querySelector('#pName');
    let price = document.querySelector('#pPrice');
    let qntyInStock = document.querySelector('#pInStock');
    let newProd;

    function product(name, price,   stock) {
        return {
            name,
            price, 
            stock
        }
    }

    //add product works only if fields are not empty   
    if(pName.value && price.value && qntyInStock.value) {
        newProd = product(pName.value, price.value, qntyInStock.value)
        products.push(newProd)
        pName.value = price.value = qntyInStock.value = null;
        console.log(products)
    } else {
        window.prompt('Please fill all the fields.')
    }
}



//display object data (i.e. name, price, stock) from 'products' array on screen
function displayProducts() {
    let main = document.querySelector('#products');
    let prod_container;
    main.textContent = ''
    
    //displays data (i.e. name, price, stock) in a certain format/style
    let displayProductDataInContainer = function(i, prop,container) {  
        let content = document.createTextNode(`${prop}: ${products[i][prop]} `)

        container.appendChild(content)
        main.appendChild(container)
        console.log(`${products[i][prop]}`) //for debugging
    }

    //creates container (div) for each object's data to be stored in
    for (let i = 0; i < products.length; i++) {
        prod_container = document.createElement('div')
        
        for (let prop in products[i]) {
            displayProductDataInContainer(i, prop, prod_container)
        }
    }
}