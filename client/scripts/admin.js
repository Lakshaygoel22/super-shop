const ADMIN_API = "http://localhost:5000/api/admin/products";
const adminHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token")
});

document.getElementById("add-product").onsubmit = async e => {
  e.preventDefault();
  await fetch(ADMIN_API, {
    method: "POST",
    headers: adminHeaders(),
    body: JSON.stringify({
      name: document.getElementById("pname").value,
      price: document.getElementById("price").value,
      image: document.getElementById("image").value,
      description: document.getElementById("desc").value
    })
  });
  location.reload();
};

async function loadProducts() {
  const products = await fetch("http://localhost:5000/api/products").then(res => res.json());
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `${p.name} (₹${p.price}) <button onclick="delProduct('${p._id}')">Delete</button>`;
    list.appendChild(li);
  });
}
window.delProduct = async function(id) {
  await fetch(`${ADMIN_API}/${id}`, { method: "DELETE", headers: adminHeaders() });
  location.reload();
}
loadProducts();
