export class Product {
  constructor(id, title, description, price, category, image) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
    
  }
}

export class ProductService {
  async fetch(endpoint, options = {}) {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  async getProducts() {
    return this.fetch("https://fakestoreapi.com/products");
  }

  async getProductById(id) {
    return this.fetch(`https://fakestoreapi.com/products/${id}`);
  }

  async deleteProduct(id) {
    return this.fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    }).then(() => `Product with ID ${id} deleted`);
  }
}

