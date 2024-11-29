
import { Product, ProductService } from './products.js';

async function displayProducts() {
  const productService = new ProductService();
  try {
    const products = await productService.getProducts();
    console.log(products); 

    const cardGroup = document.getElementById("card_group");
    cardGroup.innerHTML = ""; 

    products.forEach(productData => {
      const product = new Product(
        productData.id,
        productData.title,
        productData.description,
        productData.price,
        productData.category,
        productData.image,
        productData.rating
      );

      const card = document.createElement("article");
      card.className = "card";
      card.style.borderRadius = "13px";
      card.style.overflow = "hidden";
      card.style.maxWidth = "450px";
      card.style.border = "1px solid grey";

      const cardImg = document.createElement("img");
      cardImg.src = product.image;
      cardImg.alt = product.title;

      const cardBody = document.createElement("div");
      cardBody.className = "card_body";
      cardBody.style.padding = "15px";

      const cardTitle = document.createElement("h3");
      cardTitle.className = "card_title";
      cardTitle.textContent = product.title;
      cardTitle.style.fontWeight = "600";

      const cardPrice = document.createElement("p");
      cardPrice.textContent = `$${product.price.toFixed(2)}`;

      const cardText = document.createElement("p");
      cardText.className = "card_text";
      cardText.textContent = product.description;

      const detailsLink = document.createElement("a");
      detailsLink.className = "trending_events_link";
      detailsLink.textContent = "View Details";
      detailsLink.href = `product-details.html?id=${product.id}`; 

      const linkContainer = document.createElement("div");
      linkContainer.style.display = "inline-block";
      linkContainer.appendChild(detailsLink);



      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(cardText);
      cardBody.appendChild(linkContainer); 

      card.appendChild(cardImg);
      card.appendChild(cardBody);

      cardGroup.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


displayProducts();