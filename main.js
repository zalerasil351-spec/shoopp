let cart = [];
let cartModal = document.getElementById("cart-modal");
let cartBtn = document.getElementById("cart-btn");
let closeCart = document.getElementById("close-cart");
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let name = btn.dataset.name;
    let price = Number(btn.dataset.price);

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartCount.textContent = cart.length;

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    sum += item.price;
    let elem = document.createElement("p");
    elem.textContent = `${item.name} — ${item.price} ₽`;
    cartItems.appendChild(elem);
  });

  cartTotal.textContent = sum;
}

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});
