let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart!`);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {

    updateCartCount();
    const cartContainer = document.getElementById("cart");

    if(!cartContainer)
    return;
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `<div>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></div>`;
    });
}

function checkout() {
    alert("Proceeding to Checkout!");
    cart = [];
    updateCart();
}

function updateCartCount(){
    const cartCount = document.getElementById("cart-count");
    if(!cartCount)
        return;
    cartCount.innerText = cart.length;
}
