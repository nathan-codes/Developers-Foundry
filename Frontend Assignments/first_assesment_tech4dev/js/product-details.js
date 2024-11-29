import { ProductService } from './products.js';

async function displayProductDetails() {
    const productService = new ProductService();
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    try {
        const product = await productService.getProductById(productId);
        const productDetailsContainer = document.getElementById('product-details');

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.style.width = '300px'; 

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;


        productDetailsContainer.appendChild(productTitle);
        productDetailsContainer.appendChild(productImage);
        productDetailsContainer.appendChild(productDescription);
        productDetailsContainer.appendChild(productPrice);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

displayProductDetails();
