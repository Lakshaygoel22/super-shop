async function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const products = await fetchProducts();
  const p = products.find(p => p._id === id);
  const container = document.getElementById("product-detail");
  if (!p) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }
  container.innerHTML = `
    <img src="${p.image}" />
    <h2>${p.name}</h2>
    <p>Price: ₹${p.price}</p>
    <p>${p.description || "No description."}</p>
    <button onclick="addToCart('${p._id}')">🛒 Add to Cart</button>
  `;
}
loadProduct();
