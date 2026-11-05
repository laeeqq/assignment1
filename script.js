// Import the data from the JSON file
import config from './data-minifed.json' with { type: 'json' };
 
// Define the product limit
const PRODUCT_LIMIT = 20;
const products = config.products.slice(0, PRODUCT_LIMIT);

// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function(){
    const results = document.querySelector("#results");

    for(let p of products){
        results.appendChild(createProductCard(p));
    }

    results.addEventListener("click", handleClick);
});

// Create a product card function
function createProductCard(product){
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-id", product.id); // Set the data-id attribute to the product id


    const img = document.createElement("img");
    img.setAttribute("src", product.thumbnail);
    img.setAttribute("alt", product.title);
    img.setAttribute("data-id", product.id);

    const title = document.createElement("h2");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    const button = document.createElement("button");
    button.textContent = "+";
    button.setAttribute("data-id", product.id);
    button.setAttribute("data-title", product.title); 
    

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}
 // handle click event
function handleClick(event){
    const id = event.target.getAttribute("data-id");

    if(event.target.nodeName === "IMG"){
        alert("Product ID: " + id);
    } else if(event.target.nodeName === "BUTTON"){
        //button was clicked. look up product to get the title
        const title = event.target.getAttribute("data-title");
        alert("Product ID: " + id + " - " + title);
    }
}
