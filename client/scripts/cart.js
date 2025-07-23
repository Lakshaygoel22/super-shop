async function displayCart() {
  const products = await fetchProducts();
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.getElementById("cart-items");

  container.innerHTML = "";
  let total = 0;

  cart.forEach(ci => {
    const p = products.find(p => p._id === ci.id);
    const subtotal = ci.qty * p.price;
    total += subtotal;

    container.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>₹${p.price} × ${ci.qty} = ₹${subtotal}</p>
      </div>
    `;
  });

  document.getElementById("total").textContent = `Total: ₹${total}`;
}

displayCart();
