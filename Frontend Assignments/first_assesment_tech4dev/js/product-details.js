import { ProductService } from './products.js';

async function displayProductDetails() {
    const productService = new ProductService();
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    try {
        const product = await productService.getProductById(productId);
        const productDetailsContainer = document.getElementById('product-details');

     productDetailsContainer.innerHTML = `
            <div class="productDetails">
                <section class="w-full rounded-md h-[300px] p-[30px] bg-white/10">
                    <img src="${product.image}" alt="${product.title}" class="h-[300px] mx-auto  object-cover" />
                </section>
                <div class="flex w-full p-8 px-[20px] gap-[30px] my-[20px] ">
                    <div class="w-2/3">
                        <h1 class="text-2xl font-bold my-[10px]">${product.title}</h1>
                        <div class="flex gap-[15px]">
                            <span  class="text-[#783EAD] font-semibold">Price: <span class="text-black">${product.price}</span>  </span>
                            <span class="text-[#783EAD] font-semibold">Category: <span class="text-black">${product.category}</span> </span>
                        </div>
                         <div class="flex gap-[15px]">
                            <span class="text-[#783EAD] font-semibold">Price: <span class="text-black">${product.rating.rate}</span> </span>
                            <span class="text-[#783EAD] font-semibold">Category: <span class="text-black">${product.rating.count}</span> </span>
                        </div>
                   
                        <div class="my-3">
                            <h3 class="font-semibold">Product Description</h3>
                            <p>${product.description}</p>
                        </div>
                        <div>
                            <h3 class="text-[16px] font-bold mb-3">Tickets Pricing</h3>
                            <section class="flex gap-3">
                                <div>
                                    <h4 class="text-[20px]">Single</h4>
                                   
                                </div>
                                <div>
                                    <h4 class="text-[20px]">Pair</h4>
                                   
                                </div>
                            </section>
                            <button class="signup_button mt-3">Buy Now</button>
                        </div>
                    </div>
                    <section class="w-1/3">
                        <h2 class="font-semibold mb-4">Contact Organizers</h2>
                        <div class="flex gap-4">
                            <span class="w-[40px] h-[40px] rounded-md p-2 bg-[#783EAD] text-white">
                                <img src="./assets/icons8-diagonal-arrow-96.png" alt="" />
                            </span>
                            <span class="w-[40px] h-[40px] rounded-md p-2 bg-[#783EAD] text-white">
                                <img src="./assets/icons8-diagonal-arrow-96.png" alt="" />
                            </span>
                            <span class="w-[40px] h-[40px] rounded-md p-2 bg-[#783EAD] text-white">
                                <img src="./assets/icons8-diagonal-arrow-96.png" alt="" />
                            </span>
                        </div>
                        <h2 class="font-semibold my-8">Directions</h2>
                        <img src="./assets/rec5.jpg" class="w-[400px]" alt="">
                    </section>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

displayProductDetails();
