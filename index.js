//add products
//manage products
//delete products

const products = [];




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

    //add product if fields are not empty
    if(pName.value && price.value && qntyInStock.value) {
        newProd = product(pName.value, price.value, qntyInStock.value)
        products.push(newProd)
        pName.value = price.value = qntyInStock.value = null;
        console.log(products)
    } else {
        window.prompt('Please fill all the fields.')
    }
}

//iterates through the properties of the objects
//in the products array
function displayProducts() {
    let main = document.querySelector('#products');
    let prod_container;
    
    //clear contents first
    main.textContent = ''
    
    let displayProductDataInContainer = function(i, prop,container) {  
        let content = document.createTextNode(`${prop}: ${products[i][prop]} `)
        container.appendChild(content)
        
        main.appendChild(container)
        console.log(`${products[i][prop]}`)
    }

    for (let i = 0; i < products.length; i++) {
        prod_container = document.createElement('div')
        
        for (let prop in products[i]) {
            displayProductDataInContainer(i, prop, prod_container)
        }
    }
}

//loop throuh the array
//the loop creates a div for each item in the array
//in that div, the data from the object are displayed 
