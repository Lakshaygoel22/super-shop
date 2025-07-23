// client/scripts/main.js

async function renderProducts(filter = '') {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  try {
    const products = await fetchProducts();
    const container = document.getElementById("product-list");
    container.innerHTML = '';
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (!filtered.length) {
      container.innerHTML = `<p>No matching products found.</p>`;
    }
    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price.toLocaleString()} <br><span class="rating">⭐ ${p.rating}</span></p>
        <a href="product.html?id=${p._id}" class="btn small">View Details</a>
        <button onclick="addToCart('${p._id}')" class="btn">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    alert("Failed to load products.");
  } finally {
    loader.style.display = "none";
  }
}

function addToCart(id) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "✓ Added to cart!";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const item = cart.find(p => p.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  document.getElementById("cart-count").textContent = cart.reduce((sum, p) => sum + p.qty, 0);
}

function checkLoginStatus() {
  const token = localStorage.getItem("token");
  const adminLink = document.getElementById("admin-link");
  const loginLink = document.getElementById("login-link");
  if (token) {
    loginLink.innerText = "Logout";
    loginLink.href = "#";
    loginLink.onclick = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      location.reload();
    };
    // Assume token payload includes isAdmin flag if using JWT
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.isAdmin) adminLink.style.display = "inline-block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProducts();
  checkLoginStatus();

  document.getElementById("search-bar").addEventListener("input", e => {
    renderProducts(e.target.value);
  });
});
