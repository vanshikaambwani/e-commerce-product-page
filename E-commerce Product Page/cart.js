document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function cleanPrice(price) {
        return parseInt(price.replace(/[^\d]/g, ""), 10) || 0; // Remove non-numeric chars
    }

    function updateCartUI() {
        cartContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = `<p class="empty-cart">Your cart is empty 🛒</p>`;
            totalPriceElement.innerHTML = "Total: ₹0";
            return;
        }

        cart.forEach((item, index) => {
            total += cleanPrice(item.price);

            const productCard = document.createElement("div");
            productCard.classList.add("cart-item");

            productCard.innerHTML = `
                <div class="card">
                    <img src="{item.image}" onerror="this.src='images/placeholder.jpg';" alt="${item.name}">
                    <h3>{item.name}</h3>
                    <p class="price">₹{cleanPrice(item.price)}</p>
                    <button class="remove-btn" data-index="{index}">Remove</button>
                </div>
            `;

            cartContainer.appendChild(productCard);
        });

        totalPriceElement.innerHTML = `<strong>Total: ₹{total}</strong>`;
    }

    cartContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        }
    });

    updateCartUI();
});
