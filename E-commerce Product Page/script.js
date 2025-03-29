const products = [
    { name: "Camera", image: "images/camera.jpg", price: "₹10,000" },
    { name: "Charger", image: "images/charger.jpg", price: "₹500" },
    { name: "Earbuds", image: "images/earbuds.jpg", price: "₹1,500" },
    { name: "Hard Drive", image: "images/harddrive.jpg", price: "₹4,000" },
    { name: "Headphones", image: "images/headphones.jpg", price: "₹2,500" },
    { name: "Keyboard", image: "images/keyboard.jpg", price: "₹1,200" },
    { name: "Laptop", image: "images/laptop.jpg", price: "₹50,000" },
    { name: "Monitor", image: "images/monitor.jpg", price: "₹10,000" },
    { name: "Mouse", image: "images/mouse.jpg", price: "₹800" },
    { name: "Powerbank", image: "images/powerbank.jpg", price: "₹1,500" },
    { name: "Smartphone", image: "images/smartphone.jpg", price: "₹30,000" },
    { name: "Smart TV", image: "images/smarttv.jpg", price: "₹40,000" },
    { name: "Smartwatch", image: "images/smartwatch.jpg", price: "₹5,000" },
    { name: "Speaker", image: "images/speaker.jpg", price: "₹2,000" },
    { name: "Tablet", image: "images/tablet.jpg", price: "₹20,000" }
];




const productList = document.getElementById("product-list");
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Load products
if (productList) {
    products.forEach((product, index) => {
        const productCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-price">$${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

function addToCart(index) {
    cartItems.push(products[index]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Added to cart");
}

const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Load cart items
if (cartList) {
    let total = 0;
    cartItems.forEach((item, index) => {
        total += item.price;
        const cartItem = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-price">$${item.price}</p>
                        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
        cartList.innerHTML += cartItem;
    });
    cartTotal.innerText = total;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload();
}

function checkout() {
    alert("Checkout successful! Order placed.");
    localStorage.removeItem("cart");
    location.reload();
}
