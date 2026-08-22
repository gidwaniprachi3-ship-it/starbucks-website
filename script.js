let cart = [];

const cartButtons = document.querySelectorAll(".card-bottom button");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartBtn = document.getElementById("cartBtn");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".coffee-card");

        const name = card.querySelector("h3").innerText;
        const priceText = card.querySelector(".card-bottom span").innerText;

        const price = Number(priceText.replace("₹", ""));

        cart.push({
            name: name,
            price: price
        });

        cartCount.innerText = cart.length;

        alert(name + " added to cart!");

    });

});


cartBtn.addEventListener("click", function() {

    cartModal.style.display = "flex";

    showCart();

});


function showCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerText = "0";
        return;

    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        total = total + item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;

    });

    cartTotal.innerText = total;

}


function closeCart() {

    cartModal.style.display = "none";

}


function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for your order! ☕");

}