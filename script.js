import config from './data-minifed.json' with { type: 'json' };
 
const PRODUCT_LIMIT = 20;


document.addEventListener("DOMContentLoaded", function(){
    const results = document.querySelector("#results");

    for(let p of products){
        results.appendChild(createProductCard(p));
    }
});


function createProductCard(product){
    const card = document.createElement("div");

}