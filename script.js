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
});

// Create a product card function
function createProductCard(product){
    const card = document.createElement("div");
    card.setAttribute("data-id", product.id); // Set the data-id attribute to the product id


    const img = document.createElement("img");
    img.setAttribute("src", product.thumbnail);
    img.setAttribute("alt", product.title);
    
  

    


}